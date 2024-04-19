function getAgeOfUserByName(name){
    return new Promise(function(resolve,reject){
        if (name==="John"){
            setInterval(()=>{
                resolve(20)
            },3000)
        }else{
            setInterval(()=>{
                reject(new Error("Нет такого имени"))
            },3000)
        }
    })
}
getAgeOfUserByName('John')
.then((data)=>console.log(data))
.catch((e)=>console.log(e))


getAgeOfUserByName('Tom')
.then((data)=>console.log(data))
.catch((e)=>console.log(e))