const brothers = [
    {race:"hobbit", height:110 ,age:45 , name: "Frodo Baggins"},
    {race:"human", height:185 ,age:46 , name: "Aragorn"},
    {race:"elf", height:189 ,age:110 , name: "Legolas"},
    {race:"dworf", height:140 ,age:150 , name: "Gimly"},
    {race:"human", height:195 ,age:200 , name: "Gandalf"},
]

/**Метод Мар . возвращает новый массив
 * созданный путём применеия функции к каждому элементу исходного массива
 * Этот метод не изменяет исходный массив
 */

//Beispiel 1
const names = brothers.map((element)=>element.name);
console.log(names);

/**Пример 2
 * 
 */
const ages = brothers.map((brothers)=>brothers.age);
console.log(ages);

//Beispiel 3

const racesNames = brothers.map((brothers)=>brothers.race+" "+brothers.name);
console.log(racesNames);

 //Пример 4
 // высокий - выше или равно 170
 // маленький - ниже 170
 // массив из слов [маленький, высокий,высокий, маленький,высокий]

const sizes = brothers.map((brothers)=>{
    if(brothers.height>=170){
        return "высокий";
    }
    return "маленький";
})
console.log(sizes);

const sizes2 = brothers.map((brother)=>brother.height >=170 ? "высокий":"маленький")
console.log(sizes2);

//Метод forEach для изменения исходного массива
//Пример  1 состарим всех на 1 год
brothers.forEach((brothers)=>brothers.age+=1);
console.log(brothers);

//Beispiel 2

brothers.forEach((brothers)=>brothers.name = brothers.name.toUpperCase());
console.log(brothers);

//Beispiel 3 Метод reduce
//с помощью цикла for
let sum = 0;
for (let i = 0; i<ages.length; i++){
    sum+= ages[i];
}
console.log(sum);

//reduce

const sum2 = ages.reduce((acc,current)=>acc+current,0);
// iteration -- acc -- current 
  // 1         -- 0   -- 45
  // 2         -- 45  -- 46
  // 3         -- 91  -- 110
  // 4         -- 201 -- 150
  // 5         -- 351 -- 200
  // Аккумулятор (accumulator) - значение,
  // которое накапливает результат применения функции.
 // Текущий элемент массива (currentValue).
 // Текущий индекс (currentIndex) элемента в массиве.
 // Сам массив (array), к которому применяется метод reduce.
 // Функция callback должна возвращать новое значение аккумулятора
 // после обработки текущего элемента.

 // initialValue (необязательный): Начальное значение аккумулятора.
 // Если это значение указано,
 //  то оно будет использовано в качестве начального значения аккумулятора
 // при первом вызове функции callback.
 // Если initialValue не указан, то первый элемент массива станет
 // начальным значением аккумулятора.
console.log(sum2);

//Beispiel map+reduce

const totalHeight = brothers.reduce((acc,brothers)=>acc+brothers.height,0);
console.log(totalHeight);
 //можно сделать цепочку
 const totalHeight2=brothers.map((brothers)=>brothers.height).reduce((acc,height)=>acc+height,0)
 console.log(totalHeight2);


//Хотим объединить все имена через пробелi
const nameStr = brothers
.map((brothers)=>brothers.name)
.reduce((acc,name)=>acc+" "+name)
console.log(nameStr);

// .trim - убирает пробелы

// Метод  split разделяет строку на массив

const str = "Frodo Baggins, Aragorn, Legolas, Gimly, Gandalf"
const namesArr = str.split(", ")
console.log(namesArr);

//Join
const newString = namesArr.join(",")
console.log(newString);

//find - возвращает первое совпадение с заданым условием
const person = brothers.find((brothers)=>brothers.race === "human")
console.log(person);

const person2 = brothers.find((brothers)=>brothers.name === "GIMLY")
console.log(person2);