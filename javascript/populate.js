export function populateArt(data) {
    console.log(data)
    const bodyContainer = document.querySelector('.body');
    bodyContainer.innerHTML = ``;

    for (let i = 0; i < data.length; i++) {
        bodyContainer.innerHTML += `
        <div class="left">
        <img src="https://via.placeholder.com/500x500" alt="Image"><!-- <img src="${data[i].owner.avatar_url}" alt="Avatar"> -->
            <article>
                <div>
                <h3>${data[i].name}</h3>
                <p>Lorem ipsum dolor sit</p>
                </div>
                <p>${data[i].topics}</p>
            </article>
        </div>

        <div class="right">
        <div>
            <h3>${data[i].name}</h3>
            <p>html</p>
            <p>css</p>
            <p>javascript</p>
        </div>
        
            <p>${data[i].description}</p>
        </div>
    `
    }
}


export function overMij() {
    const bodyContainer = document.querySelector('body');
    bodyContainer.innerHTML = ``;
    bodyContainer.insertAdjacentHTML('beforeend', `
    <nav class="navbar">
      <a href="#" class="navbar__logo">Logo</a>
      <input type="checkbox" class="navbar__menu-toggle">
      <ul class="navbar__list">
        <li class="navbar__item"><a href="./index.html">Home</a></li>
        <li class="navbar__item"><a href="mailto:jesse.de.groot4@hva.nl" class="navbar__button">Neem contact op</a></li>
      </ul>
    </nav>

    <main>
        <div class="container">
            
            <h3>Dit is mijn reis van grafisch ontwerper naar UX/UI designer en ondernemer uit Purmerend, Noord-Holland.</h3>
            
            <img src="https://framerusercontent.com/images/NGvo27Iq7kNI4qjFt2rMxDDf1Q.jpg" alt="Profile picture">
            
                <p>Vanaf jonge leeftijd was ik geobsedeerd door Messi en droomde ik ervan om net zo'n getalenteerde voetballer te worden als hij. Ik werkte hard aan mijn vaardigheden. Helaas werd deze ambitieuze droom al snel verstoord toen ik werd ingedeeld in het F9-team van mijn voetbalclub.</p>
                <p>Vanaf mijn vijfde levensjaar heb ik altijd al een passie gehad voor creativiteit. Toen ik op zeventienjarige leeftijd op het MBO zat, werd ik geïntroduceerd in media vormgeving en kreeg ik de kans om logo's te maken voor de Erasmus Universiteit. Deze ervaring was voor mij een eye-opener en ik begon al snel aan een ontwikkelingspad in design.</p>
                <p>Gedurende de afgelopen jaren heb ik stage gelopen bij Therapieland, Kubik en MIAX, waar ik het vertrouwen kreeg om met Fortune 500-bedrijven samen te werken. Niet slecht voor iemand die gewoon wat rondneust op het web!</p>
                <p>Als grafisch ontwerper en iemand die altijd op zoek is naar oplossingen, wilde ik mijn vaardigheden uitbreiden. Tussen 2018 en 2022 kreeg ik de kans om als stagair te werken als grafisch ontwerper voor enkele van 's werelds meest vooraanstaande bedrijven, waaronder Rituals, Philips, Lego, Shell en DSM. Hoewel ik dankbaar ben voor deze kansen, begon ik te beseffen dat mijn passie vooral ligt bij UX/UI-ontwerp.</p>
                <p>Het hoogtepunt van mijn carrière tot nu toe is het werken aan het ontwerp van meer dan 20 bedrijven. Deze ervaring heeft mij voorzien van onmisbare strategieën en heeft mij gevormd tot de groei-gedreven ontwerper en ondernemer die ik vandaag de dag ben.</p>
            
            <div class="values-container">
              <div class="value">
                <p class="value-heading">Normen en waarden</p>
                <p class="value-text">Over de jaren heb ik mijn geloven aangepast tot het beste eindresultaat</p>
              </div>
              <div class="value">
                <p class="value-heading">1% beter elke dag</p>
                <p class="value-text">Dat is 37,78x beter elk jaar</p>
              </div>
              <div class="value">
                <p class="value-heading">Data geïnformeerd</p>
                <p class="value-text">Ik gebruik data en statistieken om betere beslissingen te nemen</p>
              </div>
              <div class="value">
                <p class="value-heading">Van fouten kan je leren</p>
                <p class="value-text">Baby stapjes</p>
              </div>
              <div class="value">
                <p class="value-heading">Vier de overwinningen</p>
                <p class="value-text">Geniet van de reis</p>
              </div>
              <div class="value">
                <p class="value-heading">Klant is koning</p>
                <p class="value-text">Los problemen op</p>
              </div>
            </div>
          </div>

    <footer>
        <div class="footer-row">
          <h3>Navigatie</h3>
          <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./overmij.html">Over mij</a></li>
          </ul>
        </div>
        <div class="footer-row">
          <h3>Social media</h3>
          <ul>
            <li><a href="https://www.linkedin.com/in/2000-jesse-de-groot/">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/another_graphic/">Instagram</a></li>
            <li><a href="https://twitter.com/CEO_OF_FEBO">Twitter</a></li>
          </ul>
        </div>
        <div class="footer-row">
          <h2>Werk samen</h2>
          <p>Laten we samenwerken! Samen onze portfolio’s verbeteren? Nieuwe ervaringen opdoen? Op avontuur? Ik sta open voor alles.</p>
          <a href="mailto:jesse.de.groot4@hva.nl" class="button">Neem contact op</a>
        </div>
    </footer>

    <script src="./javascript/script.js"></script>
    `);
}

// export function populateArt(data) {
//     console.log(data)
//     // console.log(home);
//     const bodyContainer = document.querySelector('.body');
//     main.id = "overmij";
//     bodyContainer.innerHTML += `
//         <div class="left">
//         <img src="https://via.placeholder.com/500x500" alt="Image"><!-- <img src="${data[i].owner.avatar_url}" alt="Avatar"> -->
//             <article>
//                 <div>
//                 <h3>${data[i].name}</h3>
//                 <p>Lorem ipsum dolor sit</p>
//                 </div>
//                 <p>${data[i].topics}</p>
//             </article>
//         </div>

//         <div class="right">
//         <div>
//             <h3>Titel</h3>
//             <p>html</p>
//             <p>css</p>
//             <p>javascripta</p>
//         </div>
        
//             <p>${data[i].description}</p>
//         </div>
//     `;
  
//   }