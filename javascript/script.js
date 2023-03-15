import { fetchData } from "./fetch.js";
import { overMij } from "./populate.js";

fetchData()
handleRoute()

function handleRoute(){
    routie({
        // startpagina
        '': () => {
            fetchData();
        },
        // haal data op van id uit fetchData
        // waarom heb je de id nodig? voor de laadtijd te verminderen?
        // een nieuwe pagina maken?

        // hier wordt de id uit de url gehaald
        'overmij': () => {
            // hier wordt de functie artData aangeroepen met de id uit de url die opgehaald wordt uit api.js
            overMij();
        }
    })
};