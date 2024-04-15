

class Plant{
    constructor(height,age,name){
        this.height = height;
        this.age = age;
        this.name = name;
    }
}

class Rose extends Plant{
    constructor(height,age,name,flowers,color,){
        super(height,age,name);
        this.flowers = flowers
        this.color =color
        
    }
    grow(){
        console.log("A "+this.name+ " at the age of "+this.age+" had"+this.flowers+this.color+" flowers and grew 10 centimeters to "+this.height+10+ " cm");
    }
}

let whiteRose = new Rose(100,3,"white Rose",5,"white",);
console.log(whiteRose);
whiteRose.grow();

