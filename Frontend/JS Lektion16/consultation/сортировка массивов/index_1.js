//Несортированный массив объектов
const people = [
    {name:"John", age:30, salary:50000},
    {name:"Alice",age:25,salary:80000},
    {name:"Bob",age:35,salary:40000},
    {name:"Alice",age:25,salary:60000},
    {name:"Alice",age:29,salary:30000}
]
//Используем метод sort() для сортировки с множественным сравнением
people.sort(function(a,b){
    //Сравниваем по имени(в алфавитном порядке)
    if(a.name<b.name) return -1
    if(a.name>b.name) return 1
    // метод sort() ожидает от функции сравнения, передаваемой в него,
// определённые значения.
// Возвращая -1, 0 или 1, мы указываем на отношение между двумя
// сравниваемыми элементами.
    // Если возвращается отрицательное число (-1), это означает,
    // что первый элемент должен быть расположен перед вторым в
    // отсортированном массиве. и наоборот 

   if (a.age<b.age) return -1
   if (a.age>b.age) return 1
   if (a.salary<b.salary) return -1
   if (a.salary>b.salary) return 1
})
console.log(people)