<script>
    // Components
    import GameIframe from "$lib/components/GameIframe.svelte";
    import Link from "$lib/components/Link.svelte";
    import ViewableImage from "$lib/components/ViewableImage.svelte";
    import Note from "$lib/components/Note.svelte";
    import ExternalLink from "$lib/components/ExternalLink.svelte";
    import GodotIcon from "$lib/components/GodotIcon.svelte";
    import GodotNode from "$lib/components/GodotNode.svelte";

    // Medias
    import creationProject from "$lib/assets/pages-medias/ateliers/devine-le-nombre/creation-projet.png";
    import editeur1 from "$lib/assets/pages-medias/ateliers/devine-le-nombre/editeur-1.png";
    import sceneExemple from "$lib/assets/pages-medias/ateliers/devine-le-nombre/scene-exemple.png";
    import sceneEmpty from "$lib/assets/pages-medias/ateliers/devine-le-nombre/scene-empty.png";
    import filesystemDefault from "$lib/assets/pages-medias/ateliers/devine-le-nombre/filesystem-default.png";
    import filesystemExemple from "$lib/assets/pages-medias/ateliers/devine-le-nombre/filesystem-exemple.png";
    import filesystemRightClick from "$lib/assets/pages-medias/ateliers/devine-le-nombre/filesystem-right-click.png";
    import inspectorNode from "$lib/assets/pages-medias/ateliers/devine-le-nombre/inspector-node.png";
    import inspectorPlayer from "$lib/assets/pages-medias/ateliers/devine-le-nombre/inspector-player.png";
    import output from "$lib/assets/pages-medias/ateliers/devine-le-nombre/output.png";
    import main2d from "$lib/assets/pages-medias/ateliers/devine-le-nombre/main-2d.png";
    import main3d from "$lib/assets/pages-medias/ateliers/devine-le-nombre/main-3d.png";
    import mainScript from "$lib/assets/pages-medias/ateliers/devine-le-nombre/main-script.png";
    import mainGame from "$lib/assets/pages-medias/ateliers/devine-le-nombre/main-game.png";
    import mainAssetStore from "$lib/assets/pages-medias/ateliers/devine-le-nombre/main-asset-store.png";
    import mainPlugin from "$lib/assets/pages-medias/ateliers/devine-le-nombre/main-plugin.png";
    import creationScene from "$lib/assets/pages-medias/ateliers/devine-le-nombre/creation-scene.gif";
    import creationScript from "$lib/assets/pages-medias/ateliers/devine-le-nombre/creation-script.gif";
    import helloWorld from "$lib/assets/pages-medias/ateliers/devine-le-nombre/hello-world.gif";
</script>


<svelte:head>
    <title>Atelier - Hello World!</title>
</svelte:head>


<h1 id="atelier-hello-world"><small>Atelier 1 -</small> <span class="title">Hello World!</span></h1>
<p>
    Dans cet atelier, nous allons découvrir l'interface de Godot et créer notre premier script.
</p>
<details>
    <summary>Concepts abordés</summary>
    <ul>
        <li>L'interface de Godot</li>
        <li>Le système de Nodes et Scènes</li>
        <li>Le GDScript</li>
    </ul>
</details>

<!-- <h2 id="jeu">Jeu</h2>
<GameIframe src="https://rselaries.github.io/atelier-devine-le-nombre" title="Jeu - Devine le nombre"></GameIframe> -->

<h2 id="fonctionnement-de-godot">Comment fonctionne Godot ?</h2>
<p>
    Dans <i>Godot</i>, tous nos éléments de jeu sont des <strong><GodotIcon object="Node"></GodotIcon> Nodes</strong>
    <small>(noeuds)</small>. On peut créer des collections de nodes sous forme de
    <strong><GodotIcon object="PackedScene"></GodotIcon> Scènes</strong>.
</p>
<p>
    S'il on voulait créer un personnage par exemple, on créerait une scène qui contient un <GodotNode node="Sprite2D"></GodotNode>
    <small>(pour afficher l'image du personnage)</small>, un <GodotNode node="CharacterBody2D"></GodotNode>
    <small>(pour que le personnage puisse se déplacer)</small> etc.
</p>
<p>
    Les scènes peuvent êtres <strong>instancé</strong> <small>(en faire des copies)</small> les unes dans les autres. On aura
    donc une scène <i>"Niveau"</i> qui va contenir une scène <i>"Joueur"</i> et plusieurs scènes <i>"PieceOr"</i> <small>(etc)</small>.
</p>

<Note title="Documentation">
    Pour plus d'explications, rendez vous sur la page
    <ExternalLink href="https://docs.godotengine.org/fr/4.x/getting_started/introduction/key_concepts_overview.html">
        Aperçu des concepts clés de Godot
    </ExternalLink> de la documentation de Godot.
</Note>

<h2 id="editeur-godot">Éditeur Godot</h2>
<p>
    Dans cette section, je vais faire une présentation de l'interface de Godot. Je vous recommande de
    tout lire. Mais si vous la connaissez déjà, ou si vous êtes trop impatient de commencer, passez à la section
    <Link local href="#creation-d-une-scene">Création d'une scène</Link>.
</p>
<p>
    L'éditeur de Godot se compose de  <strong>5 vues</strong> principales et de <strong>plusieurs panels</strong>
    <small>(panneaux)</small>.
</p>

<h3 id="les-panels-principaux">Les panels principaux</h3>

<h4 id="panel-scene"><span class="title">Scene</span> <small>(La scène)</small></h4>
<div class="side-by-side">
    <ViewableImage showAlt alt="Scène vierge" src={sceneEmpty}></ViewableImage>
    <ViewableImage showAlt alt="Exemple de scène" src={sceneExemple}></ViewableImage>
</div>
<p>
    Le <i>panel</i> <strong>Scene</strong> affiche le <strong>scene tree</strong>, c'est à dire
    l'<i>arborescence de la scène</i>. On parle d'<i>arborescence</i> car chaque objet, comme une branche,
    ne peut être l'enfant que d'un seul autre objet. Par contre un objet peut avoir plusieurs enfants.
</p>
<p>
    Dans l'exemple ci-dessus, <i>DamageComponent</i> a comme enfant <i>CollisionShape2D</i>,
    et comme parent <i>PlayerController</i>. <i>AnimatedSprite2D</i> est un <strong>sibling</strong>
    <small>(c'est à dire frère/soeur)</small> de <i>DamageComponent</i>.
</p>

<Note title="Documentation">
    Pour plus d'explications, rendez vous sur la page
    <ExternalLink href="https://docs.godotengine.org/fr/4.x/getting_started/step_by_step/nodes_and_scenes.html">
        Nœuds et scènes
    </ExternalLink> de la documentation de Godot.
</Note>

<h4 id="panel-filesystem"><span class="title">FileSystem</span> <small>(Explorateur de fichiers)</small></h4>
<div class="side-by-side">
    <ViewableImage showAlt alt="Filesystem d'un projet vierge" src={filesystemDefault}></ViewableImage>
    <ViewableImage showAlt alt="Exemple de filesystem d'un projet" src={filesystemExemple}></ViewableImage>
</div>
<p>
    Le <i>filesystem</i> affiche tous les <strong>fichiers</strong> de notre projet. Le dossier <i>"res://"</i>
    désigne le dossier à la racine du projet. Par exemple pour notre projet, <i>"res://"</i> désigne le dossier
    <span style="display: inline-block"><i>"C:/[...]/devine_le_nombre/"</i></span>.
</p>
<p>
    À partir du <i>filesystem</i>, en faisant un clique-droit, on peut faire plusieurs action:
</p>
<div class="side-by-side">
    <ViewableImage showAlt alt="Menu clique-droit du filesystem" src={filesystemRightClick}></ViewableImage>
    <ul>
        <li><GodotIcon object="Folder"></GodotIcon> Créer un nouveau dossier</li>
        <li><GodotIcon object="PackedScene"></GodotIcon> Créer une nouvelle scène</li>
        <li><GodotIcon object="Script"></GodotIcon> Créer un nouveau script</li>
        <li><GodotIcon object="Object"></GodotIcon> Créer une nouvelle ressource</li>
        <li><GodotIcon object="TextFile"></GodotIcon> Créer un nouveau fichier texte</li>
    </ul>
</div>
<Note title="Documentation">
    Pour plus d'informations, rendez vous sur la page
    <ExternalLink href="https://docs.godotengine.org/fr/4.x/tutorials/scripting/filesystem.html">
        Le système de fichiers
    </ExternalLink> de la documentation de Godot.
</Note>

<h4 id="panel-inspector"><span class="title">Inspector</span> <small>(L'Inspecteur)</small></h4>
<div class="side-by-side">
    <ViewableImage src={inspectorNode} showAlt alt="Propriétés d'un Node"></ViewableImage>
    <ViewableImage src={inspectorPlayer} showAlt alt="Propriétés d'un node custom: PlayerController"></ViewableImage>
</div>
<p>
    L'<i>inspecteur</i> permet de voir et modifier les <strong>propriétés</strong> d'un objet.
</p>
<Note title="Documentation">
    Pour plus d'explications, rendez vous sur la page
    <ExternalLink href="https://docs.godotengine.org/fr/4.x/getting_started/step_by_step/nodes_and_scenes.html#changing-a-node-s-properties">
        Nœuds et scènes
    </ExternalLink> de la documentation de Godot.
</Note>

<h4 id="panel-output"><span class="title">Output</span> <small>(Sortie de notre code)</small></h4>
<ViewableImage src={output} showAlt alt="Panneau Output avec le text 'Hello world!' affiché"></ViewableImage>
<p>
    L'<i>output</i> est un panel très important. Il permet d'afficher des informations de notre jeu en direct
    et il nous informe des <strong>erreurs</strong> dans notre code.
</p>

<h3 id="les-vues-principales">Les vues principales</h3>

<div class="side-by-side">
    <div>
        <h4>2D</h4>
        <ViewableImage src={main2d} showAlt alt="Vue 2D"></ViewableImage>
        <p>
            Permet de modifier les éléments 2D d'un jeu. Le rectangle bleu représente la fenêtre du jeu.
        </p>
    </div>
    <div>
        <h4>3D</h4>
        <ViewableImage src={main3d} showAlt alt="Vue 3D"></ViewableImage>
        <p>
            Permet de modifier les éléments 3D d'un jeu.
        </p>
    </div>
</div>

<div class="side-by-side">
    <div>
        <h4>Script</h4>
        <ViewableImage src={mainScript} showAlt alt="Vue Script"></ViewableImage>
        <p>
            Permet de modifier les scripts de notre jeu.
        </p>
    </div>
    <div>
        <h4>Game</h4>
        <ViewableImage src={mainGame} showAlt alt="Vue Game"></ViewableImage>
        <p>
            Permet de tester notre jeu, et de le modifier tout en y jouant.
        </p>
    </div>
</div>

<div class="side-by-side">
    <div>
        <h4>Asset Store</h4>
        <ViewableImage src={mainAssetStore} showAlt alt="Vue de l'Asset Store"></ViewableImage>
        <p>
            Permet de télécharger des plugins et des assets.
        </p>
    </div>
    <div>
        <h4>Plugins</h4>
        <ViewableImage src={mainPlugin} showAlt alt="Vue du plugin Dialogue Manager"></ViewableImage>
        <p>
            Certains plugins peuvent ajouter des vues supplémentaires.
        </p>
    </div>
</div>

<h2 id="creation-d-une-scene">Création d'une scène</h2>
<p>
    Pour créer une nouvelle scène, il nous suffit de choisit le <strong>Node</strong> que nous voulons avoir
    en <strong>racine</strong> de la scène. Pour commencer, on peut simplement sélectionner
    <strong><GodotIcon object="Control"></GodotIcon> User Interface</strong>.
</p>
<p>
    On va renommer le node <strong>racine</strong> en <i>"Game"</i>, puisque ce sera la scène du jeu.
</p>
<ViewableImage src={creationScene} alt="Création d'une scène avec un Control à la racine. La racine a été renommé 'Game'."></ViewableImage>

<Note>
    Pour enregistrer la scène, j'ai utilisé le raccourci clavier <i>Ctrl+S</i>.
    Il est important d'enregistrer souvent son travail.
</Note>

<p>
    Chaque node de Godot contient par défaut des propriétés et des comportements. Par exemple, un <GodotNode node="Node2D"></GodotNode>
    et tous ces descendants ont une propriété de <code>position</code>, de <code>rotation</code>, de <code>scale</code>
    <small>(échelle)</small>.
</p>
<p>
    Mais si l'on veut ajouter des propriétés et des comportements <strong>en plus</strong>, on peut ajouter un <strong>script</strong>
    au node.
</p>

<h3 id="creation-d-un-script">Création d'un script</h3>
<p>
    Pour ajouter un script à un node. Il suffit de le sélectionner
    <small>(en cliquand dessus dans le panel <Link local href="#panel-scene">Scene</Link>)</small>
    puis de cliquer sur le bouton <GodotIcon object="ScriptCreate"></GodotIcon>. Par défaut, le script prend le nom
    du node mais en minuscule <small>(<i>ExempleDeNode</i> -> <i>exemple_de_node.gd</i>)</small>. On peut laisser le
    nom par défaut. Ce qui nous donne le script <i>"game.gd"</i>.
</p>

<ViewableImage src={creationScript} alt="Création d'un script pour le node 'Game'."></ViewableImage>

<p>
    Si vous n'avez jamais programmé avant, je vous conseille fortement d'aller voir l'application
    <Link href="godot/gdquest">Apprendre GDScript de Zéro</Link>.
</p>
<p>
    Le script par défaut ressemble à:
</p>

<pre><code class="gdscript-snippet"><span class="keyword">extends</span> <span class="type">Control</span>


<span class="comment"># Called when the node enters the scene tree for the first time.</span>
<span class="keyword">func</span> <span class="func">_ready</span><span class="symbol">() -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="control-flow">pass</span> <span class="comment"># Replace with function body.</span>


<span class="comment"># Called every frame. 'delta' is the elapsed time since the previous frame.</span>
<span class="keyword">func</span> <span class="func">_process</span><span class="symbol">(</span>delta<span class="symbol">:</span> <span class="type">float</span><span class="symbol">) -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="control-flow">pass</span>
</code></pre>

<p>
    La ligne "<code class="gdscript-snippet inline"><span class="keyword">extends</span> <span class="type">Control</span></code>" permet de préciser
    que ce script sera attaché à un node <GodotNode node="Control"></GodotNode>.
</p>
<p>
    Ensuite deux fonctions sont définies:
</p>
<ul>
    <li>
        <code class="gdscript-snippet inline"><span class="keyword">func</span> <span class="func">_ready</span><span class="symbol">() -></span> <span class="type">void</span><span class="symbol">:</span></code>
        - La fonction <code class="gdscript-snippet inline"><span class="func">_ready</span></code> est appelée <strong>une seule fois</strong>,
        au moment où le node entre dans le jeu <small>(donc au début)</small>.
    </li>
    <li>
        <code class="gdscript-snippet inline"><span class="keyword">func</span> <span class="func">_process</span><span class="symbol">(</span>delta<span class="symbol">:</span> <span class="type">float</span><span class="symbol">) -></span> <span class="type">void</span><span class="symbol">:</span></code>
        - La fonction <code class="gdscript-snippet inline"><span class="func">_process</span></code> est appellée chaque frame.
        <small>(Donc plusieurs fois par seconde, en général 60 fois par seconde.)</small>
    </li>
</ul>

<h2 id="hello-world">Hello World!</h2>
<p>
    Le <strong>"Hello World!"</strong> est un exercice souvent utilisé au moment d'apprendre un nouveau language de programmation.
    Le but étant d'afficher la phrase <i>"Hello World!"</i> quelque part à l'écran.
</p>
<p>
    Pour afficher <i>"Hello World!"</i>, on peut utiliser la fonction
    <code class="gdscript-snippet inline"><span class="global-func">print</span></code>. Et étant donné que l'on veut
    l'afficher une seule fois, on va écrire notre code dans la fonction
    <code class="gdscript-snippet inline"><span class="func">_ready</span></code>.
</p>

<pre><code class="gdscript-snippet"><span class="keyword">func</span> <span class="func">_ready</span><span class="symbol">() -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="global-func">print</span><span class="symbol">(</span><span class="string">"Hello World!"</span><span class="symbol">)</span>
</code></pre>

<p>
    Pour tester notre jeu, il nous suffit de cliquer sur le bouton <GodotIcon object="PlayScene"></GodotIcon>
    <small>(ou la touche <strong>F6</strong> du clavier)</small>.
</p>

<ViewableImage src={helloWorld} alt="Test du jeu. La phrase 'Hello World!' apparait dans l'output."></ViewableImage>

<Note>
    Essayer de mettre la ligne de code
    <code class="gdscript-snippet inline"><span class="global-func">print</span><span class="symbol">(</span><span class="string">"Hello World!"</span><span class="symbol">)</span></code>
    dans la fonction <code class="gdscript-snippet inline"><span class="func">_process</span></code> pour voir la différence.
</Note>
<br>
<p>
    Notre premier script est fini ! La suite au prochain atelier: <Link href="atelier/devine-le-nombre">Devine le nombre</Link>
</p>