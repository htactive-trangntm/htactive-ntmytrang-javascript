let add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a!= "number"|| typeof b!="number"){
                return reject( new Error("tham số truyền vào phải là số"));
            }
            return resolve(a+b);
        }, 1000);
    });
}

let multiply = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a!= "number"|| typeof b!="number"){
                return reject( new Error("tham số truyền vào phải là số"));
            }
            return resolve(a*b);
        }, 1000);
    });
}

let devide = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a!= "number"|| typeof b!="number"){
                return reject( new Error("tham số truyền vào phải là số"));
            }
            if(b==0) return reject (new Error("b mà sao lại là số 0 hè, zạy sao chia"));
            return resolve(a/b);
        }, 1000);
    });
}

let areaHinhThang =(a,b,h)=>{
    add(a,b)
    .then(res=>multiply(res,h))
    .then(result=>devide(result,2))
    .then(area=>console.log("Area is ",area))
    .catch(err=>console.log(err));
}

areaHinhThang(6,4,5);

//để tái sử dụng 

let areaHinhThang1 =(a,b,h)=>{
    return add(a,b)
    .then(res=>multiply(res,h))
    .then(result=>devide(result,2))
    
}

areaHinhThang1(6,4,"5")
.then(area=>console.log("Area is ",area))
.catch(err=>console.log(err+""));
