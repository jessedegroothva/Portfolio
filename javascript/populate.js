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
            <h3>Titel</h3>
            <p>html</p>
            <p>css</p>
            <p>javascripta</p>
        </div>
        
            <p>${data[i].description}</p>
        </div>
    `
    }
}