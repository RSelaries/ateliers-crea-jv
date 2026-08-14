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

    // Assets
    import creationScene from "$lib/assets/pages-medias/ateliers/devine-le-nombre/creation-scene.png";
    import lineEdit from "$lib/assets/pages-medias/ateliers/devine-le-nombre/lineedit.gif";
    import label from "$lib/assets/pages-medias/ateliers/devine-le-nombre/label.gif";
    import button from "$lib/assets/pages-medias/ateliers/devine-le-nombre/button.gif";
    import childrenNo from "$lib/assets/pages-medias/ateliers/devine-le-nombre/children-no.png";
    import childrenYes from "$lib/assets/pages-medias/ateliers/devine-le-nombre/children-yes.png";
    import testSecretNumber from "$lib/assets/pages-medias/ateliers/devine-le-nombre/test-secret-number.gif";
    import textSubmitted from "$lib/assets/pages-medias/ateliers/devine-le-nombre/text-submitted.gif";
    import testLineEdit from "$lib/assets/pages-medias/ateliers/devine-le-nombre/test-line-edit.gif";
    import testInt from "$lib/assets/pages-medias/ateliers/devine-le-nombre/test-int.gif";
    import testComparaisons from "$lib/assets/pages-medias/ateliers/devine-le-nombre/test-comparaisons.gif";
    import randomNumber from "$lib/assets/pages-medias/ateliers/devine-le-nombre/random-number.gif";
    import buttonPressed from "$lib/assets/pages-medias/ateliers/devine-le-nombre/button-pressed.gif";
    import onready from "$lib/assets/pages-medias/ateliers/devine-le-nombre/onready.gif";
    import noderefInfo from "$lib/assets/pages-medias/ateliers/devine-le-nombre/noderef.png";
    import communication from "$lib/assets/pages-medias/ateliers/devine-le-nombre/communication.gif";
</script>


<svelte:head>
    <title>Atelier - Devine le nombre</title>
</svelte:head>

<h1 id="devine-le-nombre"><small>Atelier 2 -</small> <span class="title">Devine le nombre</span></h1>
<p>
    Dans cet atelier, nous allons créer un jeu "devine le nombre".
</p>
<details>
    <summary>Concepts abordés</summary>
    <ul>
        <li>Le GDScript</li>
        <li>Le système de Nodes et Scènes</li>
    </ul>
</details>

<h2 id="jeu">Jeu</h2>
<GameIframe src="https://rselaries.github.io/atelier-devine-le-nombre" title="Devine le nombre"></GameIframe>

<h2 id="creation-du-projet">Création du projet</h2>
<p>
    Pour ce premier jeu, on peut réutiliser le projet <Link href="atelier/hello-world">Hello World!</Link>.
    On a donc:
</p>
<ul>
    <li>Un <i>projet Godot</i> qui utilise le renderer <strong>compatibility</strong></li>
    <li>une <i>scène</i> avec un node <GodotNode node="Control"></GodotNode> à la racine</li>
    <li>un script attaché au node racine</li>
</ul>
<ViewableImage src={creationScene}></ViewableImage>

<h2 id="creation-scene-de-jeu">Création de la scène de jeu</h2>
<p>
    Pour ce premier jeu, on va créer une scène très simple. Pour un jeu <i>devine le nombre</i>, il faut:
</p>
<ul>
    <li><strong>Du texte</strong>: pour préciser au joueur si sa réponse est trop petite ou trop grande</li>
    <li><strong>Une entrée texte</strong>: pour que le joueur puisse entrer sa réponse</li>
    <li><strong>Un bouton</strong>: pour recommencer</li>
</ul>

<p>
    On va donc ajouter ces trois éléments à la scène. D'abord, pour permettre au joueur d'entrer du texte, on peut
    utiliser le node <GodotNode node="LineEdit"></GodotNode>:
</p>
<ViewableImage src={lineEdit}></ViewableImage>

<Note>
    Pour ajouter un enfant à un node, il faut le sélectionner dans le panel
    <Link href="atelier/hello-world#panel-scene">Scene</Link>, puis cliquer sur <GodotIcon object="Add"></GodotIcon>.
</Note>

<p>
    Ensuite on ajoute le texte, pour cela on utilise un node <GodotNode node="Label"></GodotNode>. Pour modifier
    son texte, il suffit de modifier sa propriété <code>text</code>
    depuis l'<Link href="atelier/hello-world#panel-inspector">inspecteur</Link>. On peut y mettre un titre comme
    <i>"Entrez un nombre"</i>.
</p>
<ViewableImage src={label}></ViewableImage>

<p>
    Enfin, on ajoute un bouton, représenté par le node <GodotNode node="Button"></GodotNode>. On peut y ajouter du
    texte en modifiant sa propriété <code>text</code>:
</p>
<ViewableImage src={button}></ViewableImage>

<Warning>
    La relation parent-enfant des nodes est importante. Vérifiez bien que vos trois nodes
    sont des enfants directes de <i>Game</i>:
    <div style="display: flex; flex-direction: row; gap: 1rem; margin-top: 1rem;">
        <img alt="" src={childrenYes} />
        <img alt="" src={childrenNo} />
    </div>
</Warning>

<h2 id="programmation-du-jeu">Programmation du jeu</h2>
<p>
    Maintenant, pour que le jeu fonctionne, il va falloir <strong>programmer</strong>. On commence avec ce script:
</p>

<pre><code class="gdscript-snippet"><span class="keyword">extends</span> <span class="type">Control</span>


<span class="keyword">func</span> <span class="func">_ready</span><span class="symbol">() -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="global-func">print</span><span class="symbol">(</span><span class="string">"Hello World!"</span><span class="symbol">)</span>
</code></pre>

<h3 id="variables">Variables</h3>
<p>
    Pour commencer, on va créer un <strong>variable</strong> qui va contenir le nombre secret.
    Pour définir une variable dans Godot, il suffit d'utiliser le mot clé
    <code class="gdscript-snippet inline"><span class="keyword">var</span></code> suivi du nom de la variable.
</p>

<pre><code class="gdscript-snippet"><span class="keyword">extends</span> <span class="type">Control</span>


<span class="keyword">var</span> <span class="member-var">secret_number</span><span class="symbol">:</span> <span class="type">int</span> <span class="symbol">=</span> <span class="number">67</span>


<span class="keyword">func</span> <span class="func">_ready</span><span class="symbol">() -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="global-func">print</span><span class="symbol">(</span><span class="string">"Hello World!"</span><span class="symbol">)</span>
</code></pre>

<Note>
    Le nom des variables doit être écrit en <ExternalLink href="https://fr.wikipedia.org/wiki/Snake_case">snake_case</ExternalLink>.
    Il est possible de préciser le <strong>type</strong> de la variable en utilisant deux points <small>:</small> suivi du type <small>int</small>.
    <br>Les types classiqeus sont:
    <ul>
        <li><ExternalLink href="https://docs.godotengine.org/en/stable/classes/class_int.html">int</ExternalLink>: un nombre entier</li>
        <li><ExternalLink href="https://docs.godotengine.org/en/stable/classes/class_float.html">float</ExternalLink>: un nombre à virgule</li>
        <li><ExternalLink href="https://docs.godotengine.org/en/stable/classes/class_string.html">String</ExternalLink>: du texte</li>
        <li><ExternalLink href="https://docs.godotengine.org/en/stable/classes/class_node.html">Node</ExternalLink>: un node <small>(similaire pour tous les autres nodes)</small></li>
    </ul>
</Note>

<p>
    On peut s'assurer que tout fonctionne en passant
    <code class="gdscript-snippet inline"><span class="member-var">secret_number</span></code>
    dans la fonction <code class="gdscript-snippet inline"><span class="global-func">print</span></code>:
</p>

<pre><code class="gdscript-snippet"><span class="keyword">func</span> <span class="func">_ready</span><span class="symbol">() -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="global-func">print</span><span class="symbol">(</span><span class="member-var">secret_number</span><span class="symbol">)</span>
</code></pre>

<p>
    Maintenant, si on lance le jeu, on peut lire <i>67</i> dans l'<Link href="atelier/hello-world#panel-output">Output</Link>:
</p>
<ViewableImage src={testSecretNumber}></ViewableImage>

<Note title="Rappel">
    Pour tester le jeu, il faut appuyer sur le bouton <GodotIcon object="PlayScene"></GodotIcon>,
    ou utiliser le raccourci: <i>F6</i>.
</Note>

<h3 id="entrees-du-joueur">Capter les entrées du joueur</h3>
<p>
    Pour que les nodes cummuniques entres eux, on utilise des <strong>signaux</strong>. Le node
    <GodotNode node="LineEdit"></GodotNode> contient un signal très pratique pour nous:
    <code>text_submitted(nex_text: String)</code>.
</p>
<p>
    Pour faire communiquer notre <GodotNode node="LineEdit"></GodotNode> à notre node <i>Game</i>, on doit
    <i>connecter</i> le signal. Pour cela, il faut sélectionner le node, puis ouvrir le panel <strong>Signals</strong>
    <small>(par défaut, il est à côté de l'inspecteur)</small> et enfin connecter le signal:
</p>
<ViewableImage src={textSubmitted}></ViewableImage>

<p>
    Ça nous créé alors une nouvelle fonction, <strong>cette fonction sera appellée au moment où le signal sera émit</strong>.
</p>

<pre><code class="gdscript-snippet"><span class="keyword">func</span> <span class="func">_on_line_edit_text_submitted</span><span class="symbol">(</span>new_text<span class="symbol">:</span> <span class="type">String</span><span class="symbol">) -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="control-flow">pass</span> <span class="comment"># Replace with function body.</span>
</code></pre>

<p>
    Encore une fois, pour s'assurer que cela fonctionne, on peut utiliser la fonction
    <code class="gdscript-snippet inline"><span class="global-func">print</span></code> et tester le jeu:
</p>
<pre><code class="gdscript-snippet"><span class="keyword">func</span> <span class="func">_on_line_edit_text_submitted</span><span class="symbol">(</span>new_text<span class="symbol">:</span> <span class="type">String</span><span class="symbol">) -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="global-func">print</span><span class="symbol">(</span>new_text<span class="symbol">)</span>
</code></pre>

<ViewableImage src={testLineEdit}></ViewableImage>

<Note>
    Pour que le signal <code>text_submitted</code> soit émit, il faut appuyer sur la touche <i>Entrée</i>.
</Note>

<h3 id="bonne-reponse">Bonne réponse ?</h3>
<p>
    On aimerai maintenant tester si la valeur entrée par le joueur est <strong>supérieure</strong>, <strong>inférieure</strong>
    ou <strong>égalle</strong> à la valeur du <code>secret_number</code>. Mais pour faire cela, il faut transformer l'entrée
    du joueur <small>(un String, donc du texte)</small> en un nombre <small>(int)</small>:
</p>

<pre><code class="gdscript-snippet"><span class="keyword">func</span> <span class="func">_on_line_edit_text_submitted</span><span class="symbol">(</span>new_text<span class="symbol">:</span> <span class="type">String</span><span class="symbol">) -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="keyword">var</span> guess<span class="symbol">:</span> <span class="type">int</span> <span class="symbol">=</span> <span class="type">int</span><span class="symbol">(</span>new_text<span class="symbol">)</span>
&#9;<span class="global-func">print</span><span class="symbol">(</span>guess<span class="symbol">)</span>
</code></pre>

<Note>
    La fonction <code class="gdscript-snippet inline"><span class="type">int</span><span class="symbol">()</span></code>
    est ce qu'on appelle un <i>constructeur</i>, elle permet de transformer une valeur <i>String</i> ou <i>float</i> en
    un <i>int</i>.<br>
    <ExternalLink href="https://docs.godotengine.org/fr/4.x/classes/class_int.html#constructeurs">Voir la page de la documentation</ExternalLink>
</Note>

<p>
    Voyons ce que cela fait:
</p>
<ViewableImage src={testInt}></ViewableImage>

<p>
    Maintenant on vas <strong>comparer</strong> la réponse du joueur avec le <code>secret_nomber</code>. Pour cela,
    on peut utiliser les mots clés: <code class="gdscript-snippet inline"><span class="control-flow">if</span></code>,
    <code class="gdscript-snippet inline"><span class="control-flow">else</span></code>,
    <code class="gdscript-snippet inline"><span class="control-flow">elif</span></code> ainsi que les comparateurs:
    <code>&#60;</code> et <code>&#62;</code>:
</p>

<pre><code class="gdscript-snippet"><span class="keyword">func</span> <span class="func">_on_line_edit_text_submitted</span><span class="symbol">(</span>new_text<span class="symbol">:</span> <span class="type">String</span><span class="symbol">) -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="keyword">var</span> guess<span class="symbol">:</span> <span class="type">int</span> <span class="symbol">=</span> <span class="type">int</span><span class="symbol">(</span>new_text<span class="symbol">)</span>
&#9;
&#9;<span class="comment"># Si la réponse du joueur est PLUS GRANDE que le nombre secret</span>
&#9;<span class="control-flow">if</span> guess <span class="symbol">&#62;</span> <span class="member-var">secret_number</span><span class="symbol">:</span>
&#9;&#9;<span class="global-func">print</span><span class="symbol">(</span><span class="string">"Plus petit !"</span><span class="symbol">)</span>
&#9;<span class="comment"># Sinon, si la réponse du joueur est PLUS PETITE que le nombre secret</span>
&#9;<span class="control-flow">elif</span> guess <span class="symbol">&#60;</span> <span class="member-var">secret_number</span><span class="symbol">:</span>
&#9;&#9;<span class="global-func">print</span><span class="symbol">(</span><span class="string">"Plus grand !"</span><span class="symbol">)</span>
&#9;<span class="comment"># Sinon (la réponse du joueur est donc forcément ÉGALE au nombre secret)</span>
&#9;<span class="control-flow">else</span><span class="symbol">:</span>
&#9;&#9;<span class="global-func">print</span><span class="symbol">(</span><span class="string">"Trouvé !"</span><span class="symbol">)</span>
</code></pre>

<ViewableImage src={testComparaisons}></ViewableImage>

<h3 id="aleatoire">Aléatoire</h3>
<p>
    Actuellement, le jeu fonctionne <strong>techniquement</strong>, mais à partir du moment où on a trouvé le nombre secret,
    on ne peut plus recommencer avec un nouveau nombre. Pour régler cela, il nous suffit de générer le nombre secret aléatoirement !
</p>
<p>
    Godot intègre la fonction <code class="gdscript-snippet inline"><span class="global-func">randi_range</span></code> qui
    permet de générer un nombre aléatoire entre deux valeurs. Modifions notre code pour ajouter cette fonction:
</p>

<pre><code class="gdscript-snippet"><span class="keyword">func</span> <span class="func">_ready</span><span class="symbol">() -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="member-var">secret_number</span> <span class="symbol">=</span> <span class="global-func">randi_range</span><span class="symbol">(</span><span class="number">0</span><span class="symbol">,</span> <span class="number">100</span><span class="symbol">)</span>
&#9;<span class="global-func">print</span><span class="symbol">(</span><span class="string">"Nombre secret: "</span><span class="symbol">,</span> <span class="member-var">secret_number</span><span class="symbol">)</span>
</code></pre>

<ViewableImage src={randomNumber}></ViewableImage>

<p>
    À présent, à chaque fois que nous lançons le jeu, le <code>secret_number</code> est choisi aléatoirement entre
    <code>0</code> et <code>100</code> !
</p>

<h3 id="recommencer">Recommencer</h3>
<p>
    Au début, on avais créé un bouton <i>Recommencer</i>, il serait bien de le faire fonctionner. Comme pour le
    <GodotNode node="LineEdit"></GodotNode>, on connecter un <strong>signal</strong> de notre <GodotNode node="Button"></GodotNode>
    à notre script. Plus précisément, on va connecter son signal <code>pressed</code>:
</p>

<ViewableImage src={buttonPressed}></ViewableImage>

<p>
    Pour recommencer, il nous suffit d'appeler la fonction
    <code class="gdscript-snippet inline"><span class="call-func">reload_current_scene</span><span class="symbol">()</span></code>
    du <strong>Tree</strong>. Pour accéder au <strong>Tree</strong>, on utilise la fonction
    <code class="gdscript-snippet inline"><span class="call-func">get_tree</span><span class="symbol">()</span></code>:
</p>

<pre><code class="gdscript-snippet"><span class="keyword">func</span> <span class="func">_on_button_pressed</span><span class="symbol">() -></span> <span class="type">void</span><span class="symbol">:</span>
    &#9;<span class="call-func">get_tree</span><span class="symbol">().</span><span class="call-func">reload_current_scene</span><span class="symbol">()</span>
</code></pre>

<h3 id="communiquer-avec-joueur">Communiquer avec le joueur</h3>
<p>
    Pour pouvoir joueur au jeu, il faut pouvoir lire les messages <i>"Trop grand !"</i> et <i>"Trop petit !"</i>.
    Mais le joueur n'as pas accès l'output, il faut donc afficher le message ailleurs. Pour cela on peut modifier le texte
    de notre node <GodotNode node="Label"></GodotNode>.
</p>
<p>
    Mais pour modifier la propriété <code>text</code> de notre <GodotNode node="Label"></GodotNode>, il faut avoir une
    <strong>référence</strong> <GodotNode node="Label"></GodotNode> depuis le script de <i>Game</i>.
</p>
<p>
    La manière la plus simple d'avoir une référence à un node est de créer une variable
    <code class="gdscript-snippet inline"><span class="annotation">@onready</span></code> qui cherche une référence à notre node.
    Pour le faire on peut simplement glisser le node dans le script en restant appuyé sur <i>Ctrl</i>:
</p>

<Note>
    Il est important de rester appuyé sur <i>Ctrl</i> pour que la ligne script soit bien ajouté. Godot affiche les
    cette fenêtre au moment de glisser un node:
    <enhanced:img src={noderefInfo} alt="" style="margin-top: 1rem;" />
</Note>

<ViewableImage src={onready}></ViewableImage>

<pre><code class="gdscript-snippet"><span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">label</span><span class="symbol">:</span> <span class="type">Label</span> <span class="symbol">=</span> <span class="node-path">$Label</span>
</code></pre>

<Note>
    Pour expliquer plus en détails cette ligne de code:
    <ul>
        <li>
            <code class="gdscript-snippet inline"><span class="annotation">@onready</span></code>: précise à Godot
            d'appeler cette ligne au moment de la fonction <code class="gdscript-snippet inline"><span class="func">_ready</span></code>.
        </li>
        <li>
            <code class="gdscript-snippet inline"><span class="keyword">var</span></code>: le mot clé pour définir une variable.
        </li>
        <li>
            <code class="gdscript-snippet inline"><span class="member-var">label</span></code>: le <strong>nom</strong> de la variable.
        </li>
        <li>
            <code class="gdscript-snippet inline"><span class="type">Label</span></code>: le <strong>type</strong> de la variable.
        </li>
        <li>
            <code class="gdscript-snippet inline"><span class="node-path">$Label</span></code>: le <strong>chemin</strong> vers le node.
        </li>
    </ul>
    Donc la référence à un node prend la forme:
    <pre><code class="gdscript-snippet"><span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">nom_de_variable</span><span class="symbol">:</span> <span class="type">Node</span> <span class="symbol">=</span> <span class="node-path">$Chemin/Vers/Node</span></code></pre>
</Note>

<p>
    Maintenant, au lieu de <code class="gdscript-snippet inline"><span class="global-func">print</span></code> nos
    messages, on vas modifier la propriété <code>text</code> du <GodotNode node="Label"></GodotNode>:
</p>

<pre><code class="gdscript-snippet"><span class="keyword">func</span> <span class="func">_on_line_edit_text_submitted</span><span class="symbol">(</span>new_text<span class="symbol">:</span> <span class="type">String</span><span class="symbol">) -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="keyword">var</span> guess<span class="symbol">:</span> <span class="type">int</span> <span class="symbol">=</span> <span class="type">int</span><span class="symbol">(</span>new_text<span class="symbol">)</span>
&#9;
&#9;<span class="control-flow">if</span> guess <span class="symbol">&#62;</span> <span class="member-var">secret_number</span><span class="symbol">:</span>
&#9;&#9;label<span class="symbol">.</span><span class="member-var">text</span> <span class="symbol">=</span> <span class="string">"Plus petit !"</span>
&#9;<span class="control-flow">elif</span> guess <span class="symbol">&#60;</span> <span class="member-var">secret_number</span><span class="symbol">:</span>
&#9;&#9;label<span class="symbol">.</span><span class="member-var">text</span> <span class="symbol">=</span> <span class="string">"Plus grand !"</span>
&#9;<span class="control-flow">else</span><span class="symbol">:</span>
&#9;&#9;label<span class="symbol">.</span><span class="member-var">text</span> <span class="symbol">=</span> <span class="string">"Trouvé !"</span>
</code></pre>

<p>
    Ce qui nous donne:
</p>
<ViewableImage src={communication}></ViewableImage>

<h2 id="code-complet">Code complet</h2>
<p>
    Le jeu est fini! Voilà le code complet:
</p>

<pre><code class="gdscript-snippet"><span class="keyword">extends</span> <span class="type">Control</span>


<span class="keyword">var</span> <span class="member-var">secret_number</span><span class="symbol">:</span> <span class="type">int</span>


<span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">label</span><span class="symbol">:</span> <span class="type">Label</span> <span class="symbol">=</span> <span class="node-path">$Label</span>


<span class="keyword">func</span> <span class="func">_ready</span><span class="symbol">() -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="member-var">secret_number</span> <span class="symbol">=</span> <span class="global-func">randi_range</span><span class="symbol">(</span><span class="number">0</span><span class="symbol">,</span> <span class="number">100</span><span class="symbol">)</span>
&#9;<span class="global-func">print</span><span class="symbol">(</span><span class="string">"Nombre secret: "</span><span class="symbol">,</span> <span class="member-var">secret_number</span><span class="symbol">)</span>


<span class="keyword">func</span> <span class="func">_on_line_edit_text_submitted</span><span class="symbol">(</span>new_text<span class="symbol">:</span> <span class="type">String</span><span class="symbol">) -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="keyword">var</span> guess<span class="symbol">:</span> <span class="type">int</span> <span class="symbol">=</span> <span class="type">int</span><span class="symbol">(</span>new_text<span class="symbol">)</span>
&#9;
&#9;<span class="control-flow">if</span> guess <span class="symbol">&#62;</span> <span class="member-var">secret_number</span><span class="symbol">:</span>
&#9;&#9;label<span class="symbol">.</span><span class="member-var">text</span> <span class="symbol">=</span> <span class="string">"Plus petit !"</span>
&#9;<span class="control-flow">elif</span> guess <span class="symbol">&#60;</span> <span class="member-var">secret_number</span><span class="symbol">:</span>
&#9;&#9;label<span class="symbol">.</span><span class="member-var">text</span> <span class="symbol">=</span> <span class="string">"Plus grand !"</span>
&#9;<span class="control-flow">else</span><span class="symbol">:</span>
&#9;&#9;label<span class="symbol">.</span><span class="member-var">text</span> <span class="symbol">=</span> <span class="string">"Trouvé !"</span>


<span class="keyword">func</span> <span class="func">_on_button_pressed</span><span class="symbol">() -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="call-func">get_tree</span><span class="symbol">().</span><span class="call-func">reload_current_scene</span><span class="symbol">()</span>
</code></pre>

<p>
    Si vous voulez regarder le projet en détail, le code complet est disponile dans
    <ExternalLink href="https://github.com/RSelaries/atelier-devine-le-nombre">ce repository</ExternalLink>.
</p>

<h2 id="ameliorations">Améliorations</h2>
<p>
    Si vous voulez améliorer votre jeu, allez sur la page:
    <Link href="atelier/devine-le-nombre/ameliorations">Devine le nombre - améliorations</Link> !
</p>