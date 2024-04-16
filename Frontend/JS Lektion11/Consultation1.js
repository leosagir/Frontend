//1 Дан массив с числами юсформировать новый массив в который попадут все числа из исходного массива возведённые в третью степень
//my
const numbers = [4,6,1,17,9,15,27,43,7]
let cubedNumbers = numbers.map(num=>num**3);
console.log(cubedNumbers);

//1 .push
const numbers_pow0 = []
for( let i=0;i<numbers.length; i++){
    numbers_pow0.push(numbers[i]**3)
}
console.log(numbers_pow0);
//2 .map
const numbers_pow1=numbers.map(el=>el**3)
console.log(numbers_pow1);

//3 .forEach
const numbers_pow2 = [];
numbers.forEach(el=>numbers_pow2.push(el**3))
console.log(numbers_pow2);

////////////////////////////////////////////////////////
//Сформировать новый массив в который попадут все последние числа
//
const Last= numbers.map(num=>Math.abs(num)%10)
console.log(Last);

//2
const lastDigits= numbers.map(el=>el%10)
console.log(lastDigits);
///////////////////////////////////////////////////////
const strings = ['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure'];
// 3. Сформировать новый массив, в который попадут все элементы из исходного массива.
// Если длина элемента меньше
// 6 (<), то добавить к этой строке 1
const newStrings = strings.map(str=>{
    if (str.length<6){
        return str+"1"
    }
    else{
        return str;
    }
})
console.log(newStrings);

//2
const strings2 = strings.map(str=>str.length < 6 ? str + "1": str)
console.log(strings2);

////////////////////////////////////////////////////
//Функции взаимодействия с пользователем
alert("Вы на странице")
console.log(undefeined>5);
console.log(70<false);
console.log(1<=true);
console.log(1>=9);