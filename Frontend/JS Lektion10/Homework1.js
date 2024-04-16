/*Создайте стрелочную функцию, которая бы принимала массив и цифру,
возвращала бы элемент массива под этим индексом.*/

const myArray = [ 5, 10, 15, 20, 25];

const getElementByIndex = (arr,index)=>{
    return arr[index];
}
console.log(getElementByIndex(myArray,3));