let i =0;
let interval=setInterval(() => {
    ++i;
    console.log(i);
    if(i===10){
        clearInterval(interval);
    }
}, 1000); 

//function count from 1 to 10, return promise
let countFrom = (a,b)=>{
    return new Promise((resolve, reject)=>{
        if(a>b) return reject(new Error("a have to bigger than b"));
        let result = setInterval(() => {
            console.log(a++);
            if(a>b){
                clearInterval(result); 
                resolve();
            }
        }, 1000);
    });
}

countFrom(1,10)
.then(res=>console.log("chang finnished"))
.catch(err=>console.log(err+""))