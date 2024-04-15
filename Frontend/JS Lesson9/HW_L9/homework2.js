class Plant {
    constructor(height, age, name) {
        this.height = height;
        this.age = age;
        this.name = name;
    }
    grow(){
        this.height+=10
    }
}

class Rose extends Plant {
    constructor(height, age, name, flowers, color) {
        super(height, age, name);
        this.flowers = flowers;
        this.color = color;
    }
}

let whiteRose = new Rose(100, 3, "white Rose", 5, "white");
whiteRose.grow();
console.log(whiteRose);
