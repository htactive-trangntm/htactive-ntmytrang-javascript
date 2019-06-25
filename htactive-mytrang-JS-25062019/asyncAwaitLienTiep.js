let add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a!= "number"|| typeof b!="number"){
                return reject( new Error("tham số truyền vào phải là số z sao cộng"));
            }
            return resolve(a+b);
        }, 1000);
    });
}

let multiply = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a!= "number"|| typeof b!="number"){
                return reject( new Error("tham số truyền vào phải là số z sao nhân"));
            }
            return resolve(a*b);
        }, 1000);
    });
}

let devide = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a!= "number"|| typeof b!="number"){
                return reject( new Error("tham số truyền vào phải là số z sao chia"));
            }
            if(b==0) return reject (new Error("b mà sao lại là số 0 hè, zạy sao chia"));
            return resolve(a/b);
        }, 1000);
    });
}


let dienTichHinhThang = async (a,b,h)=>{
    try {
        let ab = await add(a,b);
        let abh = await multiply(ab,h);
        let area = await devide(abh,2);
        console.log(area);
    } catch (error) {
        console.log(error+"");
    }
    
}

dienTichHinhThang(2,3,2);
dienTichHinhThang(2,"3",2);

//để tái sử dụng: callback function để handle kết quả trả về

let dienTichHinhThang1 = async (a,b,h,callback)=>{
    try {
        let ab = await add(a,b);
        let abh = await multiply(ab,h);
        let area = await devide(abh,2);
        callback(undefined,area)
    } catch (error) {
        callback(error);
    }
    
}

dienTichHinhThang1(2,3,2,(err,result)=>{
    if(err) return console.log(err+"");
    console.log(result);
});
dienTichHinhThang1(2,3,"2",(err,result)=>{
    if(err) return console.log(err+"");
    console.log(result);
});


//Async function trả về promise

let dienTichHinhThang2 = async (a,b,h)=>{
    try {
        let ab = await add(a,b);
        let abh = await multiply(ab,h);
        let area = await devide(abh,2);
        Promise.resolve(area);
    } catch (error) {
        Promise.reject(error);
    }
}

dienTichHinhThang2(2,3,2)
.then(res=>console.log(res))
.catch(err=>console.log(err));
