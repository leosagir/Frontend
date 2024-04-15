const names = ["Семён", "Иван","Пётр","Татьяна"];
const ages = [12,27,74,34];

const namesAges = [];
for (let i = 0 ; i<names.length; i++){
    namesAges[i] = `${names[i]} ${ages[i]} лет`
}
console.log(namesAges);

const name= "Семён"
const age = 33
const text = `Меня зовут ${name} и мне ${age} года. Я изучаю язык JS`
console.log(text);

const reversed = [];
for ( let i = 0; i< namesAges.length; i++){
    reversed.unshift(namesAges[i]);
}
console.log(reversed);  //массив в обратном порядке
console.log(namesAges);     //исходный массив без изменений
