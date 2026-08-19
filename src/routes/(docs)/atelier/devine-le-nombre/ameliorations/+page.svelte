<script>
    // Components
    import GameIframe from "$lib/components/GameIframe.svelte";
    import Link from "$lib/components/Link.svelte";
    import ViewableImage from "$lib/components/ViewableImage.svelte";
    import Note from "$lib/components/Note.svelte";
    import ExternalLink from "$lib/components/ExternalLink.svelte";
    import GodotIcon from "$lib/components/GodotIcon.svelte";
    import GodotNode from "$lib/components/GodotNode.svelte";
    import Warning from "$lib/components/Warning.svelte";

    // Assets
    import input from "$lib/assets/pages-medias/ateliers/devine-le-nombre/ameliorations/input.gif";
    import keepEditingOnSubmit from "$lib/assets/pages-medias/ateliers/devine-le-nombre/ameliorations/keep-editing-on-submit.png";
    import lineEditRef from "$lib/assets/pages-medias/ateliers/devine-le-nombre/ameliorations/lineedit-ref.gif";
    import lineEditFixed from "$lib/assets/pages-medias/ateliers/devine-le-nombre/ameliorations/line-edit-fixed.gif";
    import richTextLabel from "$lib/assets/pages-medias/ateliers/devine-le-nombre/ameliorations/richtextlabel.gif";
    import guessList from "$lib/assets/pages-medias/ateliers/devine-le-nombre/ameliorations/guess-list.gif";
    import sceneBefore from "$lib/assets/pages-medias/ateliers/devine-le-nombre/ameliorations/scene-before.png";
    import sceneMargin from "$lib/assets/pages-medias/ateliers/devine-le-nombre/ameliorations/scene-margin.png";
    import fullRect from "$lib/assets/pages-medias/ateliers/devine-le-nombre/ameliorations/full-rect.gif";
    import sceneBoxContainer from "$lib/assets/pages-medias/ateliers/devine-le-nombre/ameliorations/scene-box-container.png";
    import horizontalAlignment from "$lib/assets/pages-medias/ateliers/devine-le-nombre/ameliorations/horizontal-aligment.gif";
    import vboxAlignment from "$lib/assets/pages-medias/ateliers/devine-le-nombre/ameliorations/vbox-alignment.png";
    import margins from "$lib/assets/pages-medias/ateliers/devine-le-nombre/ameliorations/margins.gif";
    import minimumSize from "$lib/assets/pages-medias/ateliers/devine-le-nombre/ameliorations/minimum-size.gif";
    import rectBehind from "$lib/assets/pages-medias/ateliers/devine-le-nombre/ameliorations/rect-behind.png";
    import rectInfront from "$lib/assets/pages-medias/ateliers/devine-le-nombre/ameliorations/rect-infront.png";
    import fontColor from "$lib/assets/pages-medias/ateliers/devine-le-nombre/ameliorations/font-color.png";
    import error from "$lib/assets/pages-medias/ateliers/devine-le-nombre/ameliorations/errors.gif";
    import uniqueName from "$lib/assets/pages-medias/ateliers/devine-le-nombre/ameliorations/unique-name.gif";
</script>


<svelte:head>
    <title>Devine le nombre - Amélioration</title>
</svelte:head>


<h1 id="ameliorations"><small>Devine le nombre -</small> <span class="title">Améliorations</span></h1>
<p>
    Cette page contient une liste d'améliorations possible pour le jeu créé lors de l'atelier
    <Link href="atelier/devine-le-nombre">Devine le nombre</Link>.
</p>

<h2 id="suppression-de-la-reponse">Suppression de la réponse</h2>
<p>
    Actuellement, une fois une réponse entrée, il faut manuellement sélectionner à nouveau le
    <GodotNode node="LineEdit"></GodotNode>, supprimer la réponse précédente et enfin mettre notre nouvelle réponse.
    <i>C'est très laborieux.</i>
</p>
<ViewableImage src={input}></ViewableImage>
<p>
    Pour régler cela, il nous suffit de faire deux petits changements:
</p>

<h3 id="focus-line-edit">Garder le focus du LineEdit</h3>
<p>
    D'abord, on active la propriété <code>keep_editing_on_text_submit</code> du
    <GodotNode node="LineEdit"></GodotNode>. Cela permet de ne pas avoir besoin de re-sélectionner à chaque
    fois que nous voulons entrer une nouvelle réponse.
</p>
<ViewableImage src={keepEditingOnSubmit}></ViewableImage>

<h3 id="supprimer-texte-line-edit">Supprimer le texte du LineEdit</h3>
<p>
    Ensuite, on veut supprimer la réponse que le joueur a entré. Pour cela on peut réutiliser la même technique
    que pour le <GodotNode node="Label"></GodotNode> dans la partie
    <Link href="atelier/devine-le-nombre#communiquer-avec-joueur"># Comuniquer avec le joueur</Link>:
</p>
<ol>
    <li>
        On obtient une référence au node:
<pre><code class="gdscript-snippet"><span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">line_edit</span><span class="symbol">:</span> <span class="type">LineEdit</span> <span class="symbol">=</span> <span class="node-path">$LineEdit</span>
</code></pre>

    <Note>
        Rappellez-vous que <strong>vous n'avez pas besoin d'écrire cette ligne à la main</strong>. Je vous
        recommande même très fortement de <strong>NE PAS</strong> l'écrire vous même, mais de laisser Godot
        le faire. Pour cela, glisser le node dans le script, en restant appuyé sur <i>Ctrl</i>.

        <ViewableImage src={lineEditRef}></ViewableImage>
    </Note>
    </li>
    <li>
        On modifie la propriété <code>text</code> du <GodotNode node="LineEdit"></GodotNode> au moment où le
        joueur entre sa réponse, et on remplace le texte par <code>""</code> <small>(du texte vide)</small>:
<pre><code class="gdscript-snippet"><span class="keyword">func</span> <span class="func">_on_line_edit_text_submitted</span><span class="symbol">(</span>new_text<span class="symbol">:</span> <span class="type">String</span><span class="symbol">) -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="member-var">line_edit</span><span class="symbol">.</span><span class="member-var">text</span> <span class="symbol">=</span> <span class="string">""</span>
&#9;
&#9;<span class="keyword">var</span> guess<span class="symbol">:</span> <span class="type">int</span> <span class="symbol">=</span> <span class="type">int</span><span class="symbol">(</span>new_text<span class="symbol">)</span>
&#9;<span class="comment"># reste de la fonction [...]</span>
</code></pre>
    </li>
</ol>

<p>
    Ce qui nous donne:
</p>
<ViewableImage src={lineEditFixed}></ViewableImage>

<h2 id="liste-reponses-precedentes">Liste des réponses précédentes</h2>
<p>
    Une autre amélioration <ExternalLink href="https://en.wikipedia.org/wiki/Glossary_of_video_game_terms#QoL">QoL</ExternalLink>
    que l'on peut implémenter est d'afficher une liste des réponses que le joueur a déja entré. On peut faire cela de de mille
    et une façons. Étant donné que toute la structure de notre jeu est extrêment simple, on va l'implémenter de manière simple.
</p>
<p>
    Pour ce faire, on va jouter un nouveau node à notre scène: un <GodotNode node="RichTextLabel"></GodotNode>.
</p>
<ViewableImage src={richTextLabel}></ViewableImage>
<p>
    Ensuite, il nous faut une référence à ce node:
</p>
<pre><code class="gdscript-snippet"><span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">guess_list</span><span class="symbol">:</span> <span class="type">RichTextLabel</span> <span class="symbol">=</span> <span class="node-path">$RichTextLabel</span>
</code></pre>

<Note>
    Vous avez peut être remarqué que j'ai nommé la variable <code>guess_list</code> au lieu de <code>rich_text_label</code>.
    En général il est mieux de renommer ses Nodes et variables pour que le code soit plus lisible.
</Note>

<p>
    Quand le joueur entre une réponse, on veut l'ajouter à la liste. Pour cela on modifie le text
    de notre node <code>guess_list</code> pour y ajouter la réponse du joueur:
</p>
<pre><code class="gdscript-snippet"><span class="keyword">func</span> <span class="func">_on_line_edit_text_submitted</span><span class="symbol">(</span>new_text<span class="symbol">:</span> <span class="type">String</span><span class="symbol">) -></span> <span class="type">void</span><span class="symbol">:</span>
    &#9;<span class="member-var">line_edit</span><span class="symbol">.</span><span class="member-var">text</span> <span class="symbol">=</span> <span class="string">""</span>
    &#9;<span class="member-var">guess_list</span><span class="symbol">.</span><span class="member-var">text</span> <span class="symbol">+=</span> new_text <span class="symbol">+</span> <span class="string">"<span class="symbol">\n</span>"</span>
    &#9;
    &#9;<span class="keyword">var</span> guess<span class="symbol">:</span> <span class="type">int</span> <span class="symbol">=</span> <span class="type">int</span><span class="symbol">(</span>new_text<span class="symbol">)</span>
    &#9;<span class="comment"># reste de la fonction [...]</span>
</code></pre>

<Note>
    Le symbole <code class="gdscript-snippet inline"><span class="string">"<span class="symbol">\n</span>"</span></code> représente un retour à la ligne.
</Note>
<ViewableImage src={guessList}></ViewableImage>

<h2 id="meilleure-interface">Meilleure interface</h2>
<p>
    Il est maintenant temps de rendre notre jeu un peu plus beau.
</p>
<p>
    Pour créer une interface dans Godot, on utilise les nodes de la famille <GodotNode node="Control"></GodotNode>.
    Nous allons ici créer une interface très simple, pour plus de détails, vous pouvez aller voir l'atelier
    <Link href="atelier/menu">Menu</Link>, ou alors la
    <ExternalLink href="https://docs.godotengine.org/fr/4.x/tutorials/ui/">documentation Godot</ExternalLink>.
</p>

<h3 id="marges">Marges</h3>
<p>
    Notre scène ressemble pour l'instant à cela:
</p>
<ViewableImage src={sceneBefore}></ViewableImage>

<p>
    Un <GodotNode node="Control"></GodotNode> en racine, avec en enfant <i>directs</i> nos éléments d'interface.
    Pour pouvoir les mettre en page de manière plus ordonnée, on va utiliser des contenants.
</p>
<p>
    D'abord, on va créer un nouveau node <GodotNode node="MarginContainer"></GodotNode>, dans lequel on va mettre en enfant
    tous nos éléments d'interface:
</p>
<ViewableImage src={sceneMargin}></ViewableImage>
<p>
    Ce qui a... <i>tout cassé</i>. Mais c'est normal, le node <GodotNode node="MarginContainer"></GodotNode> est un
    node de la famille des <GodotNode node="Container"></GodotNode>, c'est à dire qu'il modifie la position et la taille de
    ses enfants. Étant donné qu'il est actuellement dans le coin de la page, et est petit, alors tous les éléments sont
    écrasés. Il faut donc lui faire prendre toute la place. Pour cela, cliquez sur le bouton
    <GodotIcon object="ControlLayout"></GodotIcon> puis sélectionnez <i>FullRect</i>
    <GodotIcon object="ControlAlignFullRect"></GodotIcon>.
</p>

<ViewableImage src={fullRect}></ViewableImage>

<h3 id="alignements">Alignements</h3>
<p>
    Ensuite on veut aligner nos éléments horizontalement et verticalement, pour ça on peut utiliser les nodes
    <GodotNode node="HBoxContainer"></GodotNode> et <GodotNode node="VBoxContainer"></GodotNode>.
</p>
<p>
    On peut ajouter un <GodotNode node="HBoxContainer"></GodotNode>, qui va contenir le <GodotNode node="RichTextLabel"></GodotNode>
    ainsi qu'un <GodotNode node="VBoxContainer"></GodotNode> qui va contenir le reste de nos nodes. Je me suis
    également permis de les renommer pour plus de clarté.
</p>

<ViewableImage src={sceneBoxContainer}></ViewableImage>

<p>
    Enfin on peut ajouter un <GodotNode node="Control"></GodotNode> vide en enfant du
    <GodotNode node="HBoxContainer"></GodotNode>. Le but étant de diviser l'écran en trois.
</p>

<h3 id="stylisation">Stylisation</h3>
<p>
    Et maintenant, il ne reste plus qu'à modifier les <strong>sizing settings</strong> <GodotIcon object="ContainerLayout"></GodotIcon>
    et les <strong>constantes</strong> de nos <GodotNode node="Control"></GodotNode>s.
</p>

<h4>Alignement horizontal</h4>
<p>
    Pour commencer, on va sélectionner les trois nodes enfants de notre <GodotNode node="HBoxContainer"></GodotNode>
    <small>(<i>GuessList</i>, <i>VBoxContainer</i> et <i>Control</i>)</small>, puis on change leur
    <strong>Horizontal Sizing</strong> en <strong>Expand</strong>:
</p>
<ViewableImage src={horizontalAlignment}></ViewableImage>

<h4>Alignement vertical</h4>
<p>
    Ensuite, pour centrer le bouton et l'entrée text, on modifie la propriété <code>alignment</code> de notre
    <GodotNode node="VBoxContainer"></GodotNode> sur <code>Center</code>.
</p>
<ViewableImage src={vboxAlignment}></ViewableImage>

<h4>Marges</h4>
<p>
    On a bien ajouté un node <GodotNode node="MarginContainer"></GodotNode>, mais par défaut ses marges sont de 0 pixels.
    Pour modifier la taille des marges, il faut modifier ses <strong>Theme Overrides</strong> > <strong>Constants</strong>:
</p>
<ViewableImage src={margins}></ViewableImage>

<h4>Taille des éléments</h4>
<p>
    Par défault, les éléments prennent toute la place qui leur est permis. Pour cette raison, le bouton prend 30% de
    la largeur de l'écran, pareil pour le <GodotNode node="LineEdit"></GodotNode> et le <GodotNode node="Button"></GodotNode>.
</p>

<section class="subsection">
    <h5><GodotIcon object="RichTextLabel"></GodotIcon> GuessList</h5>
    <p>
        La liste des réponses prend actuellement toute l'espace gauche de l'écran. Pour
        modifier cela, on modifie son <strong>Horizontal Sizing</strong> en <strong>Shrink Begin</strong>
        <GodotIcon object="ControlAlignCenterLeft"></GodotIcon>. Ce qui va entièrement écraser le RichTextLabel.
        Pour que l'on puisse tout de même lire le texte, il faut modifier son <code>custom_minimum_size</code>.
    </p>
    <ViewableImage src={minimumSize}></ViewableImage>
    <p>
        On peut égallement modifier son <code>horizontal_alignment</code> et <code>vertical_alignment</code> sur
        <code>Center</code>.
    </p>

    <h5><GodotIcon object="Button"></GodotIcon> RestartButton</h5>
    <p>
        Comme pour <i>GuessList</i>, on peut modifier son <strong>Horizontal Sizing</strong>, cette fois ci en
        <strong>Shrink Center</strong> <GodotIcon object="ControlAlignCenter"></GodotIcon> et on peut modifier son <code>custom_minimum_size</code> pour choisir sa
        largeur.
    </p>

    <h5><GodotIcon object="LineEdit"></GodotIcon> GuessInput</h5>
    <p>
        Vous pouvez ici copier les mêmes propriétés que le <i>RestartButton</i>. On peut égallement centrer le texte en
        mettant sa propriété <code>horizontal_alignment</code> sur <code>Center</code>. Vous pouvez même modifier sa
        propriété <code>placeholder_text</code>, elle permet d'afficher un texte qui indique la valeur attendue. Par
        exemple y écrire: <i>"Entrez votre réponse"</i>.
    </p>

    <h5><GodotIcon object="Label"></GodotIcon> HintLabel</h5>
    <p>
        Pour le <i>HintLabel</i>, on peut soit le mettre sur <strong>Shrink Center</strong>
        <GodotIcon object="ControlAlignCenter"></GodotIcon>, ou alors modifier sa propriété <code>horizontal_alignment</code>
        en <code>Center</code>, dans les deux cas cela va centrer le texte.
    </p>
</section>

<h3 id="couleur">Couleur</h3>
<p>
    Vous voulez peut être modifier les couleurs du texte ou du fond. Pour ajouter un fond coloré, on peut utiliser un
    <GodotNode node="ColorRect"></GodotNode> avec son <strong>Sizing</strong> <GodotIcon object="ControlLayout"></GodotIcon>
    sur <strong>FullRect</strong> <GodotIcon object="ControlAlignFullRect"></GodotIcon>, puis modifier sa propriété
    <code>color</code>.
</p>

<Note>
    Attention, il faut bient faire attention à l'ordre des nodes. Plus un node est en bas de l'arborescance, plus le node sera
    <strong>par dessus</strong> les autres.

    <div class="side-by-side">
        <ViewableImage showAlt alt="Control au dessus des autres" src={rectBehind}></ViewableImage>
        <ViewableImage showAlt alt="Control en dessous des autres" src={rectInfront}></ViewableImage>
    </div>
</Note>

<p>
    Pour la couleur du texte, vous pouvez modifier les constantes <strong>colors</strong> dans les
    <strong>Theme Overrides</strong>:
</p>
<ViewableImage src={fontColor}></ViewableImage>
<p>
    Dans ces mêmes <strong>Theme Overrides</strong> vous pouvez égallement modifier la taille du texte, des contours de texte
    etc.
</p>

<h2 id="reparations">Réparations</h2>
<p>
    Après avoir modifié l'arborescance des nodes. Le jeu ne fonctionne plus du tout:
</p>
<ViewableImage src={error}></ViewableImage>
<p>
    Pourquoi ?
</p>

<p>
    Les référence à nos nodes sont fait selon la relation parent-enfant des nodes, ainsi que leur nom. Et nous avons modifier
    leur parent et leur nom. Il nous faut donc modifier les références: 
</p>

<h4>Référence actuelles</h4>

<pre><code class="gdscript-snippet"><span class="keyword">extends</span> <span class="type">Control</span>


<span class="keyword">var</span> <span class="member-var">secret_number</span><span class="symbol">:</span> <span class="type">int</span>


<span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">label</span><span class="symbol">:</span> <span class="type">Label</span> <span class="symbol">=</span> <span class="node-path">$Label</span>
<span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">line_edit</span><span class="symbol">:</span> <span class="type">LineEdit</span> <span class="symbol">=</span> <span class="node-path">$LineEdit</span>
<span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">guess_list</span><span class="symbol">:</span> <span class="type">RichTextLabel</span> <span class="symbol">=</span> <span class="node-path">$RichTextLabel</span>


<span class="keyword">func</span> <span class="func">_ready</span><span class="symbol">() -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="member-var">secret_number</span> <span class="symbol">=</span> <span class="global-func">randi_range</span><span class="symbol">(</span><span class="number">0</span><span class="symbol">,</span> <span class="number">100</span><span class="symbol">)</span>
&#9;<span class="global-func">print</span><span class="symbol">(</span><span class="string">"Nombre secret: "</span><span class="symbol">,</span> <span class="member-var">secret_number</span><span class="symbol">)</span>


<span class="keyword">func</span> <span class="func">_on_line_edit_text_submitted</span><span class="symbol">(</span>new_text<span class="symbol">:</span> <span class="type">String</span><span class="symbol">) -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="member-var">line_edit</span><span class="symbol">.</span><span class="member-var">text</span> <span class="symbol">=</span> <span class="string">""</span>
&#9;<span class="member-var">guess_list</span><span class="symbol">.</span><span class="member-var">text</span> <span class="symbol">+=</span> new_text <span class="symbol">+</span> <span class="string">"<span class="symbol">\n</span>"</span>
&#9;
&#9;<span class="keyword">var</span> guess<span class="symbol">:</span> <span class="type">int</span> <span class="symbol">=</span> <span class="type">int</span><span class="symbol">(</span>new_text<span class="symbol">)</span>
&#9;<span class="control-flow">if</span> guess <span class="symbol">&#62;</span> <span class="member-var">secret_number</span><span class="symbol">:</span>
&#9;&#9;label<span class="symbol">.</span><span class="member-var">text</span> <span class="symbol">=</span> <span class="string">"Plus petit !"</span>
&#9;<span class="control-flow">elif</span> guess <span class="symbol">&#60;</span> <span class="member-var">secret_number</span><span class="symbol">:</span>
&#9;&#9;label<span class="symbol">.</span><span class="member-var">text</span> <span class="symbol">=</span> <span class="string">"Plus grand !"</span>
&#9;<span class="control-flow">else</span><span class="symbol">:</span>
&#9;&#9;label<span class="symbol">.</span><span class="member-var">text</span> <span class="symbol">=</span> <span class="string">"Trouvé !"</span>


<span class="keyword">func</span> <span class="func">_on_button_pressed</span><span class="symbol">() -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="call-func">get_tree</span><span class="symbol">().</span><span class="call-func">reload_current_scene</span><span class="symbol">()</span>
</code></pre>

Si on supprime les lignes:

<pre><code class="gdscript-snippet"><span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">label</span><span class="symbol">:</span> <span class="type">Label</span> <span class="symbol">=</span> <span class="node-path">$Label</span>
<span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">line_edit</span><span class="symbol">:</span> <span class="type">LineEdit</span> <span class="symbol">=</span> <span class="node-path">$LineEdit</span>
<span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">guess_list</span><span class="symbol">:</span> <span class="type">RichTextLabel</span> <span class="symbol">=</span> <span class="node-path">$RichTextLabel</span>
</code></pre>

<p>
    Puis qu'on réimporte les nodes à la main, cela nous donne:
</p>

<pre><code class="gdscript-snippet"><span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">hint_label</span><span class="symbol">:</span> <span class="type">Label</span> <span class="symbol">=</span> <span class="node-path">$MarginContainer/HBoxContainer/VBoxContainer/HintLabel</span>
<span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">guess_input</span><span class="symbol">:</span> <span class="type">LineEdit</span> <span class="symbol">=</span> <span class="node-path">$MarginContainer/HBoxContainer/VBoxContainer/GuessInput</span>
<span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">guess_list</span><span class="symbol">:</span> <span class="type">RichTextLabel</span> <span class="symbol">=</span> <span class="node-path">$MarginContainer/HBoxContainer/GuessList</span>
</code></pre>

<p>
    <strong>Mais</strong>, cela ammène deux problèmes:
</p>
<ol>
    <li>
        Le nom des variables n'est plus le même.
    </li>
    <li>
        Le code n'est plus très lisible. Au lieu d'un symple
        <code class="gdscript-snippet inline"><span class="node-path">$Label</span></code>,
        on se retrouve avec <code class="gdscript-snippet inline"><span class="node-path">$MarginContainer/HBoxContainer/VBoxContainer/HintLabel</span></code>

    </li>
</ol>
<p>
    Pour réparer les erreurs, après avoir réimporter les nodes, il nous suffit de modifier <code>label</code> en
    <code>hint_label</code> et <code>line_edit</code> en <code>guess_input</code>.
</p>
<p>
    Pour rendre le code plus lisible, on peut utiliser la fonctionnalité de <strong>%UniqueName</strong>. Pour cela,
    on sélectionne les nodes dont on veut la référence, puis on active <i>"Unique Name"</i> dans le menu clique-droit:
</p>
<ViewableImage src={uniqueName}></ViewableImage>

<p>
    On peut maitenant remplacer <code class="gdscript-snippet inline"><span class="node-path">$MarginContainer/HBoxContainer/VBoxContainer/HintLabel</span></code>
    par <code class="gdscript-snippet inline"><span class="node-path">%HintLabel</span></code>:
</p>

<pre><code class="gdscript-snippet"><span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">hint_label</span><span class="symbol">:</span> <span class="type">Label</span> <span class="symbol">=</span> <span class="node-path">%HintLabel</span>
<span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">guess_input</span><span class="symbol">:</span> <span class="type">LineEdit</span> <span class="symbol">=</span> <span class="node-path">%GuessInput</span>
<span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">guess_list</span><span class="symbol">:</span> <span class="type">RichTextLabel</span> <span class="symbol">=</span> <span class="node-path">%GuessList</span>
</code></pre>

<Note>
    Attention, ici on utilise le symbole <strong>%</strong> pour avoir une référence à un node avec un
    <strong>Nom Unique</strong> au lieu de <strong>$</strong>.
</Note>

<h2 id="code-final">Code final</h2>

<pre><code class="gdscript-snippet"><span class="keyword">extends</span> <span class="type">Control</span>


<span class="keyword">var</span> <span class="member-var">secret_number</span><span class="symbol">:</span> <span class="type">int</span>


<span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">hint_label</span><span class="symbol">:</span> <span class="type">Label</span> <span class="symbol">=</span> <span class="node-path">%HintLabel</span>
<span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">guess_input</span><span class="symbol">:</span> <span class="type">LineEdit</span> <span class="symbol">=</span> <span class="node-path">%GuessInput</span>
<span class="annotation">@onready</span> <span class="keyword">var</span> <span class="member-var">guess_list</span><span class="symbol">:</span> <span class="type">RichTextLabel</span> <span class="symbol">=</span> <span class="node-path">%GuessList</span>


<span class="keyword">func</span> <span class="func">_ready</span><span class="symbol">() -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="member-var">secret_number</span> <span class="symbol">=</span> <span class="global-func">randi_range</span><span class="symbol">(</span><span class="number">0</span><span class="symbol">,</span> <span class="number">100</span><span class="symbol">)</span>
&#9;<span class="global-func">print</span><span class="symbol">(</span><span class="string">"Nombre secret: "</span><span class="symbol">,</span> <span class="member-var">secret_number</span><span class="symbol">)</span>


<span class="keyword">func</span> <span class="func">_on_line_edit_text_submitted</span><span class="symbol">(</span>new_text<span class="symbol">:</span> <span class="type">String</span><span class="symbol">) -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="member-var">guess_input</span><span class="symbol">.</span><span class="member-var">text</span> <span class="symbol">=</span> <span class="string">""</span>
&#9;<span class="member-var">guess_list</span><span class="symbol">.</span><span class="member-var">text</span> <span class="symbol">+=</span> new_text <span class="symbol">+</span> <span class="string">"<span class="symbol">\n</span>"</span>
&#9;
&#9;<span class="keyword">var</span> guess<span class="symbol">:</span> <span class="type">int</span> <span class="symbol">=</span> <span class="type">int</span><span class="symbol">(</span>new_text<span class="symbol">)</span>
&#9;<span class="control-flow">if</span> guess <span class="symbol">&#62;</span> <span class="member-var">secret_number</span><span class="symbol">:</span>
&#9;&#9;<span class="member-var">hint_label</span><span class="symbol">.</span><span class="member-var">text</span> <span class="symbol">=</span> <span class="string">"Plus petit !"</span>
&#9;<span class="control-flow">elif</span> guess <span class="symbol">&#60;</span> <span class="member-var">secret_number</span><span class="symbol">:</span>
&#9;&#9;<span class="member-var">hint_label</span><span class="symbol">.</span><span class="member-var">text</span> <span class="symbol">=</span> <span class="string">"Plus grand !"</span>
&#9;<span class="control-flow">else</span><span class="symbol">:</span>
&#9;&#9;<span class="member-var">hint_label</span><span class="symbol">.</span><span class="member-var">text</span> <span class="symbol">=</span> <span class="string">"Trouvé !"</span>


<span class="keyword">func</span> <span class="func">_on_button_pressed</span><span class="symbol">() -></span> <span class="type">void</span><span class="symbol">:</span>
&#9;<span class="call-func">get_tree</span><span class="symbol">().</span><span class="call-func">reload_current_scene</span><span class="symbol">()</span>
</code></pre>