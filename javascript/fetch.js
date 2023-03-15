import { populateArt } from "./populate.js"

export function fetchData(){
    fetch('https://api.github.com/users/jessedegroothva/repos')
    .then(res => res.json())
        .then(data => populateArt(data))  
};

