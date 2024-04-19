function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("John")
        },1000)
    })
}
console.log(getName());
//Обработка Then
getName().then((data)=>{
    console.log(data);
})

//2Beispiel
async function f(){
    const response = await getName()  // с помощью await  мы можем раскрыть промис и обработать его
    console.log(response);
}

// Две одинаковые фкнции которые будут возвращать пятёрку
function getFive(){
    return new Promise(function(resolve,reject){
        resolve(5)
    })
}
console.log(getFive());

async function getFive1(){
    return 5
}
console.log(getFive1());