console.log("Hell js")

//Создание переменных
let dog = "Sharik";
dog = "Tuzik";
dog = "12";

const cat = "Barsik"

// Примитивные типы данных
// 1 String
let str1 = "Можно в двойных и одинарных кавычках"

let str3 = "12" //Это тоже строка

let str4 = str1 + " " + str3;
console.log(str4);
console.log(str4.toUpperCase())

// 2 Number
let num1=9;
let num2=9.6

//3 bigInt
let num3=1239n

// 4 Boolean
let isDrunk = true;
// Условная конструкция
if(isDrunk){
    console.log("Ты пьян")
}
const result = isDrunk ? "Ты пьян":"Ты не пьян";

// 5 undefined . не назначено значение
let str5
console.log(str5);

// 6 null - отсутствие значения
// Можно присвоить вручную
let empty = null;
console.log(empty);

// 7 symbol
let s1 = Symbol("что.то")
console.log(s1)


// Преобразование типов
// Преобразование в строку явное и неявное
// неявное преобразование
let str7=""+9 //"9"
console.log(typeof str7)
//Явное преобразование

const num4 = 10;
let str8 = String(num4)//"10"

// Beispiel
const res = 9 + 12 + "5"; //"215"
const res2 = "5" + 9 + 12 // "5912"


//Преобразование в число неявное
const num5 = +"6"// 6
const sum = +"9" + +"10"
console.log(sum);

// Явное преобразование в число
const num6 = Number("117") // 117
const num7 = Number("129*#") // NaN - not a number  появлеуться при неуданом преобразовании или вычислении.
console.log(num7);

// Преобразование в Булевое значение
//число в булевое
const res4 = Boolean(9) //TRue
const res5 = Boolean(0) // False
const test5 = Boolean(-1) // TRue

// Строка в булевое
const res6 = Boolean("");//False
const res7 = Boolean(" ")// TRue
console.log(res6);
const res8 = Boolean(null) //False
const res9 = Boolean(undefined) //False

//Равенство строгое и нестрогое
// = - присвоение значения
// == - нестрогое равенство
// === - строгое равенство
console.log( 9 === "9") // False
console.log( 9 == "9") // true число преобразуеться в строку

console.log(true=="") //false
console.log(true=="1") //true