<script>
    import ExternalLink from "$lib/components/ExternalLink.svelte";
</script>


<svelte:head>
    <title>Godot - Tutoriels</title>
</svelte:head>

<h1 id="tutoriels"><small>Godot -</small> <span class="title">Tutoriels</span></h1>

<h2 id="tutoriels-ecrits">Tutoriels Écrits</h2>

<h3 id="documentation-godot">Documentation Godot</h3>
<ul>
    <li><ExternalLink href="https://docs.godotengine.org/fr/4.x/getting_started/introduction/">Introduction / Pas-à-pas</ExternalLink></li>
    <li><ExternalLink href="https://docs.godotengine.org/fr/4.x/getting_started/first_2d_game/index.html">Dodge the creeps 2D</ExternalLink></li>
    <li><ExternalLink href="https://docs.godotengine.org/fr/4.x/getting_started/first_3d_game/index.html">Dodge the creeps 3D</ExternalLink></li>
    <li><ExternalLink href="https://docs.godotengine.org/fr/4.x/tutorials/best_practices/scene_organization.html">Organisation d'une scène</ExternalLink></li>
    <li><ExternalLink href="https://docs.godotengine.org/fr/4.x/tutorials/ui/index.html">Interface Utilisateur</ExternalLink></li>
</ul>

<h2 id="tutoriels-video">Tutoriels Vidéo</h2>

<h3 id="tutoriels-video-anglais">Tutoriels anglais</h3>
<div class="youtube-grid">
    <iframe src="https://www.youtube.com/embed/GwCiGixlqiU?si=EHNVC1RKSldNDZcL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<h3 id="tutoriels-video-francais">Tutoriels français</h3>


<style>
    .youtube-grid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;

        iframe {
            border: 1px solid var(--border-color);
            width: 100%;
            aspect-ratio: 16/9;
        }
    }
</style>