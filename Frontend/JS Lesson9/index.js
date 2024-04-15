// Beisoiel 1 - erstellen eines Objekts
const student= {
    age:22,
    name:"Vasilii"
}
console.log(student.age); //22
console.log(student.name); //Vasilii

/*Beispiel 2 - ein Schlüssel kann aus zwei Wörtern bestehen.
Wenn der Schlüssel Leerzeichen enthält,
muss er in Anführungszeichen gesetzt werden*/
const product ={
    title:"iPhone",
    price:2000,
    "model of phone":"XR"
}
console.log(product);
console.log(product.price);

/*Beispiel 3 - wenn Sie eine Änderung haben und wir den Wert
 aus den Objekt über diese Variable abrufen möchten*/
let key = "age";
console.log(student[key]);
key="name";
console.log(student[key]);

const client={
    firstname:"John",
    wife:"Maria"
};
const key1 = "wife";
//So erhalten Sie eine Variable aus einem Objekt
console.log(client.key1); //undefeined
console.log(client[key1]);//Maria

/*Beispiel 4 - Nehmen wir an, wir hatten
 eine Veränderung und wollen ein Objekt daraus machen */

const title ="Titanic";
const capacity = 1500;

const titanic={title,capacity}
console.log(titanic);

/*Beispiel 5 */

const name1 = "Avrora";
const cap=300
const avrora={title:name1,capacity:cap}
console.log(avrora);
console.log(titanic);

/*Beispiel 6 - In-Object-Methode*/
const dog={
nick:"Tuzik",
bark(){
    console.log("Gav,gav")
}
}
dog.bark()


/**Прототипное наследование.
  Один объект выступает как прототип для другого */

const bike = {
    brand: "Turist",
    drive(){
        console.log("br-br")
}
};
const mountineBike = {
    __proto__:bike,
    brand:"Stels",
    gears:20,
    price: 600
};
console.log(mountineBike);
console.log(mountineBike.drive());