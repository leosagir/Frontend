const catFactsElements = document.getElementById("cat-facts")

//Функция обёртка
async function loadCatFact(){
    const response = await fetch("https://catfact.ninja/fact")
    const obj = await response.json();
    console.log(obj);
    const {fact, length} = obj
    catFactsElements.textContent=`${fact} ${length}`
}
loadCatFact()