export function populateArt(data) {
    console.log(data)
    const bodyContainer = document.querySelector('.body');
    bodyContainer.innerHTML = ``;

    for (let i = 0; i < data.length; i++) {
        bodyContainer.innerHTML += `
        <div class="left">
        <img src="https://via.placeholder.com/500x500" alt="Image">
            <article>
                <div>
                <h3>${data[i].description}</h3>
                <p>Lorem ipsum dolor sit</p>
                </div>
                <p>Soort project</p>
            </article>
        </div>

        <div class="right">
        <div>
            <h3>Titel</h3>
            <p>html</p>
            <p>css</p>
            <p>javascripta</p>
        </div>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat varius arcu, ac efficitur eros iaculis eget. Pellentesque ullamcorper odio a eros imperdiet, at cursus purus vestibulum. Nam in consequat mi, eu maximus quam. Duis vitae nisi eu ipsum pellentesque finibus a ut erat. In hac habitasse platea dictumst.</p>
        </div>
    `
    }
}