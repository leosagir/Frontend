
const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];
// 1
const carsOhnePrice =cars.map(el=>({brand:el.brand, isDiesel:el.isDiesel}))
console.log(carsOhnePrice);

//2

const isDieselFilter = cars.filter(el => el.isDiesel === true)
console.log(isDieselFilter);

//3

const noDieselFilter = cars.filter(el => el.isDiesel === false)
console.log(noDieselFilter);

//4

let totalPrice = noDieselFilter.reduce((total, car)=>total + car.price, 0)
console.log(totalPrice);

//5

cars.forEach((cars)=>cars.price*=1.2);
console.log(cars);

//6

let Tesla = { brand: "Tesla", price: 25000, isDiesel: false }
for(let i=0; i<cars.length; i++){
    if(cars[i].isDiesel){
        cars[i] = Tesla
    }
}
console.log(cars);
