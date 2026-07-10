<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>L'Art de la Vente de Luxe</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
  :root{
    --ivoire:#FBF6EA;
    --ivoire-2:#F4EAD3;
    --ivoire-3:#ECDCB3;
    --charbon:#4A3220;
    --noir:#4A3220;
    --gris:#9C7C4E;
    --gris-fonce:#6E4E2E;
    --gris-clair:#DEC694;
    --or:#A9762F;
    --or-clair:#C9973F;
    --rouge:#8C1926;
    --serif:'Playfair Display', serif;
    --sans:'Jost', sans-serif;
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{
    background:var(--ivoire);
    color:var(--charbon);
    font-family:var(--sans);
    font-weight:300;
    overflow-x:hidden;
  }
  ::selection{background:var(--charbon);color:var(--ivoire);}

  .eyebrow{
    font-family:var(--sans);
    font-size:.72rem;
    letter-spacing:.35em;
    text-transform:uppercase;
    color:var(--or);
    display:inline-block;
    margin-bottom:1.2rem;
  }
  h1,h2,h3{font-family:var(--serif);font-weight:500;letter-spacing:.01em;color:var(--charbon);}
  .hairline{width:60px;height:1px;background:var(--or);margin:1.6rem auto;}

  /* ---------- NAV ---------- */
  nav{
    position:fixed;top:0;left:0;right:0;z-index:100;
    display:flex;align-items:center;justify-content:space-between;
    padding:1.4rem 5%;
    background:rgba(247,243,235,0);
    transition:background .5s ease, padding .4s ease, box-shadow .4s ease;
  }
  nav.scrolled{
    background:rgba(247,243,235,.94);
    backdrop-filter:blur(6px);
    padding:.9rem 5%;
    box-shadow:0 1px 0 rgba(0,0,0,.07);
  }
  .brand{font-family:var(--serif);letter-spacing:.28em;font-size:1rem;text-transform:uppercase;color:var(--charbon);}
  .nav-links{display:flex;gap:1.9rem;list-style:none;}
  .nav-links a{
    color:var(--charbon);text-decoration:none;
    font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;
    position:relative;opacity:.72;transition:opacity .3s ease;
  }
  .nav-links a:hover,.nav-links a.active{opacity:1;}
  .nav-links a::after{content:'';position:absolute;left:0;bottom:-6px;width:0;height:1px;background:var(--or);transition:width .3s ease;}
  .nav-links a:hover::after,.nav-links a.active::after{width:100%;}
  .burger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;}
  .burger span{width:22px;height:1px;background:var(--charbon);}

  /* ---------- HERO ---------- */
  .hero{
    min-height:92svh;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    text-align:center;padding:7rem 2rem 4rem;
    background:
      radial-gradient(ellipse at 50% 10%, rgba(150,112,63,.14), transparent 62%),
      var(--ivoire);
    position:relative;overflow:hidden;
  }
  .hero::before{
    content:'';position:absolute;inset:0;
    background-image:repeating-linear-gradient(90deg, rgba(150,112,63,.06) 0 1px, transparent 1px 120px);
    pointer-events:none;
  }
  .hero h1{
    font-size:clamp(2.4rem,6.6vw,5rem);line-height:1.08;max-width:16ch;
    opacity:0;animation:rise 1.1s .25s cubic-bezier(.2,.7,.2,1) forwards;
  }
  .hero h1 em{font-style:italic;color:var(--or);}
  .hero p.sub{
    font-size:1.02rem;letter-spacing:.03em;color:var(--gris-fonce);
    margin-top:1.6rem;max-width:40ch;
    opacity:0;animation:rise 1.1s .55s cubic-bezier(.2,.7,.2,1) forwards;
  }
  @keyframes rise{from{opacity:0;transform:translateY(22px);}to{opacity:1;transform:translateY(0);}}
  .scrollcue{
    position:absolute;bottom:2.2rem;left:50%;transform:translateX(-50%);
    display:flex;flex-direction:column;align-items:center;gap:.5rem;
    color:var(--gris);font-size:.64rem;letter-spacing:.3em;text-transform:uppercase;
  }
  .scrollcue .line{width:1px;height:36px;background:linear-gradient(var(--or),transparent);animation:scrollmove 1.8s ease-in-out infinite;}
  @keyframes scrollmove{0%{transform:scaleY(0);transform-origin:top;}50%{transform:scaleY(1);transform-origin:top;}51%{transform-origin:bottom;}100%{transform:scaleY(0);transform-origin:bottom;}}

  /* ---------- SECTIONS ---------- */
  section{padding:6.5rem 5%;max-width:1180px;margin:0 auto;}
  .section-head{text-align:center;max-width:660px;margin:0 auto 3.2rem;}
  .section-head h2{font-size:clamp(1.8rem,3.8vw,2.6rem);}
  .section-head p{color:var(--gris-fonce);margin-top:1rem;font-size:1rem;line-height:1.7;}

  /* ---------- LE METIER ---------- */
  .metier-grid{display:grid;grid-template-columns:1fr 1fr;gap:3.5rem;align-items:center;}
  .metier-visual{
    aspect-ratio:3/4;
    background:linear-gradient(160deg, var(--ivoire-2) 0%, var(--ivoire-3) 60%, #DED2B8 100%);
    border:1px solid var(--gris-clair);
    position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;
  }
  .metier-visual .cd{font-family:var(--serif);font-size:5.6rem;color:var(--or);letter-spacing:.05em;opacity:.85;}
  .metier-visual::after{
    content:'MAISON';position:absolute;bottom:1.6rem;left:50%;transform:translateX(-50%);
    color:var(--gris-fonce);font-size:.65rem;letter-spacing:.4em;
  }
  .metier-text p{line-height:1.85;color:var(--gris-fonce);margin-bottom:1.1rem;font-size:1.02rem;}
  .metier-text strong{color:var(--charbon);font-weight:500;}

  /* ---------- QUOTE BAND ---------- */
  .quote-band{
    background:var(--ivoire-3);color:var(--charbon);
    max-width:none;padding:5rem 2rem;text-align:center;
    border-top:1px solid var(--gris-clair);border-bottom:1px solid var(--gris-clair);
  }
  .quote-band p{
    font-family:var(--serif);font-style:italic;font-size:clamp(1.3rem,3vw,2.1rem);
    max-width:20ch;margin:0 auto;color:var(--or);line-height:1.4;
  }

  /* ---------- ACCORDION (études & parcours) ---------- */
  .steps-group{border-top:none;}
  .step{
    border-top:1px solid var(--gris-clair);padding:1.9rem 0;cursor:pointer;
    display:grid;grid-template-columns:90px 1fr 24px;align-items:start;gap:1.5rem;
  }
  .step:last-child{border-bottom:1px solid var(--gris-clair);}
  .step .num{font-family:var(--serif);font-size:1.5rem;color:var(--or);}
  .step .title-row h3{font-size:1.3rem;font-weight:500;}
  .step .title-row span{display:block;color:var(--gris-fonce);font-size:.85rem;margin-top:.3rem;letter-spacing:.02em;}
  .step .chevron{font-size:1.2rem;color:var(--or);transition:transform .35s ease;justify-self:end;}
  .step.open .chevron{transform:rotate(45deg);}
  .step-detail{grid-column:1/-1;max-height:0;overflow:hidden;transition:max-height .45s ease;}
  .step.open .step-detail{max-height:260px;}
  .step-detail-inner{padding-top:1.1rem;display:grid;grid-template-columns:1fr 1fr;gap:2rem;}
  .step-detail-inner p{color:var(--gris-fonce);font-size:.92rem;line-height:1.7;}
  .step-detail-inner .label{color:var(--or);font-size:.66rem;letter-spacing:.18em;text-transform:uppercase;display:block;margin-bottom:.5rem;}

  /* ---------- QUALITES / OU EXERCER (flip cards) ---------- */
  .cards-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;}
  .flip-card{perspective:1200px;height:220px;cursor:pointer;}
  .flip-inner{position:relative;width:100%;height:100%;transition:transform .7s cubic-bezier(.4,.2,.2,1);transform-style:preserve-3d;}
  .flip-card.flipped .flip-inner{transform:rotateY(180deg);}
  .flip-front,.flip-back{
    position:absolute;inset:0;backface-visibility:hidden;
    display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:1.4rem;
  }
  .flip-front{background:var(--ivoire-2);border:1px solid var(--gris-clair);}
  .flip-front .qnum{font-family:var(--serif);font-style:italic;color:var(--or);font-size:.9rem;margin-bottom:.6rem;}
  .flip-front h3{font-size:1.1rem;}
  .flip-back{background:var(--ivoire-3);color:var(--charbon);border:1px solid var(--or);transform:rotateY(180deg);font-size:.86rem;line-height:1.6;}

  /* ---------- TABS (quotidien + avantages) ---------- */
  .tabs-bar{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center;margin-bottom:2.4rem;}
  .tab-btn{
    background:none;border:1px solid var(--gris-clair);color:var(--charbon);
    font-family:var(--sans);font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;
    padding:.7rem 1.2rem;cursor:pointer;transition:all .3s ease;
  }
  .tab-btn.active{background:var(--charbon);color:var(--ivoire);border-color:var(--charbon);}
  .tab-panel{display:none;}
  .tab-panel.active{display:grid;grid-template-columns:.5fr 1fr;gap:2.4rem;align-items:center;animation:rise .5s ease;}
  .tab-panel .time{font-family:var(--serif);font-size:2.6rem;color:var(--or);}
  .tab-panel p{color:var(--gris-fonce);line-height:1.8;font-size:1rem;}

  .pros-cons-panel.active{display:block;animation:rise .5s ease;}
  .pros-cons-panel{display:none;}
  .pros-cons-panel ul{list-style:none;max-width:640px;margin:0 auto;}
  .pros-cons-panel li{
    padding:1rem 0 1rem 2rem;border-top:1px solid var(--gris-clair);position:relative;
    color:var(--gris-fonce);line-height:1.6;
  }
  .pros-cons-panel li:last-child{border-bottom:1px solid var(--gris-clair);}
  .pros-cons-panel li::before{
    content:'—';position:absolute;left:0;color:var(--or);font-family:var(--serif);
  }

  /* ---------- VOCABULAIRE (details/summary) ---------- */
  .glossaire{max-width:760px;margin:0 auto;}
  .glossaire details{border-bottom:1px solid var(--gris-clair);padding:1.1rem 0;}
  .glossaire details:first-child{border-top:1px solid var(--gris-clair);}
  .glossaire summary{
    cursor:pointer;list-style:none;display:flex;align-items:center;justify-content:space-between;
    font-family:var(--serif);font-size:1.1rem;color:var(--charbon);
  }
  .glossaire summary::-webkit-details-marker{display:none;}
  .glossaire summary::after{content:'+';color:var(--or);font-size:1.3rem;transition:transform .3s ease;}
  .glossaire details[open] summary::after{transform:rotate(45deg);}
  .glossaire p{color:var(--gris-fonce);font-size:.92rem;line-height:1.7;margin-top:.9rem;max-width:60ch;}

  /* ---------- QUIZ ---------- */
  .quiz-box{background:var(--ivoire-2);border:1px solid var(--gris-clair);padding:3rem;max-width:720px;margin:0 auto;position:relative;}
  .quiz-progress{display:flex;gap:.4rem;margin-bottom:2.2rem;}
  .quiz-progress span{height:2px;flex:1;background:var(--gris-clair);}
  .quiz-progress span.done{background:var(--or);}
  .quiz-question h3{font-size:1.25rem;margin-bottom:1.6rem;}
  .quiz-options{display:flex;flex-direction:column;gap:.7rem;}
  .quiz-options button{
    text-align:left;background:var(--ivoire);border:1px solid var(--gris-clair);
    padding:1rem 1.2rem;font-family:var(--sans);font-size:.9rem;color:var(--charbon);
    cursor:pointer;transition:all .25s ease;
  }
  .quiz-options button:hover{border-color:var(--or);background:#fff;}
  .quiz-result{display:none;text-align:center;}
  .quiz-result.show{display:block;}
  .seal{
    width:92px;height:92px;border-radius:50%;border:2px solid var(--rouge);color:var(--rouge);
    display:flex;align-items:center;justify-content:center;margin:0 auto 1.6rem;
    font-family:var(--serif);font-style:italic;font-size:.72rem;letter-spacing:.05em;
    transform:scale(0) rotate(-25deg);animation:stamp .5s .1s cubic-bezier(.3,1.4,.5,1) forwards;
    text-align:center;line-height:1.2;
  }
  @keyframes stamp{to{transform:scale(1) rotate(-12deg);}}
  .quiz-result h3{font-size:1.5rem;margin-bottom:.8rem;}
  .quiz-result p{color:var(--gris-fonce);line-height:1.7;max-width:46ch;margin:0 auto 1.6rem;}
  .quiz-restart{
    background:none;border:1px solid var(--charbon);padding:.7rem 1.6rem;
    font-family:var(--sans);font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;cursor:pointer;transition:all .3s ease;
  }
  .quiz-restart:hover{background:var(--charbon);color:var(--ivoire);}

  /* ---------- CHIFFRES ---------- */
  .chiffres{background:var(--ivoire-2);border-top:1px solid var(--gris-clair);border-bottom:1px solid var(--gris-clair);}
  .chiffres-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;text-align:center;}
  .chiffre .num{font-family:var(--serif);font-size:clamp(2.1rem,4.2vw,3.2rem);color:var(--or);}
  .chiffre .lbl{color:var(--gris-fonce);font-size:.78rem;letter-spacing:.05em;margin-top:.6rem;line-height:1.5;}
  .chiffres-note{text-align:center;color:var(--gris);font-size:.72rem;margin-top:2.2rem;letter-spacing:.03em;}

  /* ---------- MAISONS ---------- */
  .maisons-track{overflow:hidden;border-top:1px solid var(--gris-clair);border-bottom:1px solid var(--gris-clair);padding:2rem 0;}
  .maisons-inner{display:flex;gap:4rem;width:max-content;animation:scroll-left 28s linear infinite;}
  .maisons-inner span{font-family:var(--serif);font-style:italic;font-size:1.5rem;color:var(--gris);white-space:nowrap;}
  @keyframes scroll-left{from{transform:translateX(0);}to{transform:translateX(-50%);}}

  /* ---------- CONCLUSION ---------- */
  .conclusion{text-align:center;padding-top:7rem;padding-bottom:8rem;}
  .conclusion h2{font-size:clamp(1.7rem,4vw,2.7rem);font-style:italic;max-width:18ch;margin:0 auto;line-height:1.3;}
  .conclusion .sign{margin-top:2rem;color:var(--gris);letter-spacing:.22em;font-size:.7rem;text-transform:uppercase;}

  footer{text-align:center;padding:2.2rem;color:var(--gris);font-size:.68rem;letter-spacing:.14em;border-top:1px solid var(--gris-clair);}

  /* ---------- RESPONSIVE ---------- */
  @media (max-width:860px){
    .nav-links{
      position:fixed;top:0;right:0;height:100svh;width:72%;max-width:320px;
      background:var(--ivoire);border-left:1px solid var(--gris-clair);flex-direction:column;justify-content:center;gap:2rem;
      padding:2rem;transform:translateX(100%);transition:transform .4s ease;
      box-shadow:-4px 0 24px rgba(0,0,0,.08);
    }
    .nav-links.open{transform:translateX(0);}
    .nav-links a{color:var(--charbon);opacity:.85;}
    .nav-links a::after{background:var(--or);}
    .burger{display:flex;z-index:110;}
    .metier-grid{grid-template-columns:1fr;}
    .cards-grid{grid-template-columns:repeat(2,1fr);}
    .tab-panel.active{grid-template-columns:1fr;}
    .chiffres-grid{grid-template-columns:1fr;gap:2.4rem;}
    .step{grid-template-columns:50px 1fr 20px;}
    .step-detail-inner{grid-template-columns:1fr;}
  }
  @media (max-width:520px){
    .cards-grid{grid-template-columns:1fr;}
    .quiz-box{padding:2rem 1.4rem;}
  }
  @media (prefers-reduced-motion: reduce){
    *{animation-duration:.001s !important;transition-duration:.001s !important;}
    .maisons-inner{animation:none;}
  }
</style>
</head>
<body>

<nav id="nav">
  <div class="brand">Vente&nbsp;·&nbsp;Luxe</div>
  <ul class="nav-links" id="navLinks">
    <li><a href="#hero">Accueil</a></li>
    <li><a href="#metier">Le métier</a></li>
    <li><a href="#etudes">Études</a></li>
    <li><a href="#parcours">Parcours</a></li>
    <li><a href="#quotidien">Quotidien</a></li>
    <li><a href="#quiz">Quiz</a></li>
    <li><a href="#chiffres">Chiffres</a></li>
  </ul>
  <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
</nav>

<!-- HERO -->
<section class="hero" id="hero">
  <span class="eyebrow">Exposé oral</span>
  <h1>L'art de la vente<br><em>de luxe</em></h1>
  <p class="sub">Quand le commerce devient un art de vivre, et le client, un invité.</p>
  <div class="scrollcue"><span>Défiler</span><span class="line"></span></div>
</section>

<!-- LE METIER -->
<section id="metier">
  <div class="metier-grid">
    <div class="metier-visual"><span class="cd">V·L</span></div>
    <div class="metier-text">
      <span class="eyebrow">Le métier</span>
      <h2 style="font-size:1.9rem;margin-bottom:1.4rem;">Vendre le luxe, ce n'est pas vendre</h2>
      <p>Dans une boutique de luxe, le <strong>conseiller ou la conseillère de vente</strong> n'écoule pas un produit : il transmet une histoire, un savoir-faire, une maison. Chaque geste — l'accueil, la présentation d'un sac, l'écrin qui se referme — fait partie d'un rituel appelé la <strong>cérémonie de vente</strong>.</p>
      <p>Le métier mêle <strong>expertise produit</strong> (matières, ateliers, collections), <strong>sens relationnel</strong> et une exigence esthétique constante, de la tenue à la posture.</p>
      <p>Ce métier se pratique en boutique (vendeur-conseil), mais aussi en corner de grand magasin, en joaillerie-horlogerie, dans le duty free ou depuis peu en conseil digital pour l'e-commerce de luxe.</p>
    </div>
  </div>
</section>

<!-- CITATION -->
<div class="quote-band">
  <p>« Le luxe ne se vend pas, il se raconte. »</p>
</div>

<!-- ETUDES -->
<section id="etudes">
  <div class="section-head">
    <span class="eyebrow">Se former</span>
    <h2>Les études pour accéder au métier</h2>
    <p>Du premier diplôme à la spécialisation luxe, quatre niveaux de formation mènent à ce métier. Cliquez pour ouvrir chaque niveau.</p>
  </div>
  <div class="steps-group" id="etudesWrap">
    <div class="step" data-step="1">
      <span class="num">01</span>
      <div class="title-row"><h3>CAP / Bac Pro Vente</h3><span>Dès 16-18 ans, premier niveau de qualification</span></div>
      <span class="chevron">+</span>
      <div class="step-detail"><div class="step-detail-inner">
        <div><span class="label">Diplômes courants</span><p>CAP Équipier Polyvalent du Commerce, Bac Pro Métiers du Commerce et de la Vente (MCV).</p></div>
        <div><span class="label">Ce qu'on y apprend</span><p>Bases de la relation client, techniques de vente, tenue de caisse et premiers stages en boutique.</p></div>
      </div></div>
    </div>
    <div class="step" data-step="2">
      <span class="num">02</span>
      <div class="title-row"><h3>BTS / Bachelor</h3><span>Bac+2 à Bac+3, très recherché par les maisons</span></div>
      <span class="chevron">+</span>
      <div class="step-detail"><div class="step-detail-inner">
        <div><span class="label">Diplômes courants</span><p>BTS MCO (Management Commercial Opérationnel), BTS NDRC (Négociation et Digitalisation de la Relation Client), Bachelor Commerce/Mode/Luxe en école privée.</p></div>
        <div><span class="label">Ce qu'on y apprend</span><p>Merchandising, animation d'équipe, stratégie commerciale ; souvent suivi en alternance directement en boutique.</p></div>
      </div></div>
    </div>
    <div class="step" data-step="3">
      <span class="num">03</span>
      <div class="title-row"><h3>Master / MBA spécialisé luxe</h3><span>Bac+5, pour évoluer vers l'encadrement</span></div>
      <span class="chevron">+</span>
      <div class="step-detail"><div class="step-detail-inner">
        <div><span class="label">Diplômes courants</span><p>Master Management du Luxe, MBA International Luxury Brand Management, cursus proposés par des écoles spécialisées mode/luxe.</p></div>
        <div><span class="label">Ce qu'on y apprend</span><p>Stratégie de marque, retail international, marketing du luxe — pour viser des postes de responsable ou de direction.</p></div>
      </div></div>
    </div>
    <div class="step" data-step="4">
      <span class="num">04</span>
      <div class="title-row"><h3>Formation interne de la maison</h3><span>Tout au long de la carrière</span></div>
      <span class="chevron">+</span>
      <div class="step-detail"><div class="step-detail-inner">
        <div><span class="label">Ce que proposent les maisons</span><p>Académies internes, parcours d'intégration, compagnonnage avec des vendeurs expérimentés.</p></div>
        <div><span class="label">Ce qu'on y apprend</span><p>Histoire et codes de la maison, savoir-faire des ateliers, protocole précis de la cérémonie de vente propre à la marque.</p></div>
      </div></div>
    </div>
  </div>
</section>

<!-- PARCOURS -->
<section id="parcours">
  <div class="section-head">
    <span class="eyebrow">Évolution</span>
    <h2>Le parcours en boutique</h2>
    <p>Quatre étapes réelles d'une progression en maison de luxe, une fois en poste.</p>
  </div>
  <div class="steps-group" id="parcoursWrap">
    <div class="step" data-step="1">
      <span class="num">01</span>
      <div class="title-row"><h3>Vendeur(se) conseil</h3><span>Premier poste en boutique</span></div>
      <span class="chevron">+</span>
      <div class="step-detail"><div class="step-detail-inner">
        <div><span class="label">Missions</span><p>Accueil, découverte du client, présentation des produits, encaissement.</p></div>
        <div><span class="label">Rémunération indicative</span><p>Autour du SMIC en début de carrière, primes sur objectifs possibles ; varie selon la maison et la ville.</p></div>
      </div></div>
    </div>
    <div class="step" data-step="2">
      <span class="num">02</span>
      <div class="title-row"><h3>Conseiller(ère) de vente / Expert produit</h3><span>1 à 3 ans d'expérience</span></div>
      <span class="chevron">+</span>
      <div class="step-detail"><div class="step-detail-inner">
        <div><span class="label">Missions</span><p>Fidélisation d'une clientèle, maîtrise fine des collections, ventes à forte valeur.</p></div>
        <div><span class="label">Compétences clés</span><p>Langues étrangères, culture de la maison, mémoire des habitudes clients.</p></div>
      </div></div>
    </div>
    <div class="step" data-step="3">
      <span class="num">03</span>
      <div class="title-row"><h3>Responsable des ventes</h3><span>Encadrement d'équipe</span></div>
      <span class="chevron">+</span>
      <div class="step-detail"><div class="step-detail-inner">
        <div><span class="label">Missions</span><p>Animation de l'équipe, objectifs commerciaux, formation des nouveaux vendeurs.</p></div>
        <div><span class="label">Compétences clés</span><p>Leadership, analyse des indicateurs de vente, gestion des plannings.</p></div>
      </div></div>
    </div>
    <div class="step" data-step="4">
      <span class="num">04</span>
      <div class="title-row"><h3>Directeur(rice) de boutique</h3><span>Gestion globale du point de vente</span></div>
      <span class="chevron">+</span>
      <div class="step-detail"><div class="step-detail-inner">
        <div><span class="label">Missions</span><p>Stratégie commerciale locale, relation avec le siège, image de la maison.</p></div>
        <div><span class="label">Compétences clés</span><p>Vision business, gestion budgétaire, ambassadeur(rice) de la marque.</p></div>
      </div></div>
    </div>
  </div>
</section>

<!-- QUALITES -->
<section id="qualites">
  <div class="section-head">
    <span class="eyebrow">Savoir-être</span>
    <h2>Les qualités essentielles</h2>
    <p>Retournez chaque carte pour découvrir pourquoi elle compte.</p>
  </div>
  <div class="cards-grid">
    <div class="flip-card"><div class="flip-inner">
      <div class="flip-front"><span class="qnum">i</span><h3>Élégance</h3></div>
      <div class="flip-back">La tenue et la posture reflètent l'image de la maison à chaque instant.</div>
    </div></div>
    <div class="flip-card"><div class="flip-inner">
      <div class="flip-front"><span class="qnum">ii</span><h3>Écoute</h3></div>
      <div class="flip-back">Comprendre un besoin souvent non formulé, avant même de proposer un produit.</div>
    </div></div>
    <div class="flip-card"><div class="flip-inner">
      <div class="flip-front"><span class="qnum">iii</span><h3>Expertise</h3></div>
      <div class="flip-back">Connaître les matières, les ateliers et l'histoire de chaque collection.</div>
    </div></div>
    <div class="flip-card"><div class="flip-inner">
      <div class="flip-front"><span class="qnum">iv</span><h3>Discrétion</h3></div>
      <div class="flip-back">Une clientèle exigeante qui attend confidentialité et retenue.</div>
    </div></div>
    <div class="flip-card"><div class="flip-inner">
      <div class="flip-front"><span class="qnum">v</span><h3>Sens du service</h3></div>
      <div class="flip-back">Anticiper, personnaliser, faire vivre une expérience mémorable.</div>
    </div></div>
    <div class="flip-card"><div class="flip-inner">
      <div class="flip-front"><span class="qnum">vi</span><h3>Endurance</h3></div>
      <div class="flip-back">Longues stations debout, forte affluence en période de fêtes, calme sous pression.</div>
    </div></div>
  </div>
</section>

<!-- OU EXERCER -->
<section id="exercer">
  <div class="section-head">
    <span class="eyebrow">Débouchés</span>
    <h2>Où exercer ce métier</h2>
    <p>Le même savoir-être s'exprime dans des univers très différents.</p>
  </div>
  <div class="cards-grid">
    <div class="flip-card"><div class="flip-inner">
      <div class="flip-front"><span class="qnum">i</span><h3>Couture & maroquinerie</h3></div>
      <div class="flip-back">Boutiques en nom propre des grandes maisons, souvent les postes les plus recherchés.</div>
    </div></div>
    <div class="flip-card"><div class="flip-inner">
      <div class="flip-front"><span class="qnum">ii</span><h3>Joaillerie & horlogerie</h3></div>
      <div class="flip-back">Univers très technique, ventes plus rares mais à très forte valeur.</div>
    </div></div>
    <div class="flip-card"><div class="flip-inner">
      <div class="flip-front"><span class="qnum">iii</span><h3>Grands magasins</h3></div>
      <div class="flip-back">Corners multi-marques, bon tremplin pour découvrir plusieurs maisons.</div>
    </div></div>
    <div class="flip-card"><div class="flip-inner">
      <div class="flip-front"><span class="qnum">iv</span><h3>Duty free & travel retail</h3></div>
      <div class="flip-back">Boutiques d'aéroport, clientèle internationale, rythme intense.</div>
    </div></div>
    <div class="flip-card"><div class="flip-inner">
      <div class="flip-front"><span class="qnum">v</span><h3>E-commerce & digital</h3></div>
      <div class="flip-back">Conseil client à distance, live-shopping, click & collect en plein essor.</div>
    </div></div>
    <div class="flip-card"><div class="flip-inner">
      <div class="flip-front"><span class="qnum">vi</span><h3>Ventes privées</h3></div>
      <div class="flip-back">Événements confidentiels réservés à une clientèle VIP, sur invitation.</div>
    </div></div>
  </div>
</section>

<!-- QUOTIDIEN -->
<section id="quotidien">
  <div class="section-head">
    <span class="eyebrow">Une journée type</span>
    <h2>Le quotidien en boutique</h2>
    <p>Choisissez un moment de la journée pour en découvrir le détail.</p>
  </div>
  <div class="tabs-bar" id="quotidienBar">
    <button class="tab-btn active" data-tab="1">Ouverture</button>
    <button class="tab-btn" data-tab="2">Accueil client</button>
    <button class="tab-btn" data-tab="3">Conseil & vente</button>
    <button class="tab-btn" data-tab="4">Fidélisation</button>
    <button class="tab-btn" data-tab="5">Fermeture</button>
  </div>
  <div id="quotidienPanels">
    <div class="tab-panel active" data-panel="1"><div class="time">09h</div><p>Mise en place de la boutique : vitrines, présentoirs, comptage de caisse. Rien n'est laissé au hasard avant l'arrivée du premier client.</p></div>
    <div class="tab-panel" data-panel="2"><div class="time">10h30</div><p>Premier contact : sourire, formule d'accueil de la maison, prise de température du besoin sans jamais brusquer le client.</p></div>
    <div class="tab-panel" data-panel="3"><div class="time">14h</div><p>Présentation d'une pièce, mise en récit de sa fabrication, essayage. La vente se construit comme une conversation, pas comme un argumentaire.</p></div>
    <div class="tab-panel" data-panel="4"><div class="time">17h</div><p>Suivi personnalisé via le carnet client : appel pour une nouvelle collection, invitation à un événement privé de la maison.</p></div>
    <div class="tab-panel" data-panel="5"><div class="time">19h30</div><p>Bilan des ventes du jour, reporting au responsable, remise en ordre pour accueillir la journée suivante.</p></div>
  </div>
</section>

<!-- AVANTAGES / CONTRAINTES -->
<section id="avantages">
  <div class="section-head">
    <span class="eyebrow">À double tranchant</span>
    <h2>Avantages et contraintes du métier</h2>
    <p>Un métier aussi valorisant qu'exigeant physiquement et émotionnellement.</p>
  </div>
  <div class="tabs-bar" id="avantagesBar">
    <button class="tab-btn active" data-tab="1">Les avantages</button>
    <button class="tab-btn" data-tab="2">Les contraintes</button>
  </div>
  <div id="avantagesPanels">
    <div class="pros-cons-panel active" data-panel="1">
      <ul>
        <li>Formation prestigieuse et continue, assurée par la maison elle-même</li>
        <li>Contact quotidien avec des matières et savoir-faire d'exception</li>
        <li>Perspectives d'évolution rapides pour les profils motivés</li>
        <li>Remises et avantages sur les collections de la maison</li>
        <li>Ambiance de travail soignée, clientèle internationale</li>
      </ul>
    </div>
    <div class="pros-cons-panel" data-panel="2">
      <ul>
        <li>Station debout prolongée, plusieurs heures sans réelle pause</li>
        <li>Forte pression commerciale pendant les fêtes et les soldes</li>
        <li>Objectifs de vente individuels à atteindre chaque mois</li>
        <li>Horaires incluant week-ends, soirées et jours fériés</li>
        <li>Exigence esthétique et disponibilité émotionnelle constantes</li>
      </ul>
    </div>
  </div>
</section>

<!-- VOCABULAIRE -->
<section id="vocabulaire">
  <div class="section-head">
    <span class="eyebrow">Pour briller à l'oral</span>
    <h2>Le vocabulaire du métier</h2>
    <p>Six termes à connaître, à glisser dans votre présentation.</p>
  </div>
  <div class="glossaire">
    <details>
      <summary>Cérémonie de vente</summary>
      <p>Rituel codifié d'accueil, de présentation et de remise du produit, propre à chaque maison de luxe.</p>
    </details>
    <details>
      <summary>Carnet client</summary>
      <p>Fichier recensant les préférences, les tailles et l'historique d'achat de chaque client fidèle.</p>
    </details>
    <details>
      <summary>Vente additionnelle</summary>
      <p>Proposer un article complémentaire à l'achat principal, sans jamais forcer la main du client.</p>
    </details>
    <details>
      <summary>Univers de marque</summary>
      <p>Ensemble des codes esthétiques, sonores et symboliques propres à une maison, à respecter en toute occasion.</p>
    </details>
    <details>
      <summary>Client VIC (Very Important Client)</summary>
      <p>Clientèle à très fort pouvoir d'achat, bénéficiant d'un traitement dédié et souvent d'un conseiller attitré.</p>
    </details>
    <details>
      <summary>Merchandising</summary>
      <p>Mise en scène des produits en vitrine et en boutique pour créer une envie d'achat immédiate.</p>
    </details>
  </div>
</section>

<!-- QUIZ -->
<section id="quiz">
  <div class="section-head">
    <span class="eyebrow">Interactif</span>
    <h2>Avez-vous l'étoffe d'un vendeur de luxe ?</h2>
    <p>Un petit test pour animer votre oral — répondez en quelques clics.</p>
  </div>
  <div class="quiz-box" id="quizBox">
    <div class="quiz-progress" id="quizProgress"></div>
    <div class="quiz-question" id="quizQuestion"></div>
    <div class="quiz-result" id="quizResult">
      <div class="seal">Maison<br>Certifié</div>
      <h3 id="resultTitle"></h3>
      <p id="resultText"></p>
      <button class="quiz-restart" id="quizRestart">Recommencer</button>
    </div>
  </div>
</section>

<!-- CHIFFRES -->
<section class="chiffres" id="chiffres">
  <div class="section-head">
    <span class="eyebrow">Repères</span>
    <h2>Le luxe en quelques chiffres</h2>
    <p>Des ordres de grandeur utiles pour situer le secteur à l'oral.</p>
  </div>
  <div class="chiffres-grid">
    <div class="chiffre"><div class="num" data-target="80">0</div><div class="lbl">% du chiffre d'affaires réalisé en boutique physique dans le luxe</div></div>
    <div class="chiffre"><div class="num" data-target="70">0</div><div class="lbl">% des clients fidélisés grâce à la relation avec un conseiller</div></div>
    <div class="chiffre"><div class="num" data-target="15">0</div><div class="lbl">langues parlées en moyenne dans une grande boutique parisienne</div></div>
  </div>
  <p class="chiffres-note">Chiffres présentés à titre pédagogique et illustratif — à vérifier auprès de sources récentes avant l'oral.</p>
</section>

<!-- MAISONS -->
<div class="maisons-track">
  <div class="maisons-inner" id="maisonsInner">
    <span>Dior</span><span>Chanel</span><span>Hermès</span><span>Louis Vuitton</span><span>Cartier</span><span>Yves Saint Laurent</span>
    <span>Dior</span><span>Chanel</span><span>Hermès</span><span>Louis Vuitton</span><span>Cartier</span><span>Yves Saint Laurent</span>
  </div>
</div>

<!-- CONCLUSION -->
<section class="conclusion" id="conclusion">
  <h2>« Le luxe ne se vend pas,<br>il se raconte. »</h2>
  <div class="hairline"></div>
  <div class="sign">Fin de l'exposé</div>
</section>

<footer>Site réalisé pour un exposé oral — métier de la vente de luxe</footer>

<script>
// NAV scroll state + active link
const navEl = document.getElementById('nav');
const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  navEl.classList.toggle('scrolled', window.scrollY > 40);
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) current = s.id; });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
});

// Burger menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
links.forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Accordion groups (études + parcours), scoped independently
document.querySelectorAll('.steps-group').forEach(group => {
  group.querySelectorAll('.step').forEach(step => {
    step.addEventListener('click', () => {
      const isOpen = step.classList.contains('open');
      group.querySelectorAll('.step').forEach(s => s.classList.remove('open'));
      if (!isOpen) step.classList.add('open');
    });
  });
});

// Flip cards
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => card.classList.toggle('flipped'));
});

// Generic tab initializer, scoped per bar/panel container pair
function initTabs(barId, panelsId, panelClass){
  const bar = document.getElementById(barId);
  const panelsWrap = document.getElementById(panelsId);
  const btns = bar.querySelectorAll('.tab-btn');
  const panels = panelsWrap.querySelectorAll('.' + panelClass);
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      panelsWrap.querySelector('.' + panelClass + '[data-panel="' + btn.dataset.tab + '"]').classList.add('active');
    });
  });
}
initTabs('quotidienBar', 'quotidienPanels', 'tab-panel');
initTabs('avantagesBar', 'avantagesPanels', 'pros-cons-panel');

// Counters
const counters = document.querySelectorAll('.chiffre .num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      let cur = 0;
      const step = Math.max(1, Math.round(target / 40));
      const timer = setInterval(() => {
        cur += step;
        if (cur >= target) { cur = target; clearInterval(timer); }
        el.textContent = cur;
      }, 30);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

// Quiz
const quizData = [
  { q: "Un client hésite longuement devant deux modèles. Vous...", options: [
      { t: "Le laissez réfléchir en silence, sans intervenir", s: 0 },
      { t: "Posez des questions pour comprendre son usage réel", s: 2 },
      { t: "Lui conseillez directement le plus cher", s: 0 },
      { t: "Lui racontez l'histoire de fabrication de chaque pièce", s: 2 } ] },
  { q: "Un client célèbre entre dans la boutique. Votre attitude ?", options: [
      { t: "Vous le traitez exactement comme les autres clients", s: 2 },
      { t: "Vous prévenez toute la boutique en chuchotant", s: 0 },
      { t: "Vous lui proposez un traitement discret et naturel", s: 2 },
      { t: "Vous demandez un selfie", s: 0 } ] },
  { q: "Votre rapport à la mode et aux matières ?", options: [
      { t: "Vous vous documentez régulièrement sur les collections", s: 2 },
      { t: "Cela ne vous intéresse pas particulièrement", s: 0 },
      { t: "Vous connaissez surtout les prix", s: 1 },
      { t: "Vous suivez les défilés et l'histoire des maisons", s: 2 } ] },
  { q: "Une journée de forte affluence, plusieurs clients attendent. Vous...", options: [
      { t: "Accélérez chaque échange au maximum", s: 0 },
      { t: "Restez calme, priorisez sans brusquer personne", s: 2 },
      { t: "Montrez votre stress pour qu'on vous aide", s: 0 },
      { t: "Déléguez mentalement l'attente à l'équipe", s: 1 } ] }
];
let quizIndex = 0;
let quizScore = 0;
const quizQuestion = document.getElementById('quizQuestion');
const quizResult = document.getElementById('quizResult');
const quizProgress = document.getElementById('quizProgress');

function renderProgress(){
  quizProgress.innerHTML = '';
  quizData.forEach((_, i) => {
    const span = document.createElement('span');
    if (i < quizIndex) span.classList.add('done');
    quizProgress.appendChild(span);
  });
}
function renderQuestion(){
  quizResult.classList.remove('show');
  quizQuestion.style.display = 'block';
  renderProgress();
  const item = quizData[quizIndex];
  quizQuestion.innerHTML = '<h3>' + item.q + '</h3><div class="quiz-options"></div>';
  const optWrap = quizQuestion.querySelector('.quiz-options');
  item.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt.t;
    btn.addEventListener('click', () => {
      quizScore += opt.s;
      quizIndex++;
      if (quizIndex < quizData.length) renderQuestion();
      else renderResult();
    });
    optWrap.appendChild(btn);
  });
}
function renderResult(){
  quizQuestion.style.display = 'none';
  quizProgress.innerHTML = '';
  quizData.forEach(() => {
    const span = document.createElement('span');
    span.classList.add('done');
    quizProgress.appendChild(span);
  });
  const max = quizData.length * 2;
  const pct = quizScore / max;
  let title, text;
  if (pct >= 0.75) {
    title = "L'étoffe d'une grande maison";
    text = "Écoute, calme et culture produit : les qualités attendues d'un conseiller de vente en maison de luxe semblent déjà présentes chez vous.";
  } else if (pct >= 0.4) {
    title = "Un bon potentiel à affiner";
    text = "Les bases sont là. Un peu plus d'écoute active et de culture des collections, et l'expérience client s'en trouvera transformée.";
  } else {
    title = "Le métier s'apprend, pas de panique";
    text = "La vente de luxe est avant tout un savoir-être qui se travaille : observation, formation et pratique en boutique font toute la différence.";
  }
  document.getElementById('resultTitle').textContent = title;
  document.getElementById('resultText').textContent = text;
  quizResult.classList.add('show');
}
document.getElementById('quizRestart').addEventListener('click', () => { quizIndex = 0; quizScore = 0; renderQuestion(); });
renderQuestion();
</script>
</body>
</html>
