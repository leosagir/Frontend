const newJoke = document.getElementById("new-joke").addEventListener("click",loadJoke)
const valueJoke = document.getElementById("value")
const imageJoke = document.getElementById("joke-image")

async function loadJoke(){
    const res = await fetch("https://api.chucknorris.io/jokes/random")
    const obj = await res.json()
    console.log(obj);

    const {value}= obj

    valueJoke.textContent= value
    
}
loadJoke()
