const fruits=["apple","orange","mango"];
const fruits2 = fruits;
fruits[0] = "banana";
console.log(fruits);
console.log(fruits2);

let str1 = "hello";
let str2 = str1;
str1 = "Goodbye"
console.log(str1);
console.log(str2);

const cars = ["BMV", "Mercedes","Audi"]
//spread
const carsCopy = [...cars]
carsCopy[0]="Opel"
console.log(cars);
console.log(carsCopy);


const cities1 = ["Berlin","Paris"];
const cities2 = ["London","Stuttgart"];
const joinedCities =[...cities1, ...cities2];
console.log(joinedCities);

const vegitables = ["cucumber","tomato"];
const newVegetables = [...vegitables, "carrot"]
console.log(newVegetables);

Task1
const num1 =[1,2,3];
const num2 = [4,5,6];
const num3 = [7,8,9];
const num4 = [...num1, ...num2, ...num3];
console.log(num4);

Task2
const number1= [1,2,3];
const number2= [...number1]
console.log(number1);
console.log(number2);

