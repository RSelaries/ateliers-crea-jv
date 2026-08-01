<script>
    import ViewableImage from "$lib/components/ViewableImage.svelte";
    import ExternalLink from "$lib/components/ExternalLink.svelte";
    import Link from "$lib/components/Link.svelte";
    import GodotInstalBtn from "./GodotInstalBtn.svelte";

    // Assets
    import godotEditor from "$lib/assets/pages-medias/godot/installation/godot-editor-file.png";
    import godotEditorConsole from "$lib/assets/pages-medias/godot/installation/godot-editor-console-file.png";
    import projectManager1 from "$lib/assets/pages-medias/godot/installation/project-manager-1.png";
    import projectManager2 from "$lib/assets/pages-medias/godot/installation/project-manager-2.png";
</script>


<svelte:head>
    <title>Godot - Pour commencer</title>
</svelte:head>


<h1 id="pour-commencer"><span style="color: var(--text-color-muted); font-size: 0.8em;">Godot -</span> <span class="title">Pour commencer</span></h1>
<p>
    Vous voulez commencer à apprendre et utiliser <i>Godot</i> ?
</p>

<h2 id="installation">Installation</h2>
<p>
    Rendez vous sur le <ExternalLink href="https://godotengine.org">site de Godot</ExternalLink> et cliquez sur le bouton:
    <GodotInstalBtn></GodotInstalBtn>
</p>

<h3 id="versions-de-godot">Versions de Godot</h3>
<p>
    Vous avez alors deux possibilités:
</p>

<section class="subsection">
    <h4>Godot Engine</h4>
    <p>
        La version classique de Godot qui utilise GDScript. <strong>C'est la version que je recommande pour commencer.</strong>
    </p>
    <h4>Godot Engine .NET</h4>
    <p>
        Comme la version classique, mais ajoute en plus de cela le support du language de programmation
        <span style="font-family: SpaceMono">C#</span>. Depuis <b>Godot 4.X</b>, il n'est pas
        possible d'exporter un jeu .NET sur le web. Pour cela il faut utiliser <b>Godot 3.6</b> ou une version antérieure.
    </p>
</section>

<h3 id="executables-godot">Exécutable Godot</h3>
<p>
    Cela vous télécharge un fichier <span style="font-family: SpaceMono">.zip</span> contenant deux fichiers exécutables:
</p>

<section class="subsection">
    <enhanced:img src={godotEditor} alt=""/>
    <p>
        L'éditeur Godot classique. <small>(Contrairement à Unity ou UnrealEngine, Godot est très léger.)</small>
    </p>
    <enhanced:img src={godotEditorConsole} alt=""/>
    <p>
        Lance le premier exécutable et ouvre une console en arrière plan.
    </p>
</section>

L'éxécutable le plus important est le premier, c'est l'éditeur Godot. Vous pouvez le ranger dans un dossier,
par exemple: <span style="font-family: SpaceMono">"Documents\Godot\Editeur\Godot_v4.7-stable_win64.exe"</span>.

<h2 id="project-manager">Project Manager</h2>
<p>
    On peut maintenant lancer l'éxécutable Godot, ce qui nous ouvre le <strong>Project Manager</strong>.
</p>
<ViewableImage src={projectManager2}></ViewableImage>