function runProgram(){
    console.log('runProgram');
    const searchButton = document.querySelector("#search-button");
    searchButton.addEventListener ('click', showInformation);
    
}
async function showInformation(){
    console.log("should show info");
    const textboxThing = document.querySelector("#search-input");
    console.log(textboxThing)

    console.log('running getMemes');
    const memeURL = `https://api.imgflip.com/get_memes/`;
    const response = await fetch(memeURL);
    const memeData = await response.json();

    console.log(response);
    // console.log(memeData.data.memes);
    let memes = memeData.data.memes;
    const memesContainer = document.querySelector("#memesContainer")

let randomNumber = Math.floor(Math.random() * 100)
    let meme = memes [randomNumber]


    let newParagraph = document.createElement("p"); //<p>{meme.name}</p>
    newParagraph.textContent = meme.name
    memesContainer.appendChild(newParagraph);
    // <img src={meme.url} />
    let img = document.createElement("img");
    img.src = meme.url
    memesContainer.appendChild(img);

}





document.addEventListener('DOMContentLoaded', runProgram);