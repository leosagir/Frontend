function getSeven(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(7)
        },4000)
    })
}
const promise = getSeven();
console.log(promise);