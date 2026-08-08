<script>
    // Components
    import GameIframe from "$lib/components/GameIframe.svelte";
    import Link from "$lib/components/Link.svelte";
    import ViewableImage from "$lib/components/ViewableImage.svelte";
    import Note from "$lib/components/Note.svelte";
    import ExternalLink from "$lib/components/ExternalLink.svelte";
    import GodotIcon from "$lib/components/GodotIcon.svelte";

    // Assets
    import creationProject from "$lib/assets/pages-medias/ateliers/devine-le-nombre/creation-projet.png";
    import editeur1 from "$lib/assets/pages-medias/ateliers/devine-le-nombre/editeur-1.png";
    import sceneExemple from "$lib/assets/pages-medias/ateliers/devine-le-nombre/scene-exemple.png";
    import sceneEmpty from "$lib/assets/pages-medias/ateliers/devine-le-nombre/scene-empty.png";
    import filesystemDefault from "$lib/assets/pages-medias/ateliers/devine-le-nombre/filesystem-default.png";
    import filesystemExemple from "$lib/assets/pages-medias/ateliers/devine-le-nombre/filesystem-exemple.png";
    import filesystemRightClick from "$lib/assets/pages-medias/ateliers/devine-le-nombre/filesystem-right-click.png";
    import inspectorNode from "$lib/assets/pages-medias/ateliers/devine-le-nombre/inspector-node.png";
    import inspectorPlayer from "$lib/assets/pages-medias/ateliers/devine-le-nombre/inspector-player.png";
</script>


<svelte:head>
    <title>Atelier - Devine le nombre</title>
</svelte:head>


<h1 id="devine-le-nombre"><small>Atelier 1 -</small> <span class="title">Devine le nombre</span></h1>
<p>
    Dans cet atelier, nous allons découvrir l'interface de Godot et créer notre premier jeu.
</p>
<details>
    <summary>Concepts abordés</summary>
    <ul>
        <li>L'interface de Godot</li>
        <li>Le système de Nodes et Scènes</li>
        <li>Le GDScript</li>
    </ul>
</details>

<h2 id="jeu">Jeu</h2>
<GameIframe src="https://rselaries.github.io/atelier-devine-le-nombre" title="Jeu - Devine le nombre"></GameIframe>

<h2 id="creation-du-projet">Création du projet</h2>
<p>
    Pour cet atelier et tous les suivant, il faut avoir <strong>Godot installé et configuré</strong>.
    Vous pouvez suivre <b>étape-par-étape</b> comment faire à la page
    <Link href="godot/installation-et-configuration">Pour commencer</Link>.
</p>
<p>
    On va alors créer un nouveau projet, que l'on peut appeler <i>"Devine le nombre"</i>, avec le <strong>renderer</strong>
    <code>Compatibility</code>.
</p>

<ViewableImage src= {creationProject}></ViewableImage>

<p>
    Après avoir appuyé sur <i>"Create"</i>, cela nous ouvre l'éditeur Godot:
</p>

<ViewableImage src= {editeur1}></ViewableImage>

<h2 id="editeur-godot">Éditeur Godot</h2>
<p>
    Dans cette section, je vais faire une présentation en détails de l'interface de Godot. Je vous recommande de
    tout lire. Mais si vous la connaissez déjà, ou si vous êtes trop impatient de commencer, passez à la secition
    <Link href="#">section</Link>.
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

<Note>
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
<Note>
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
<Note>
    Pour plus d'explications, rendez vous sur la page
    <ExternalLink href="https://docs.godotengine.org/fr/4.x/getting_started/step_by_step/nodes_and_scenes.html#changing-a-node-s-properties">
        Nœuds et scènes
    </ExternalLink> de la documentation de Godot.
</Note>