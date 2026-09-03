<script>
    // Components
    import Link from "$lib/components/Link.svelte";
    import ViewableImage from "$lib/components/ViewableImage.svelte";
    import Note from "$lib/components/Note.svelte";
    import ExternalLink from "$lib/components/ExternalLink.svelte";
    import GodotIcon from "$lib/components/GodotIcon.svelte";
    import GodotNode from "$lib/components/GodotNode.svelte";
    import Warning from "$lib/components/Warning.svelte";
    import GameIframe from "$lib/components/GameIframe.svelte";
    import DownloadLink from "$lib/components/DownloadLink.svelte";

    // Assets
    import gameScene from "$lib/assets/pages-medias/ateliers/flappy-bird/game-scene-1.png";
    import bird1 from "$lib/assets/pages-medias/ateliers/flappy-bird/bird-1.gif";
    import bird2 from "$lib/assets/pages-medias/ateliers/flappy-bird/bird-2.png";
    import bird3 from "$lib/assets/pages-medias/ateliers/flappy-bird/bird-3.gif";
    import bird4 from "$lib/assets/pages-medias/ateliers/flappy-bird/bird-4.gif";
    import bird5 from "$lib/assets/pages-medias/ateliers/flappy-bird/bird-5.png";
    import bird6 from "$lib/assets/pages-medias/ateliers/flappy-bird/bird-6.gif";
    import bird7 from "$lib/assets/pages-medias/ateliers/flappy-bird/bird-7.png";
    import bird8 from "$lib/assets/pages-medias/ateliers/flappy-bird/bird-8.gif";
    import global from "$lib/assets/pages-medias/ateliers/flappy-bird/global.gif";
    import commentDoc1 from "$lib/assets/pages-medias/ateliers/flappy-bird/comment-doc-1.png";
    import commentDoc2 from "$lib/assets/pages-medias/ateliers/flappy-bird/comment-doc-2.png";
    import pipe1 from "$lib/assets/pages-medias/ateliers/flappy-bird/pipe-1.png";
    import pipe2 from "$lib/assets/pages-medias/ateliers/flappy-bird/pipe-2.png";
    import pipe3 from "$lib/assets/pages-medias/ateliers/flappy-bird/pipe-3.png";
    import pipe4 from "$lib/assets/pages-medias/ateliers/flappy-bird/pipe-4.png";
    import pipe5 from "$lib/assets/pages-medias/ateliers/flappy-bird/pipe-5.gif";
</script>


<svelte:head>
    <title>Atelier - Flappy Bird</title>
</svelte:head>

<h1 id="devine-le-nombre"><small>Atelier 3 -</small> <span class="title">Flappy Bird</span></h1>
<p>
    Dans cet atelier, nous allons recréer le jeu <i>Flappy Bird</i>.
</p>
<details class="concepts">
    <summary>Concepts abordés</summary>
    <ul>
        <li>Le système de Nodes et Scènes</li>
    </ul>
</details>

<h2 id="jeu">Jeu</h2>
<GameIframe title="Flappy Bird" src="https://rselaries.github.io/atelier-flappy-bird"></GameIframe>

<h2 id="creation-scene-de-jeu">Création de la scène de jeu</h2>
<p>
    Avant de commencer, téléchargez le dossier <DownloadLink href="assets-ateliers/flappy-bird.zip">assets</DownloadLink>
    qui contient toutes les textures et fontes, puis glissez le dans le projet.
</p>
<p>
    Pour ce jeu, on va commencer par créer la scène de jeu principale. Pour cela on utilise un
    <GodotNode node="Node2D"></GodotNode>. On peut le renommer <i>"Game"</i>, puis enregistrer la scène dans
    un dossier <i>/Game/</i>.
</p>

<ViewableImage showAlt alt="La scène de jeu principale. Un Node2D renommé 'Game'." src={gameScene}></ViewableImage>

<h2 id="personnage">Personnage</h2>
<p>
    Pour jouer, on a besoin d'un personnage. Pour faire notre personnage, on créer une nouvelle scène avec un
    <GodotNode node="CharacterBody2D"></GodotNode> en racine qu'on peut renommer <i>'Bird'</i>.
</p>

<ViewableImage showAlt alt="Création de la scène du personnage. Un CharacterBody2D renommé 'Bird'." src={bird1}></ViewableImage>

<h3 id="sprite-du-personnage">Sprite du personnage</h3>
<p>
    Pour ajouter une <i>image</i> à notre personnage, on utilise le node <GodotNode node="Sprite2D"></GodotNode> auquel
    on ajoute la texture <i>'bird.png'</i>. On peut aussi modifier sa propriété <code>scale</code> à <code>3.0</code> pour
    que l'image soit plus grande.
</p>

<ViewableImage showAlt alt="Ajout d'un Sprite2D à notre personnage" src={bird2}></ViewableImage>

<p>
    Mais on se rend compte que cette texture comprend deux image. Pour n'en afficher qu'une seule, on peut modifier
    sa <code>region</code>:
</p>

<ViewableImage showAlt alt="Modification de la region du sprite." src={bird3}></ViewableImage>

<p>
    Mais on se rend compte que la texture en pixel art est toute floue, pourquoi ?
    <br>Par défaut Godot applique un filtre qui lisse les pixels, c'est utile pour les textures en hautes qualité,
    mais pour les textures en pixel art ça ne rend pas bien.
</p>
<p>
    Pour modifier le filtre par défaut utilisé sur les textures, on se rend dans le menu <strong>Project</strong> puis
    <strong><GodotIcon object="ClassList"></GodotIcon> Project Settings</strong>. Dans les paramètres de projet on
    va modifier le paramètre <strong>Rendering > Textures > Default Texture Filter</strong> qu'on passe de <b>Linear</b>
    à <b>Nearest</b>.
</p>

<ViewableImage showAlt alt="Rendu 'pixélisé' des textures en modifier le filtre sur 'Nearest'." src={bird4}></ViewableImage>

<h3 id="collision-du-personnage">Collision du personnage</h3>
<p>
    On peut voir sur notre node <i>'Bird'</i> un <GodotIcon object="NodeWarning"></GodotIcon> avertissement qui nous dis:
</p>
<Warning title="Node Configuration Warning!">
    <ul>
        <li>This node has no shape, so it can't collide or interact with other objects.</li>
        <br>
        Consider adding a CollisionShape2D or CollisionPolygon2D as a child to define its shape.
    </ul>
</Warning>

<p>
    Les nodes qui utilisent la physique <small>(<GodotNode node="CharacterBody2D"></GodotNode>,
    <GodotNode node="StaticBody2D"></GodotNode>, <GodotNode node="RigidBody2D"></GodotNode>, etc)</small>
    ont besoin d'une forme pour calculer les collisions. Pour cela il faut leur ajouter un node
    <GodotNode node="CollisionShape2D"></GodotNode>.
</p>

<ViewableImage showAlt alt="Ajout d'une CollisionShape2D." src={bird5}></ViewableImage>

<p>
    Le node <GodotNode node="CollisionShape2D"></GodotNode> a besoin d'une <i>resource</i> <code>shape</code>.
    On a le choix entre plusieures formes, le plus simple et efficace pour un personnage 2D est d'utiliser un
    <GodotIcon object="CircleShape2D"></GodotIcon> cercle: 
</p>

<ViewableImage showAlt alt="Ajout d'un CircleShape2D à la CollisionShape2D." src={bird6}></ViewableImage>

<h3 id="script-du-personnage">Script du personnage</h3>
<p>
    Maintenant pour pouvoir contrôler notre personnage, il faut lui ajouter un script.
    <small>(Avec le bouton <GodotIcon object="ScriptCreate"></GodotIcon>)</small>
</p>
<p>
    Certains nodes de Godot ont des templates de scripts, le node <GodotNode node="CharacterBody2D"></GodotNode>
    contient le template 'Basic Movement' qu'on va utiliser.
</p>

<ViewableImage showAlt alt="Ajout d'un CircleShape2D à la CollisionShape2D." src={bird7}></ViewableImage>

<p>
    Le template <i>Basic Movement</i> nous créé le script suivant:
</p>

<pre><code class="gdscript-snippet"><span class="keyword">extends</span> <span class="type">CharacterBody2D</span>


<span class="keyword">const</span> <span class="member-var">SPEED</span> <span class="symbol">=</span> <span class="number">300.0</span>
<span class="keyword">const</span> <span class="member-var">JUMP_VELOCITY</span> <span class="symbol">=</span> <span class="number">-400.0</span>


<span class="keyword">func</span> <span class="func">_physics_process</span><span class="symbol">(</span>delta<span class="symbol">: <span class="type">float</span>) -> <span class="type">void</span>:</span>
&#9;<span class="comment"># Add the gravity.</span>
&#9;<span class="control-flow">if</span> <span class="keyword">not</span> <span class="call-func">is_on_floor</span><span class="symbol">():</span>
&#9;&#9;<span class="member-var">velocity</span> <span class="symbol">+=</span> <span class="call-func">get_gravity</span><span class="symbol">()</span> <span class="symol">*</span> delta
&#9;
&#9;<span class="comment"># Handle jump.</span>
&#9;<span class="control-flow">if</span> <span class="type">Input</span><span class="symol">.</span><span class="call-func">is_action_pressed</span><span class="symbol">(<span class="string">"ui_accept"</span>)</span> <span class="keyword">and</span> <span class="call-func">is_on_floor</span><span class="symbol">():</span>
&#9;&#9;<span class="member-var">velocity<span class="symbol">.</span>y</span> <span class="symbol">=</span> <span class="member-var">JUMP_VELOCITY</span>
&#9;
&#9;<span class="comment"># Get the input direction and handle the movement/deceleration.</span>
&#9;<span class="comment"># As good practice, you should replace UI actions with custom gameplay actions.</span>
&#9;<span class="keyword">var</span> direction <span class="symbol">:=</span> <span class="type">Input</span><span class="symbol">.<span class="span call-func">get_axis</span>(<span class="string">"ui_left"</span>, <span class="string">"ui_right"</span>)</span>
&#9;<span class="control-flow">if</span> direction<span class="symbol">:</span>
&#9;&#9;<span class="member-var">velocity<span class="symbol">.</span>x</span> <span class="symbol">=</span> direction <span class="symbol">*</span> <span class="member-var">SPEED</span>
&#9;<span class="control-flow">else</span><span class="symbol">:</span>
&#9;&#9;<span class="member-var">velocity<span class="symbol">.</span>x</span> <span class="symbol">=</span> <span class="global-func">move_toward</span><span class="symbol">(<span class="member-var">velocity<span class="symbol">.</span>x</span>, <span class="number">0</span>, <span class="member-var">SPEED</span>)</span>
&#9;
&#9;<span class="call-func">move_and_slide</span><span class="symbol">()</span>
</code></pre>

<p>
    Ce script permet au personnage de se déplacer latéralement, ce que notre personnage ne doit pas
    pouvoir faire. On peut donc supprimer toute la section qui calcule <code>direction</code>:
</p>

<pre><code class="gdscript-snippet"><span class="keyword">extends</span> <span class="type">CharacterBody2D</span>


<span class="keyword">const</span> <span class="member-var">JUMP_VELOCITY</span> <span class="symbol">=</span> <span class="number">-400.0</span>


<span class="keyword">func</span> <span class="func">_physics_process</span><span class="symbol">(</span>delta<span class="symbol">: <span class="type">float</span>) -> <span class="type">void</span>:</span>
&#9;<span class="comment"># Add the gravity.</span>
&#9;<span class="control-flow">if</span> <span class="keyword">not</span> <span class="call-func">is_on_floor</span><span class="symbol">():</span>
&#9;&#9;<span class="member-var">velocity</span> <span class="symbol">+=</span> <span class="call-func">get_gravity</span><span class="symbol">()</span> <span class="symol">*</span> delta
&#9;
&#9;<span class="comment"># Handle jump.</span>
&#9;<span class="control-flow">if</span> <span class="type">Input</span><span class="symol">.</span><span class="call-func">is_action_pressed</span><span class="symbol">(<span class="string">"ui_accept"</span>)</span><span class="symbol">:</span>
&#9;&#9;<span class="member-var">velocity<span class="symbol">.</span>y</span> <span class="symbol">=</span> <span class="member-var">JUMP_VELOCITY</span>
&#9;
&#9;<span class="call-func">move_and_slide</span><span class="symbol">()</span>
</code></pre>

<details>
    <summary>Explication en détail de ce script</summary>
    <ol>
        <li>
            <code class="gdscript-snippet inline"><span class="keyword">extends</span>
            <span class="type">CharacterBody2D</span></code>
            <br><br>
            Cette ligne précise le type de node auquel est rattaché ce script.
        </li>
        <br>
        <li>
            <code class="gdscript-snippet inline"><span class="keyword">const</span>
            <span class="member-var">JUMP_VELOCITY</span> <span class="symbol">=</span>
            <span class="number">-400.0</span></code>
            <br><br>
            Cette ligne définie une valeur appellée <i>JUMP_VELOCITY</i> qui vaut <code>300</code>.
            <small>(Cette valeur est une <code>const</code>, c'est à dire une <i>constante</i>. Une <i>constante</i>
            est une variable dont la valeur ne peut pas changer)</small>
        </li>
        <br>
        <li>
            <code class="gdscript-snippet inline"><span class="keyword">func</span>
            <span class="func">_physics_process</span><span class="symbol">(</span>delta<span class="symbol">:
            <span class="type">float</span>) -> <span class="type">void</span>:</span></code>
            <br><br>
            La fonction <code>_physics_process</code> est appellée à intervalle régulier
            <small>(par défaut, 60 fois par seconde)</small>. Elle est utilisée pour toute action qui intéragit avec
            le moteur physique de Godot.
            <br>La variable <code>delta</code> représente la durée que le moteur de jeu a passée à générer la dernière
            image. Donc si le <i>physics process</i> tourne à 60<i>i/s</i>, delta vaudra en moyenne <strong>0.0166</strong>.
        </li>
        <br>
        <li>
            <code class="gdscript-snippet inline"><span class="control-flow">if</span> <span class="keyword">not</span> <span class="call-func">is_on_floor</span><span class="symbol">():</span></code>
            <br><code class="gdscript-snippet inline"><span class="memver-var">velocity</span> <span class="symbol">+=</span> <span class="call-func">get_gravity</span><span class="symbol">()</span> <span class="symol">*</span> delta</code>
            <br><br>
            Si le joueur n'est pas au sol, on lui applique la gravité. Ici la valeur de gravité est multipliée par
            <code>delta</code> pour s'assurer que la vitesse de la gravité sois stable quelque soit le nombre
            d'images par secondes.
        </li>
        <br>
        <li>
            <code class="gdscript-snippet inline"><span class="control-flow">if</span> <span class="type">Input</span><span class="symol">.</span><span class="call-func">is_action_pressed</span><span class="symbol">(<span class="string">"ui_accept"</span>)</span><span class="symbol">:</span></code>
            <br><code class="gdscript-snippet inline"><span class="member-var">velocity<span class="symbol">.</span>y</span> <span class="symbol">=</span> <span class="member-var">JUMP_VELOCITY</span></code>
            <br><br>
            La fonction <code>Input.is_action_pressed</code> permet de savoir si le joueur vient d'appuyer sur une
            touche. Si le joueur appuie sur une des touches liée à l'action <code>"ui_accept"</code>, on ajoute une
            force verticale au joueur pour le faire sauter.
        </li>
        <br>
        <li>
            <code class="gdscript-snippet inline"><span class="call-func">move_and_slide</span><span class="symbol">()</span></code>
            <br><br>
            On appelle la fonction <code>move_and_slide</code> du <GodotNode node="CharacterBody2D"></GodotNode> pour calculer
            sa physique à l'aide de sa <code>velocity</code>.
        </li>
    </ol>
</details>
<br>

<p>
    On peut ajouter la scène du personnage dans notre scène 'Game' et tester le jeu
    <small>(avec le bouton <GodotIcon object="PlayScene"></GodotIcon>)</small>.
</p>

<ViewableImage showAlt alt="Ajout du personnage 'Bird' à la scène de 'Game' et test du jeu." src={bird8}></ViewableImage>

<Note>
    Dans cette vidéo j'ai utilisé le raccourci <strong>F6</strong> pour tester le jeu.
    <br>Pour ajouter une scène dans une autre, vous pouvez glisser le fichier <i>.tscn</i>
    ou utiliser le bouton <GodotIcon object="Instance"></GodotIcon>.
</Note>

<h2 id="global-gd">Global.gd</h2>
<p>
    Dans Godot, on a parfois besoin d'<strong>accéder à des variables depuis n'importe où dans le projet</strong>.
    Par exemple pour notre jeu on aimerai que tous les nodes puissent accéder au score.
    Pour ça, on peut utiliser des <i>Autoloads</i>. Un autoload est un script ou une scène qui sera ajouté à la 
    racine du projet et sera accessible partout.
</p>
<p>
    On va créer un autoload, qu'on va appeler <i>Global</i>, qui va contenir les informations du score, de
    la vitesse du jeu, et certaines fonctions. Pour ça, on créer un nouveau script, puis dans les
    <strong>Project Settings</strong> > <strong>Global</strong> on ajoute ce script dans les autoloads:
</p>

<ViewableImage showAlt alt="Création de l'autoload 'Global'." src={global}></ViewableImage>

<p>
    On peut maintenant accéder au variables et fonctions en faisant
    <code class="gdscript-snippet inline"><span class="type">Global</span><span class="symbol">.</span><span class="member-var">some_variable</span></code>
    et <code class="gdscript-snippet inline"><span class="type">Global</span><span class="symbol">.<span class="call-func">some_function</span>()</span></code>.
</p>
<p>
    Pour l'instant on a besoin d'avoir une variable pour le score, la vitesse des tuyaux et une fonction quand le joueur
    touche le tuyau: 
</p>

<pre><code class="gdscript-snippet"><span class="comment"># Global autoload</span>
<span class="keyword">extends</span> <span class="type">Node</span>


<span class="doc-comment">## La vitesse par défaut.</span>
<span class="keyword">const</span> <span class="member-var">BASE_SPEED</span><span class="symbol">: <span class="type">float</span> =</span> <span class="number">100</span>


<span class="doc-comment">## Signal émit quand le score change.</span>
<span class="keyword">signal</span> <span class="member-var">score_changed</span>
<span class="doc-comment">## Signal émit quand le personnage meure.</span>
<span class="keyword">signal</span> <span class="member-var">died</span>


<span class="doc-comment">## Le score de la partie en cours.</span>
<span class="keyword">var</span> <span class="member-var">score</span><span class="symbol">: <span class="type">int</span> =</span> <span class="number">0</span>
<span class="doc-comment">## Le meilleur score.</span>
<span class="keyword">var</span> <span class="member-var">best_score</span><span class="symbol">: <span class="type">int</span> =</span> <span class="number">0</span>
<span class="doc-comment">## La vitesse des tuyaux en px/s.</span>
<span class="keyword">var</span> <span class="member-var">speed</span><span class="symbol">: <span class="type">float</span> =</span> <span class="number">100</span>
<span class="doc-comment">## Représente si le joueur peut jouer ou non.</span>
<span class="keyword">var</span> <span class="member-var">dead</span><span class="symbol">: <span class="type">bool</span> =</span> <span class="keyword">false</span>


<span class="doc-comment">## Appellez cette fonction quand le joueur a perdu.</span>
<span class="keyword">func</span> <span class="func">die</span><span class="symbol">() -> <span class="type">void</span>:</span>
&#9;<span class="member-var">dead</span> <span class="symbol">=</span> <span class="keyword">true</span>
&#9;<span class="member-var">died</span><span class="symbol">.<span class="call-func">emit</span>()</span>


<span class="doc-comment">## Appellez cette fonction pour augmenter le score.</span>
<span class="keyword">func</span> <span class="func">increment_score</span><span class="symbol">() -> <span class="type">void</span>:</span>
&#9;<span class="member-var">score</span> <span class="symbol">+=</span> <span class="number">1</span>
&#9;<span class="comment"># Si le score est suppérieur au meilleur score,</span>
&#9;<span class="comment"># il faut mettre à jour le meilleur score.</span>
&#9;<span class="control-flow">if</span> <span class="member-var">score <span class="symbol">></span> best_score</span><span class="symbol">:</span>
&#9;&#9;<span class="member-var">best_score <span class="symbol">=</span> score</span>
&#9;<span class="member-var">score_changed</span><span class="symbol">.<span class="call-func">emit</span>()</span>
</code></pre>

<Note>
    Les commentaires qui commencent par <code>##</code> sont des commentaires de documentation, ils seront affichés
    dans l'éditeur de texte au moment de chercher une valeur:
    <div class="side-by-side">
        <ViewableImage src={commentDoc1}></ViewableImage>
        <ViewableImage src={commentDoc2}></ViewableImage>
    </div>
</Note>

<h3 id="modif-code-personnage">Modification du code du personnage</h3>
<p>
    On peut intégrer la variable <code>dead</code> au code du personnage:
</p>

<pre><code class="gdscript-snippet"><span class="keyword">func</span> <span class="func">_physics_process</span><span class="symbol">(</span>delta<span class="symbol">: <span class="type">float</span>) -> <span class="type">void</span>:</span>
&#9;<span class="comment"># Add the gravity.</span>
&#9;<span class="control-flow">if</span> <span class="keyword">not</span> <span class="call-func">is_on_floor</span><span class="symbol">():</span>
&#9;&#9;<span class="member-var">velocity</span> <span class="symbol">+=</span> <span class="call-func">get_gravity</span><span class="symbol">()</span> <span class="symol">*</span> delta
&#9;
&#9;<span class="comment"># Handle jump.</span>
&#9;<span class="control-flow">if</span> <span class="type">Input</span><span class="symol">.</span><span class="call-func">is_action_pressed</span><span class="symbol">(<span class="string">"ui_accept"</span>)</span> <span class="keyword">and not</span> <span class="type">Global</span><span class="symbol">.<span class="member-var">dead</span>:</span>
&#9;&#9;<span class="member-var">velocity<span class="symbol">.</span>y</span> <span class="symbol">=</span> <span class="member-var">JUMP_VELOCITY</span>
&#9;
&#9;<span class="call-func">move_and_slide</span><span class="symbol">()</span>
</code></pre>

<Note>
    On ajoute la condition <code class="gdscript-snippet inline"><span class="keyword">and not</span>
    <span class="type">Global</span><span class="symbol">.<span class="member-var">dead</span></span></code>
    pour empêcher le joueur de sauter quand il a perdu.
</Note>

<h2 id="tuyaux">Tuyaux</h2>
<p>
    Il nous faut maintenant des obstacles que le joueur va devoir esquiver. Étant donné qu'on veut détecte
    si le joueur entre en collision avec les tuyaux, on va créer une scène <GodotNode node="Area2D"></GodotNode>.
</p>

<ViewableImage showAlt alt="Scène 'Pipe', une Area2D." src={pipe1}></ViewableImage>

<h3 id="sprite-des-tuyaux">Sprite des tuyaux</h3>
<p>
    On peut ajouter à notre tuyau deux <GodotNode node="Sprite2D"></GodotNode> avec la texture du tuyau.
</p>

<ViewableImage showAlt alt="Ajout des sprites du tuyau." src={pipe2}></ViewableImage>

<Note>
    Les deux sprite ont une <code>scale</code> de <code>3</code>, pour être à la même échelle
    que la scène <i>Bird</i>. Les tuyaux sont en <code>Vector(0, 500)</code> et <code>Vector(0, -500)</code>,
    vous pouvez les raprocher ou éloigner. Le tuyau du haut est retourné avec une <code>rotation</code> à <code>180</code>.
</Note>

<h3 id="collision-du-tuyau">Collision du tuyau</h3>
<p>
    Tout comme pour notre personnage, nos tuyaux ont besoin d'une <GodotNode node="CollisionShape2D"></GodotNode>:
</p>

<ViewableImage showAlt alt="Ajout des CollisionShape2Ds." src={pipe3}></ViewableImage>

<p>
    En plus de détecter quand le joueur touche un tuyau <small>(et donc perd)</small>, on veut savoir quand
    le joueur dépasse les tuyaux et donc gagne un point. Pour cela on ajoute une <GodotNode node="Area2D"></GodotNode>
    en plus, avec sa propre <GodotNode node="CollisionShape2D"></GodotNode>:
</p>

<ViewableImage showAlt alt="Ajout d'une Area2D pour augmenter le score." src={pipe4}></ViewableImage>

<h3 id="script-du-tuyau">Script du tuyau</h3>
<p>
    On peut maitenant ajouter un script à notre scène. On va ensuite connecter les signaux <code>body_entered</code>
    de nos deux <GodotNode node="Area2D"></GodotNode> à notre script:
</p>

<ViewableImage showAlt alt="Connection des signaux 'body_entered' des deux Area2Ds." src={pipe5}></ViewableImage>

<p>
    Ce qui nous donne ce script:
</p>
<pre><code class="gdscript-snippet inline"><span class="keyword">extends</span> <span class="type">Area2D</span>


<span class="comment"># Mouvements du tuyau</span>
<span class="keyword">func</span> <span class="func">_physics_process</span><span class="symbol">(</span>delta<span class="symbol">: <span class="type">float</span>) -> <span class="type">void</span>:</span>
&#9;<span class="control-flow">pass</span>


<span class="comment"># Quand le joueur touche le tuyau</span>
<span class="keyword">func</span> <span class="func">_on_body_entered</span><span class="symbol">(</span>body<span class="symbol">: <span class="type">Node2D</span>) -> <span class="type">void</span>:</span>
&#9;<span class="control-flow">pass</span>


<span class="comment"># Le joueur gagne un point</span>
<span class="keyword">func</span> <span class="func">_on_increment_score_area_body_entered</span><span class="symbol">(</span>body<span class="symbol">: <span class="type">Node2D</span>) -> <span class="type">void</span>:</span>
&#9;<span class="control-flow">pass</span>
</code></pre>

<h4>Déplacement du tuyau</h4>
<p>
    Pour déplacer le tuyau, il faut le faire dans une fonction qui se répète chaque frame. Pour ça on deux choix:
    <code>_process</code> et <code>_physics_process</code>. Étant donné que notre joueur se déplace déjà dans 
    <code>_physics_process</code>, on va faire la même pour les tuyaux:
</p>

<pre><code class="gdscript-snippet inline"><span class="keyword">func</span> <span class="func">_physics_process</span><span class="symbol">(</span>delta<span class="symbol">: <span class="type">float</span>) -> <span class="type">void</span>:</span>
&#9;<span class="member-var">global_position<span class="symbol">.</span>x</span> <span class="symbol">-= <span class="type">Global</span>.<span class="member-var">speed</span> *</span> delta
</code></pre>

<Note>
    La variable <code>speed</code> étant en <i>px/s</i>, si on modifiait la position du tuyau de cette valeur
    à chaque frame, le tuyau se déplacerai de 100 pixels chaque image et donc 6000 pixels par seconde.
    Pour s'assurer que le déplacement se fasse indépendamment du nombre d'images par seconde, on multiplie
    la valeut par <code>delta</code>.
</Note>

<h4>Fin du jeu</h4>
<p>
    Si le joueur entre en collision avec un tuyau, on veut arrêter le jeu. Pour ça on va utiliser
    la fonction <code>die</code> que l'on a définie dans <code>Global</code>:
</p>

<pre><code class="gdscript-snippet inline"><span class="keyword">func</span> <span class="func">_on_body_entered</span><span class="symbol">(</span>body<span class="symbol">: <span class="type">Node2D</span>) -> <span class="type">void</span>:</span>
&#9;<span class="control-flow">if</span> body<span class="symbol">.<span class="member-var">name</span> == <span class="string">"Bird"</span>:</span>
&#9;&#9;<span class="type">Global</span><span class="symbol">.<span class="call-func">die</span>()</span>
</code></pre>

<h4>Augmentation du score</h4>
<p>
    Si le joueur atteint la zone de score du tuyau, on augmente son score en appelant la fonction <code>increment_score</code>
    de <code>Global</code>:
</p>

<pre><code class="gdscript-snippet inline"><span class="keyword">func</span> <span class="func">_on_increment_score_area_body_entered</span><span class="symbol">(</span>body<span class="symbol">: <span class="type">Node2D</span>) -> <span class="type">void</span>:</span>
&#9;<span class="control-flow">if</span> body<span class="symbol">.<span class="member-var">name</span> == <span class="string">"Bird"</span>:</span>
&#9;&#9;<span class="type">Global</span><span class="symbol">.<span class="call-func">increment_score</span>()</span>
</code></pre>

<h4>Code complet</h4>

<pre><code class="gdscript-snippet inline"><span class="keyword">extends</span> <span class="type">Area2D</span>


<span class="comment"># Mouvements du tuyau</span>
<span class="keyword">func</span> <span class="func">_physics_process</span><span class="symbol">(</span>delta<span class="symbol">: <span class="type">float</span>) -> <span class="type">void</span>:</span>
&#9;<span class="member-var">global_position<span class="symbol">.</span>x</span> <span class="symbol">-= <span class="type">Global</span>.<span class="member-var">speed</span> *</span> delta


<span class="comment"># Quand le joueur touche le tuyau</span>
<span class="keyword">func</span> <span class="func">_on_body_entered</span><span class="symbol">(</span>body<span class="symbol">: <span class="type">Node2D</span>) -> <span class="type">void</span>:</span>
&#9;<span class="control-flow">if</span> body<span class="symbol">.<span class="member-var">name</span> == <span class="string">"Bird"</span>:</span>
&#9;&#9;<span class="type">Global</span><span class="symbol">.<span class="call-func">die</span>()</span>


<span class="comment"># Le joueur gagne un point</span>
<span class="keyword">func</span> <span class="func">_on_increment_score_area_body_entered</span><span class="symbol">(</span>body<span class="symbol">: <span class="type">Node2D</span>) -> <span class="type">void</span>:</span>
&#9;<span class="control-flow">if</span> body<span class="symbol">.<span class="member-var">name</span> == <span class="string">"Bird"</span>:</span>
&#9;&#9;<span class="type">Global</span><span class="symbol">.<span class="call-func">increment_score</span>()</span>
</code></pre>

<h2 id="assemblage">Assemblage</h2>