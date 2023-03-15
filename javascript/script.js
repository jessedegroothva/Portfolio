// fetch('https://api.github.com/users/jessedegroothva')
//     .then(res => {
//         if(res.ok) res.json()})
//         .then(data => console.log(data))
//         .catch(err => console.log(err))


function fetchData(query) {
    let url = 'https://api.github.com/users/jessedegroothva';
    
    // hier wordt een variabele gemaakt die .skeleton selecteert
    // const skeletonWrapper = document.querySelector('.skeleton');
    // fetch is een methode die de data van de api ophaalt
    fetch(url)
    // .then is een methode die de data van de api omzet naar json
    .then(response => {
        return response.json();
    })
    // .then is een methode die de data van de api in een variabele stopt
    .then(data => {
        // activateSearch(data); is een functie die de zoekfunctie activeert
        // activateSearch(data)
        //populateList(data.artObjects); is een functie die de data in de html zet
        // populateList(data.artObjects);
        // hier wordt de skeleton class uit de html gehaald
        // skeletonWrapper.style.display = 'none';
    })
    // .catch is een methode die een error in de console logt als de data niet geladen kan worden
    .catch(error => {
        // hier wordt een error message in de html gezet met een h1
        const errorMessage = document.createElement('h1');
        errorMessage.textContent = 'Oeps er is een probleem met het laden van de Rijksmuseum app. Probeer het nog een keer.';
        // appendChild zorgt ervoor dat de error message in de html wordt gezet
        document.body.appendChild(errorMessage);
        console.error('Error:', error);
        // skeletonWrapper.style.display = 'none';
    });
    }