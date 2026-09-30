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
    import DownloadLink from "$lib/components/DownloadLink.svelte"

    // Assets
    import tileset1 from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/tileset-1.gif";
    import tileset2 from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/tileset-2.png";
    import tileset3 from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/tileset-3.gif";
    import tileset4 from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/tileset-4.png";
    import tileset5 from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/tileset-5.png";
    import player1 from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/player-1.png";
    import player2 from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/player-2.png";
    import player3 from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/player-3.png";
    import level1TimeLaps from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/level-1-timelaps.gif";
    import level1Color from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/level-1-color.png";
    import level1Test from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/level-1-test.gif";
    import camera from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/camera.png";
    import camera2 from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/camera-2.png";
    import windowSettings1 from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/window-settings-1.png";
    import windowSettings2 from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/window-settings-2.png";
    import cameraFixe from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/camera-fixe.png";
    import cameraSuit from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/camera-suit.png";
    import collisions1 from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/collisions-1.gif";
    import collisions2 from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/collisions-2.gif";
    import collisions3 from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/collisions-3.gif";
    import level1 from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/level-1.png";
    import level2 from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/level-2.png";
    import nextLevelArea from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/next-level-area.png";
    import levelTransition from "$lib/assets/pages-medias/ateliers/jeu-de-plateforme/level-transition.gif";
</script>


<svelte:head>
    <title>Atelier - Jeu de plateforme</title>
</svelte:head>


<h1 id="jeu-de-plateforme"><small>Atelier 4 -</small> <span class="title">Jeu de plateforme</span></h1>
<p>
    Dans cet atelier, nous allons créer un jeu de plateforme traditionnel comme les premiers Mario.
</p>
<details class="concepts">
    <summary>Concepts abordés</summary>
    <ul>
        <li>La physique</li>
        <li>Les niveaux</li>
        <li>L'instanciation des scènes</li>
        <li>Les nodes:</li>
        <ul>
            <li><GodotNode node="CharacterBody2D"></GodotNode></li>
            <li><GodotNode node="TileMapLayer"></GodotNode></li>
            <li><GodotNode node="Area2D"></GodotNode></li>
            <li><GodotNode node="Sprite2D"></GodotNode></li>
        </ul>
        <!-- <details>
            <summary>Tous les nodes</summary>
            <ul>
                <li><GodotNode node="Sprite2D"></GodotNode></li>
                <li><GodotNode node="Node2D"></GodotNode></li>
                <li><GodotNode node="AnimatedSprite2D"></GodotNode></li>
            </ul>
        </details> -->
    </ul>
</details>

<h2 id="jeu">Jeu</h2>
<GameIframe title="Jeu de Plateforme" src="https://rselaries.github.io/atelier-jeu-de-plateforme/"></GameIframe>

<h2 id="Création du projet">Création du projet</h2>
<p>
    Pour commencer, téléchargez le dossier <DownloadLink href="assets-ateliers/jeu-de-plateforme.zip">/assets/</DownloadLink> 
    que vous pouvez glisser dans le projet. Comme d'habitude, on utilise le renderer <i>Compatibility</i>.
</p>

<h2 id="tileset">Tileset</h2>
<p>
    Dans un jeu vidéo, que ce soit pour des raisons d'espace de stockage, ou de simplicité,
    on va parfois utiliser des <i>tileset</i>. Un tileset c'est un ensembles de tuiles sur une seule
    image qui permet de créer des niveau entier:
</p>
<div class="side-by-side">
    <ViewableImage showAlt alt="Exemple de tileset (1Bit platformer par Kenney)." src="https://kenney.nl/media/pages/assets/1-bit-platformer-pack/56f3b432d2-1677693067/preview.png"></ViewableImage>
    <ViewableImage showAlt alt="Niveau utilisant ce tileset (Kenney)." src="https://kenney.nl/media/pages/assets/1-bit-platformer-pack/99c0d1a156-1677693069/sample.png"></ViewableImage>
</div>

<p>
    Pour pouvoir utiliser une image tileset dans Godot, il faut créer une resource <GodotNode node="TileSet"></GodotNode>.
</p>

<Note>
    Pour créer une resource, faites un <i>clic-droit</i> dans le <strong>FileSystem</strong> puis
    <GodotIcon object="Object"></GodotIcon> <i>New Resource</i>.
</Note>

<ViewableImage showAlt alt="Création d'une resource TileSet." src={tileset1}></ViewableImage>

<p>
    Quand la resource <GodotNode node="TileSet"></GodotNode> est selectionnée, le dock
    <GodotIcon object="TileSet"></GodotIcon> TileSet s'ouvre en bas de l'écran:
</p>
<ViewableImage showAlt alt="Le dock TileSet." src={tileset2}></ViewableImage>

<p>
    C'est depuis ce dock qu'on configure le tileset: les images, la forme des tuiles, la collision etc.
    La première chose à faire serait de modifier la propriété <code>tile_size</code> de notre resource
    tileset, mais par défaut il elle est à <i>16px/16px</i> ce qui est la bonne taille pour notre tileset.
</p>
<p>
    On peut donc ajouter une nouvelle texture en cliquand sur <GodotIcon object="Add"></GodotIcon>
    puis sur <i>Atlas</i> et enfin on sélectionne la texture <i>"terrain_tileset.png"</i>:
</p>
<ViewableImage showAlt alt="Ajout de la texture terrain_tileset.png." src={tileset3}></ViewableImage>

<Note>
    Ici, Godot va proposer de détecter automatiquement les tuiles, notre tileset étant relativement classique
    <small>(des tuiles de 16/16 sans marges)</small> on peut répondre <i>Yes</i>.
</Note>

<p>
    On peut faire la même chose avec la texture <i>"objects_tileset.png"</i>.
</p>
<ViewableImage showAlt alt="Ajout de la texture objects_tileset.png." src={tileset4}></ViewableImage>

<h2 id="personnage">Personnage</h2>
<p>
    Pour jouer, on a besoin d'un personnage à contrôler. Pour ça on créé une nouvelle scène
    <GodotNode node="CharacterBody2D"></GodotNode> qu'on peut appeller <i>"Player"</i>:
</p>

<ViewableImage showAlt alt="Scène 'Player', un CharacterBody2D." src={player1}></ViewableImage>

<p>
    On doit ajouter une <GodotNode node="CollisionShape2D"></GodotNode> à notre personnage, et on peut
    également lui ajouter un <GodotNode node="Sprite2D"></GodotNode>:
</p>
<ViewableImage showAlt alt="Ajout d'une CollisionShape2D et d'un Sprite2D à 'Player'." src={player2}></ViewableImage>

<h3 id="script-personnage">Script du personnage</h3>
<p>
    Pour que notre personnage puisse se déplacer, il faut lui ajouter un script. On va prendre avantage
    des templates de script de Godot, et sélectionner le template <i>Basic Movement</i> du
    <GodotNode node="CharacterBody2D"></GodotNode>:
</p>
<ViewableImage showAlt alt="Ajout d'un script avec le template 'Basic Movement'." src={player3}></ViewableImage>

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
    Ce script nous permet déjà de se déplacer horizontalement et de sauter.
</p>

<h2 id="niveau-1">Niveau 1</h2>
<p>
    Maintenant qu'on a un <GodotNode node="TileSet"></GodotNode> et un personnage,
    on peut commencer à créer notre premier niveau.
</p>
<p>
    On va donc créer une nouvelle scène <GodotNode node="Node2D"></GodotNode>, on peut la renommer <i>"Level1"</i>. Puis
    on lui ajoute un <GodotNode node="TileMapLayer"></GodotNode>. <small>(Et on oublie pas de bien enregistrer.)</small>
</p>

<Warning>
    Il faut bien ajouter un <GodotNode node="TileMapLayer"></GodotNode> et non pas un
    <GodotNode node="TileMap"></GodotNode>.
    <br><small>(Le node TileMap est deprecated. C'est à dire qu'il est recommander de ne plus l'utiliser.)</small>
</Warning>

<h3 id="utilisation-tilemaplayer">Utilisation du TileMapLayer</h3>
<p>
    Pour fonctionner, un <GodotNode node="TileMapLayer"></GodotNode> nécessite un <GodotNode node="TileSet"></GodotNode>,
    il nous suffit donc d'utiliser celui que l'on a créé plus tôt.
</p>
<p>
    On peut voir que quand le <GodotNode node="TileMapLayer"></GodotNode> est sélectionné, un nouveau dock
    s'ouvre en bas: <GodotIcon object="TileMapPanel"></GodotIcon> TileMap:
</p>
<ViewableImage showAlt alt="Ajout de la texture objects_tileset.png." src={tileset5}></ViewableImage>

<p>
    À partir d'ici, on peut utiliser l'outil <GodotIcon object="Edit"></GodotIcon>, sélectionner une tuile d'une de nos deux
    textures, puis dessiner notre premier niveau:
</p>

<ViewableImage showAlt alt="Timelaps de la création d'un niveau." src={level1TimeLaps}></ViewableImage>

<Note>
    Pour plus de précisions, vous pouvez visiter la page
    <ExternalLink href="https://docs.godotengine.org/fr/3.x/tutorials/2d/using_tilemaps.html">Utilisation de TileMaps</ExternalLink> de la
    documentation de Godot.
</Note>

<p>
    Pour ajouter une couleur de fond à notre niveau, on peut utiliser un <GodotNode node="ColorRect"></GodotNode>:
</p>

<ViewableImage showAlt alt="Ajout d'un ColorRect comme couleur de fond." src={level1Color}></ViewableImage>

<h3 id="pixelisation">Pixélisation</h3>
<p>
    Si on regarde de plus près, on se rend compte que nos textures en pixel art sont toutes floues. Pour résoudre
    ce problème, on va faire la même manipulation que dans la section
    <Link href="atelier/flappy-bird#sprite-du-personnage"> Sprite du personnage - Flappy Bird</Link>:
    <strong>Project</strong> > <strong>Project Settings</strong> puis on modifie
    <i>Rendering > Textures > Default Texture Filter</i> de <strong>Linear</strong> à <strong>Nearest</strong>.
</p>

<h2 id="test-du-jeu">Test du jeu</h2>
<p>
    Si on ajoute le joueur au niveau 1 et qu'on test le jeu on se rend compte de deux problèmes.
</p>

<ViewableImage showAlt alt="Test du jeu." src={level1Test}></ViewableImage>

<h3 id="camera">Camera</h3>
<p>
    Premièrement, on se rend compte qu'on ne voit presque pas notre niveau. Pour rêgler ce problème on peut ajouter
    une <GodotNode node="Camera2D"></GodotNode> à notre niveau, puis cadrer la camera pour voir le niveau entier.
</p>
<ViewableImage showAlt alt="Ajout de la camera." src={camera}></ViewableImage>

<p>
    Ce qui nous donne:
</p>
<ViewableImage showAlt alt="Resultat de la camera dans la scène." src={camera2}></ViewableImage>

<p>
    Mais c'est toujours pas parfait: un jeu en pixel art est souvent plus rapproché, pour imiter les anciens écrans basse
    résolution. Pour atteindre un résultat similaire, on peut modifier les <strong>Project Settings</strong>:
    dans <strong>Display > Window</strong> on peut modifier les propriété <code>viewport_width</code> et
    <code>viewport_height</code> en respectivement <code>640</code> et <code>360</code>. Ensuite, dans <strong>Display >
    Stretch</strong>, on change <code>mode</code> en <strong>viewport</strong> et <code>aspect</code> en
    <strong>keep_height</strong>.
</p>

<div class="side-by-side">
    <ViewableImage showAlt alt="Paramètres de Viewport." src={windowSettings1}></ViewableImage>
    <ViewableImage showAlt alt="Paramètres de Stretch." src={windowSettings2}></ViewableImage>
</div>

<ViewableImage showAlt alt="Paramètres de Stretch." src={windowSettings2}></ViewableImage>

<Note>
    Si vous avez fait un très grand niveau, vous pouvez ajouter la <GodotNode node="Camera2D"></GodotNode> comme
    enfant de la scène <i>Player</i>. De cette manière, la camera va suivre le joueur.
    <div class="side-by-side">
        <ViewableImage showAlt alt="Camera fixe." src={cameraFixe}></ViewableImage>
        <ViewableImage showAlt alt="Camera qui suit le joueur." src={cameraSuit}></ViewableImage>
    </div>
</Note>

<h3 id="collisions">Les Collisions</h3>
<p>
    Deuxièment, et pas des moindres, notre personnage traverse le sol et tombre dans le vide. Heureusement,
    les <GodotNode node="TileSet"></GodotNode>s nous permettent d'ajouter des collisions à nos tuiles.
</p>
<p>
    Pour cela, on sélectionne notre <GodotNode node="TileSet"></GodotNode> et on lui ajoute un <i>Physics Layer</i>.
</p>

<ViewableImage showAlt alt="Ajout d'un Physics Layer au TileSet." src={collisions1}></ViewableImage>

<p>
    Une fois ça fait, on peut modifier les prorpiétés de nos tuiles pour leur ajouter une forme de collision
    en utilisant l'outil <GodotIcon object="Paint"></GodotIcon> Paint.
</p>
<ViewableImage showAlt alt="Paramétrage de la collision des tuiles." src={collisions2}></ViewableImage>

<p>
    Quand on lance le jeu ça nous donne:
</p>
<ViewableImage showAlt alt="Test du jeu avec les collisions." src={collisions3}></ViewableImage>

<h2 id="transitions">Transitions</h2>
<p>
    On a techniquement, dès à présent, un jeu de plateforme fonctionnel. Cependant il serait bien de pouvoir
    avoir plusieurs niveaux. Par exemple j'aimerai avoir ces deux niveaux, et pouvoir passer du premier au second:
</p>
<div class="side-by-side">
    <ViewableImage showAlt alt="Niveau 1." src={level1}></ViewableImage>
    <ViewableImage showAlt alt="Niveau 2." src={level2}></ViewableImage>
</div>

<h3 id="nextlevelarea">NextLevelArea</h3>
<p>
    Pour faire ça, on a besoin de détecter quand le joueur entre dans une zone de transition. Pour cela on utilise
    le node <GodotNode node="Area2D"></GodotNode>.
</p>
<ViewableImage showAlt alt="Transition entre les niveaux." src={nextLevelArea}></ViewableImage>

<p>
    Ensuite on ajoute un script à cet <GodotNode node="Area2D"></GodotNode>. Je vais appeler ce script
    <i>"next_level_area.gd"</i>, le but est de réutiliser ce script pour toutes les zones de transition,
    je vais donc l'enregistrer dans un dossier <i>"/scripts/"</i> à part.
</p>
<p>
    On veut utiliser se connecter au signal <code>body_entered</code> de l'<GodotNode node="Area2D"></GodotNode>,
    mais étant donné que le script sera réutilisé sur différents nodes, on ne peut pas le connecter via 
    le menu <i>Signals</i> comme d'habitude. À la place on va le connecter manuellement via code:
</p>

<pre><code class="gdscript-snippet"><span class="keyword">extends</span> <span class="type">Area2D</span>


<span class="keyword">func</span> <span class="func">_ready</span><span class="symbol">() -> <span class="type">void</span>:</span>
&#9;<span class="member-var">body_entered</span><span class="symbol">.<span class="call-func">connect</span>(<span class="member-var">_on_body_entered</span>)</span>


<span class="keyword">func</span> <span class="func">_on_body_entered</span><span class="symbol">(</span>body<span class="symbol">: <span class="type">Node2D</span>) -> <span class="type">void</span>:</span>
&#9;<span class="control-flow">pass</span>
</code></pre>

<p>
    Ensuite, quand le joueur entre dans cette zone, on veut changer de niveau. Pour changer la scène active on peut
    appeller la fonction <code>change_scene_to_file</code> du <code>tree</code>:
</p>

<pre><code class="gdscript-snippet"><span class="keyword">func</span> <span class="func">_on_body_entered</span><span class="symbol">(</span>body<span class="symbol">: <span class="type">Node2D</span>) -> <span class="type">void</span>:</span>
&#9;<span class="control-flow">if</span> body<span class="symbol">.<span class="member-var">name</span> == <span class="string">"Player"</span>:</span>
&#9;&#9;<span class="call-func">get_tree</span><span class="symbol">().</span><span class="call-func">change_scene_to_file</span><span class="symbol">(<span class="string">"res://levels/level_2.tscn"</span>)</span>
</code></pre>

<ViewableImage showAlt alt="Transition du premier niveau, au second." src={levelTransition}></ViewableImage>

<p>
    Mais on a un problème: la transition est <i>hardcodé</i>. On aimerai pouvoir réutiliser ce script mais changer
    le niveau de destination. Pour cela on va mettre le chemin du niveau dans une variable:
</p>

<pre><code class="gdscript-snippet"><span class="keyword">extends</span> <span class="type">Area2D</span>


<span class="annotation">@export_file_path</span><span class="symbol">(<span class="string">"*.tscn"</span>)</span> <span class="keyword">var</span> <span class="member-var">to_level</span><span class="symbol">:</span> <span class="type">String</span>


<span class="keyword">func</span> <span class="func">_ready</span><span class="symbol">() -> <span class="type">void</span>:</span>
&#9;<span class="member-var">body_entered</span><span class="symbol">.<span class="call-func">connect</span>(<span class="member-var">_on_body_entered</span>)</span>


<span class="keyword">func</span> <span class="func">_on_body_entered</span><span class="symbol">(</span>body<span class="symbol">: <span class="type">Node2D</span>) -> <span class="type">void</span>:</span>
&#9;<span class="control-flow">if</span> body<span class="symbol">.<span class="member-var">name</span> == <span class="string">"Player"</span>:</span>
&#9;&#9;<span class="call-func">get_tree</span><span class="symbol">().</span><span class="call-func">change_scene_to_file</span><span class="symbol">(<span class="member-var">to_level</span>)</span>
</code></pre>

<Note>
    L'annotation <code>@export</code> <small>(et tous ses dérivés)</small> permettent de rendre une
    variable visible dans l'inspecteur. <code>@export_file_path</code> permet de glisser un fichier
    et la variable prendra la valeur du chemin du fichier. <code>"*.tscn"</code> permet de précisé
    que l'on veut le chemin d'un fichier <i>.tscn</i> <small>(donc une scène)</small>.
</Note>