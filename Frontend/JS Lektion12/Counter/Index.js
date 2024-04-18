const plusBtnElement = document.getElementById("plus");
const minusBtnElement = document.getElementById("minus");
const counterElement = document.getElementById("counter");
const plus10BtnElement = document.getElementById("plus10");
const minus10BtnElement = document.getElementById("minus10");

let counter = 0;

const plusHandler = () =>{
    counter++
    counterElement.innerText=counter // увеличиваем значение счётчика на +1
    }
const minusHandler = ()=>{
    counterElement.innerText = --counter //уменьшаем значение счётчика на -1
    }
const plus10Handler = () =>{
    counter+=10
    counterElement.innerText=counter}
const minus10Handler = ()=>{
    counterElement.innerText = counter -= 10 //уменьшаем значение счётчика на -1
    }


    plusBtnElement.addEventListener("click",plusHandler);
    minusBtnElement.addEventListener("click",minusHandler);
    plus10BtnElement.addEventListener("click",plus10Handler);
    minus10BtnElement.addEventListener("click",minus10Handler);