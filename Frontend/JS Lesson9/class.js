//CLASS

class Animal{
    constructor(age,name,color){
        this.age = age;
        this.name = name;
        this.color = color;
    }
    info(){
        console.log(`Mein name ist ${this.name} Alt: ${this.age} Color: ${this.color}`);
    }
}
const panda = new Animal(14, "PO", "black");
panda.info();

//Erbschaft - Наследование
//класс птица
//добавим поле высота полёта heightOfFlight и рацион ration

class Bird extends Animal{
    constructor(age,name,color,heightOfFlight,ration){
        super(age,name,color);//передаёт поля из Animal in Bird
        this.heightOfFlight = heightOfFlight;
        this.ration = ration
    }
}
const colibri = new Bird(14, "PO","black",100,"nectar")
console.log(colibri);
colibri.info()