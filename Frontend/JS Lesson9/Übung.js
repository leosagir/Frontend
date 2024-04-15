// Создайте класс Alcohol с полями:
// - title
// - strength - крепость
// - volume - объекм бутылки
//  с методом info - выводт в консоль фразу
//  "Ни дня без <название алкоголя>" | "Надо и меру знать"
// Создайте производный класс Brendy
// - age - выдержка
// - country - страна производства
// Создайте производный класс Liquor
// - sugarAmount - количество сахара

class Alcohol {
    constructor(title, strength, volume){
    this.title = title;
    this.strength = strength;
    this.volume = volume;
    }
    info(){
    console.log(`Ни дня без ${this.title}`);
    }
}

class Brendy extends Alcohol {
    constructor(title, strength, volume, age, country){
    super(title, strength, volume);
    this.age = age;
    this.country = country;
    }
}

class Liquor extends Alcohol {
    constructor(title, strength, volume, sugarAmount){
    super(title, strength, volume);
    this.sugarAmount = sugarAmount;
    }
}

const carlos = new Brendy("Carlos I", 40, 0.7, 2, "Spain");
const bellis = new Liquor("Bellis", 18, 0.7, 3);

carlos.info();
bellis.info();




let car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    drive: function() {
      console.log('The ' + this.brand + ' ' + this.model + ' is now being driven.');
    }
  };
  
  // Вызов метода drive()
  car.drive();