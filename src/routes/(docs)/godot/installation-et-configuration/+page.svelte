<script>
    import ViewableImage from "$lib/components/ViewableImage.svelte";
    import ExternalLink from "$lib/components/ExternalLink.svelte";
    import Link from "$lib/components/Link.svelte";
    import GodotInstalBtn from "./GodotInstalBtn.svelte";
    import GodotIcon from "$lib/components/GodotIcon.svelte";

    // Assets
    import godotEditor from "$lib/assets/pages-medias/godot/installation/godot-editor-file.png";
    import godotEditorConsole from "$lib/assets/pages-medias/godot/installation/godot-editor-console-file.png";
    import projectManager1 from "$lib/assets/pages-medias/godot/installation/project-manager-1.png";
    import projectManager2 from "$lib/assets/pages-medias/godot/installation/project-manager-2.png";
    import configuration1 from "$lib/assets/pages-medias/godot/installation/configuration-1.gif";
    import ligatures from "$lib/assets/pages-medias/godot/installation/ligarures.png";
    import noLigatures from "$lib/assets/pages-medias/godot/installation/no-ligarures.png";
    import createProject from "$lib/assets/pages-medias/godot/installation/create-project.png";
    import gestionProject from "$lib/assets/pages-medias/godot/installation/gestion-projets.png";
</script>


<svelte:head>
    <title>Godot - Pour commencer</title>
</svelte:head>


<h1 id="pour-commencer"><small>Godot -</small> <span class="title">Pour commencer</span></h1>
<p>
    Cette page explique en détail l'installation et la configuration de <i>Godot</i>, mais également comment
    créer un nouveau projet.
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
    <img src="{godotEditor}" alt=""/>
    <p>
        L'éditeur Godot classique. <small>(Contrairement à Unity ou UnrealEngine, Godot est très léger.)</small>
    </p>
    <img src="{godotEditorConsole}" alt=""/>
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
<p>
    Le <strong>Project Manager</strong> liste tous les projets Godot que vous avez créé et vous permet
    d'importer et de créer de nouveaux projets
</p>

<ViewableImage src={projectManager2}></ViewableImage>


<h3 id="configuration">Configuration</h3>
<p>
    Avant de commencer, voici une liste de quelques paramètres que je vous recommande de modifier.
</p>

<ViewableImage src={configuration1}></ViewableImage>

<section class="subsection">
    <h4><span class="title">Language</span> <small>(Langue)</small></h4>
    <p>
        <strong>Je vous recommende de passer l'éditeur de Godot en anglais</strong>. Une majorité des
        tutoriels que vous trouverez seront en anglais, et ceux en français utiliseront sûrement la version
        anglaise de Godot.
    </p>

    <h4><span class="title">Display Scale</span> <small>(Échelle d'affichage)</small></h4>
    <p>
        Selon votre écran, l'échelle d'affichage peut être à <strong>125%</strong> par défaut. Si vous n'avez
        pas un écran très grand, je vous conseille de passer à une échelle de <strong>100%</strong>
    </p>

    <h4><span class="title">Network Mode</span> <small>(Mode Réseaux)</small></h4>
    <p>
        Vous pouvez passer en mode <strong>Online</strong>. Cela vous permettra de télécharger des addons.
    </p>

    <!-- <h4>
        <span class="title">Code Ligatures</span>
        <span style="color: var(--text-color-muted); font-size: 0.8em;">(Ligatures de code)</span>
    </h4>
    <p>
        Pour activer les ligatures il faut aller dans <strong>"Edit All Settings"</strong> puis dans la barrede
        recherche vous pouvez écrire <strong>"ligarures"</strong> et il faut modifier le paramètre
        <strong>"Code Font Contextual Ligatures"</strong> en <strong>Enabled</strong>.
    </p>
    <span style="display: flex;">
        <span style="flex: 1; display: flex; flex-direction: column;">
            Sans les ligatures:
            <img height="50px" src="{noLigatures}" alt="" style="align-self: start;"/>
        </span>
        <span style="flex: 1; display: flex; flex-direction: column;">
            Avec les ligatures:
            <img height="50px" src="{ligatures}" alt="" style="align-self: start;"/>
        </span>
    </span> -->
</section>

<h3 id="creer-un-projet">Créer un projet</h3>
<p>
    Pour créer un nouveau projet, appuyez sur le bouton
    <span class="godot-btn"><GodotIcon object="Add"></GodotIcon> Create</span>, ce qui ouvre cette fenêtre:
</p>
<ViewableImage src={createProject}></ViewableImage>

<section class="subsection">
    <h4><span class="title">Project Name</span> <small>(Nom du projet)</small></h4>
    <p>
        Le nom du projet.
    </p>
    
    <h4><span class="title">Project Path</span> <small>(Emplacement du projet)</small></h4>
    <p>
        L'emplacement du projet sur votre ordinateur.
    </p>
    
    <h4><span class="title">Renderer</span> <small>(Moteur de rendu)</small></h4>
    <p>
        Le moteur de rendu du projet.
    </p>
    <ul>
        <li>
            <strong style="color: var(--titles-color)">Forward +</strong>: Le moteur de rendu <strong>le plus puissant</strong>, permet de meilleurs
            qualités, surtout en 3D. <strong>Ne fonctionne que sur PC</strong>.
        </li>
        <li>
            <strong style="color: var(--titles-color)">Mobile</strong>: Moins puissant en 3D mais plus rapide. Permet d'exporter sur <strong>PC et Mobiles</strong>.
        </li>
        <li>
            <strong style="color: var(--titles-color)">Compatibility</strong>: Le moins puissant de tous, manque plusieurs fonctionnalités 3D. Le plus
            léger et rapide. Permet d'exporter sur <strong>PC, Mobile et Web</strong> <small>(HTML)</small>.
        </li>
    </ul>
</section>

<h3 id="gestions-des-projets">Gérer les projets</h3>
<p>
    Une fois que vous aurez créé des projets, ils seront listés dans le <strong>Project Manager</strong>.
    En sélectionnant un projet, vous pouvez le <strong>modifier</strong>, <strong>lancer le jeu</strong>,
    <strong>modifier ses tags</strong> <small>(etc)</small>.
</p>
<ViewableImage src={gestionProject}></ViewableImage>

<h2 id="apprendre-godot">Apprendre godot</h2>
<p>
    Si vous n'avez jamais codé, je vous conseille d'utiliser l'app <Link href="godot/gdquest">Apprendre GDScript de Zéro</Link> de GDQuest.
    C'est un projet <strong>open source</strong> qui vous introduit petit à petit aux <strong>variables</strong>,
    <strong>fonctions</strong>, <strong>conditions</strong> <small>(etc.)</small> de GDScript. Cela pourrait même
    vous aider à apprender Python.
</p>
<p>
    Vous pouvez lire la
    <ExternalLink href="https://docs.godotengine.org/fr/4.x/about/introduction.html">documentation de Godot</ExternalLink>
    qui est très riche. Elle contient deux projets pour apprendre les rudimentaires de la 2D et 3D.
</p>
<p>
    Vous pouvez aussi suivre des tutoriels textuels ou vidéos. Vous pouvez consulter une liste de tutoriels
    à cette page: <Link href="godot/tutoriels">tutoriels</Link>.
</p>
<p>
    Sinon, vous pouvez suivre mes ateliers, en commencant par <Link href="atelier/devine-le-nombre">Devine le nombre</Link>.
</p>