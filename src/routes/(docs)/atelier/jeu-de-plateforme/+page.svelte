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
</script>


<svelte:head>
    <title>Atelier - Jeu de plateforme</title>
</svelte:head>


<h1 id="jeu-de-plateforme"><small>Atelier 3 -</small> <span class="title">Jeu de plateforme</span></h1>
<p>
    Dans cet atelier, nous allons créer un jeu de plateforme.
</p>
<details>
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
        <details>
            <summary>Tous les nodes</summary>
            <ul>
                <li><GodotNode node="Sprite2D"></GodotNode></li>
                <li><GodotNode node="Node2D"></GodotNode></li>
                <li><GodotNode node="AnimatedSprite2D"></GodotNode></li>
                <li><GodotNode node=""></GodotNode></li>
            </ul>
        </details>
    </ul>
</details>
