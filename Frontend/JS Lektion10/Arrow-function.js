//Arrow function

//simple function
function sum(a,b){
    return a+b;
}
console.log(sum(20,10));//30

//Arrow function
const sum2 = (a,b)=>{
    return a+b;
}
console.log(sum2(20,10));



const sum3 =(a,b)=>a+b;
const res = sum3(10,20)
console.log(res);


function calculate(a,b, operation){
    return operation(a,b)
}

function subtract(a,b){
    return a-b
}

calculate(9,3, subtract)//6 

calculate(9,3,(a,b)=>a/b);
console.log(calculate(9,3, subtract));
console.log(calculate(9,3,(a,b)=>a/b));

// Создать метод universalGreeting, этот метод будет приветствовать на рахных языках
// Пусть метод принимает в качестве параметров 
// -имя
// - функция приветствия

// Напишите две функции приветствия
// - одна пусть приветствует  на английском englishGreeting: "Hello, name " 
// вторая пусть будет на японском japaneseGreeting: "Konnichiwa, name " 

//Вызовите метод universalGreeting


//Способ GPT
class Greetings {
    constructor() {
    }

    englishGreeting(name) {
        return "Hello, " + name;
    }
    japaneseGreeting(name) {
        return "Konnichiwa, " + name;
    }
    universalGreeting(name, greetingFunction) {
        return greetingFunction(name);
    }
}
let greetings = new Greetings();

let englishMessage = greetings.universalGreeting("John", greetings.englishGreeting);
console.log(englishMessage);  

let japaneseMessage = greetings.universalGreeting("Taro", greetings.japaneseGreeting);
console.log(japaneseMessage);


//Способ учителя

function universalGreeting(name,greetingFunction){
    return greetingFunction (name);
}
function englishGreeting(name){
    return `Heello, ${name}`; //  шаблонная строка - бэктикс
}
const res2 = universalGreeting("John",englishGreeting);
console.log(res2);
const res3 = universalGreeting("Sayochi", (name =>`Konnichiwa, ${name}`) );
console.log(res3);




