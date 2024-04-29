const people = [
    {name:"John", age:30, salary:50000},
    {name:"Alice",age:25,salary:80000},
    {name:"Bob",age:35,salary:40000},
    {name:"Alice",age:25,salary:60000},
    {name:"Alice",age:29,salary:30000}
]
//  Используем метод sort() для сортировки с множественным сравнением

people.sort(function(a,b){
    // Сравниваем по имени (в алфавитном порядке)
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    // метод sort() ожидает от функции сравнения, передаваемой в него,
    // определённые значения.
    // Возвращая -1, 0 или 1, мы указываем на отношение между двумя
    // сравниваемыми элементами.
    
        // Если возвращается отрицательное число (-1), это означает,
        // что первый элемент должен быть расположен перед вторым в
        // отсортированном массиве. и наоборот
    
         
        // Если имена равны, сравниваем по возрасту
    if (a.age< b.age) return -1
    if (a.age>b.age) return 1
    return a.salary - b.salary
    })
    // Вывод отсортированного массива
    console.log(people)
    
    
    //Функция сравнения: Мы передаем функцию сравнения в метод sort(),
    // которая определяет порядок сортировки. В этой функции мы сначала
    // сравниваем объекты по имени.
    // Если имена равны, мы сравниваем их по возрасту.
    // Если возрасты также равны, мы сравниваем их по зарплате.
    
    
    // "Alice" < "Bob", поэтому объект с именем "Alice" будет первым.
    // Если имена равны, сравнение по возрасту:
    // Если имена равны и возрасты равны, сравнение по зарплате:
    // У "Alice" зарплата 60000, у "Bob" - 40000. Поэтому "Alice" будет перед "Bob".

    // .sort() - сортирует элементы массива (как числа, так и строки),
// мутирует исходный массив (!)

const numbers = [33, 1, 7, 3, 56];
numbers.sort((a,b)=>b-a)
numbers.sort((a,b)=>a-b)
// console.log(numbers)

const names = ['Anna', 'Ivan', 'Anton', 'Pavel', 'petr', 'anna'];
names.sort((a,b)=>a.localeCompare(b))
// names.sort((a,b)=>b.localeCompare(a))
console.log(names)

const nums = [5, 32, 334, 25, 58, 85];
const nums_map = nums.map(el=>el).sort((a,b)=>a-b)
console.log(nums_map);


// .reduce() - возвращает аккумулирующее значение
let acc = 0;
for(let i = 0; i < nums.length; i++){
  acc += nums[i]
}
const sum = nums.reduce((acc, el) => acc + el, 0);

// spread-оператор - раскладывает массив на элементы
console.log(nums);// [5, 32, 334, 25, 58, 85]
console.log(...nums); // 5 32 334 25 58 85