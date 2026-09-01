<script>
    import ExternalLink from "$lib/components/ExternalLink.svelte"


</script>


<svelte:head>
    <title>Ressource - Inspirations</title>
</svelte:head>


<h1 id="inspirations">Inspirations</h1>

<h2 id="jeux-de-gamejams">Jeux de Gamejam</h2>
<p>
    Liste de jeux itch:
    <ExternalLink href="https://itch.io/c/5926827/gamejams">Jeux de gamejam</ExternalLink>.
</p>

<div class="itch-grid">
    <iframe title="Horse Magnifier" frameborder="0" src="https://itch.io/embed/4420109?dark=true" width="552" height="167">
        <a href="https://sketbordcat.itch.io/horse-magnifier">Horse Magnifier: Jam Edition by sketbordcat</a>
    </iframe>
    <iframe title="My Hand is a Gun" height="167" frameborder="0" src="https://itch.io/embed/4810503?dark=true" width="552">
        <a href="https://certifiedbozo.itch.io/my-hand-is-a-gun">My Hand is a Gun by certifiedbozo, mondfuch-marjulie, Ahnaf30eidiot</a>
    </iframe>
    <iframe title="AGUJERO" height="167" frameborder="0" src="https://itch.io/embed/2618028?dark=true" width="552">
        <a href="https://nightframes.itch.io/the-true-story-of-the-agujero">AGUJERO by Nightframes_, Eufrasio, Pikas, Culo, chuso, Renato Meyer, AQUILES</a>
    </iframe>
    <iframe title="Shutterbug" width="552" height="167" frameborder="0" src="https://itch.io/embed/2901938?dark=true">
        <a href="https://vividfax.itch.io/shutterbug">Shutterbug by vividfax, Dan Emmerson</a>
    </iframe>
    <iframe title="Blueprint Hell" width="552" height="167" frameborder="0" src="https://itch.io/embed/2907459?dark=true">
        <a href="https://egunan.itch.io/blueprint-hell">Blueprint Hell by egunan</a>
    </iframe>
    <iframe title="Major Moo's Moonbound Milky Way Mission" width="552" src="https://itch.io/embed/4808474?dark=true" height="167" frameborder="0">
        <a href="https://moo-32.itch.io/major-moos-milky-way-mission-to-the-moon">Major Moo’s Moonbound Milky Way Mission by moo, Eliott K., vivishere</a>
    </iframe>
    <iframe title="Count rou Clones" frameborder="0" src="https://itch.io/embed/4794047?dark=true" width="552" height="167">
        <a href="https://42ama.itch.io/count-your-clones">Count your Clones by 42ama, KingdomPots, MgMax, TylerVoiceActs</a>
    </iframe>
    <iframe title="Loopush" width="552" src="https://itch.io/embed/1629791?dark=true" height="167" frameborder="0">
        <a href="https://fululu.itch.io/loopush">Loopush by Fululu</a>
    </iframe>
    <iframe title="HardCoded" width="552" height="167" frameborder="0" src="https://itch.io/embed/663774?dark=true">
        <a href="https://matheuscunegato.itch.io/hardcoded">HardCoded by MatheusCunegato, dorodo, MDSalomon</a>
    </iframe>
    <iframe title="Fuse on the loose" height="167" frameborder="0" src="https://itch.io/embed/3283588?dark=true" width="552">
        <a href="https://rumyoonomicon.itch.io/fuse-on-the-loose">Fuse on the Loose by rumyooonomicon</a>
    </iframe>
    <iframe title="Making the Game" frameborder="0" src="https://itch.io/embed/2156549?dark=true" width="552" height="167">
        <a href="https://kindanice.itch.io/making-the-game">Making the Game by kindanice</a>
    </iframe>
    <iframe title="Sneakerdoodle" frameborder="0" src="https://itch.io/embed/2149381?dark=true" width="552" height="167">
        <a href="https://pulni.itch.io/sneakerdoodle">Sneakerdoodle by Pulni, Lithimlin, Katamarang_Art, andrground, Nikkar, VexenD, MokeyMokey, Jenny Schukin, Aviv Youker Harel</a>
    </iframe>
    <iframe title="The Pocket Master" height="167" frameborder="0" src="https://itch.io/embed/2901936?dark=true" width="552">
        <a href="https://antoine-foucault.itch.io/the-pocket-master">The Pocket Master by Antoine Foucault</a>
    </iframe>
    <iframe title="Windowframe" frameborder="0" src="https://itch.io/embed/2900665?dark=true" width="552" height="167">
        <a href="https://zeehatcher.itch.io/windowframe">Windowframe by ZeeHatcher, Zircon332</a>
    </iframe>
</div>


<style>
    .itch-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        iframe {
            width: 100%;
        }
    }

    @media (max-width: 700px) {
        .itch-grid {
            grid-template-columns: 1fr;
        }
    }
</style>