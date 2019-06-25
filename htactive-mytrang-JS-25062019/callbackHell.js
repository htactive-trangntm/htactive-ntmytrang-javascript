let add =(a, b, callback)=>{
    setTimeout(() => {
        if(typeof a!= "number"|| typeof b!="number"){
            //return callback("đây ko phải là số thì sao mà cộng nhỉ");
            return callback(new Error("đây ko phải là số thì sao mà cộng nhỉ"))
        }
        return callback(undefined, a+b);
    }, 1000);
}

let multiply =(a, b, callback)=>{
    setTimeout(() => {
        if(typeof a!= "number"|| typeof b!="number"){
            //return callback("đây ko phải là số thì sao mà cộng nhỉ");
            return callback(new Error("đây ko phải là số thì sao mà nhân nhỉ"))
        }
        return callback(undefined, a*b);
    }, 1000);
}

let divide =(a, b, callback)=>{
    setTimeout(() => {
        if(typeof a!= "number"|| typeof b!="number"){
            //return callback("đây ko phải là số thì sao mà cộng nhỉ");
            return callback(new Error("đây ko phải là số thì sao mà chia nhỉ"))
        }
        if(b==0) return callback(new Error("làm sao chia cho 0 được"));
        return callback(undefined, a/b);
    }, 1000);
}



let areaHinhThang = (a,b,h,callback)=>{
    add(a,b,(err,result)=>{
        if(err) return callback(err);
        multiply(result,h,(err,result)=>{
            if(err) return callback(err);
            divide(result,2,(err,result)=>{
                if(err) return callback(err);
                    callback(undefined, result);
            });
        });
    });
}

areaHinhThang(2,3,"2",(err,result)=>{
    if(err) return console.log(err.toString());
    return console.log("the result is: ",result);
});

areaHinhThang(2,3,2,(err,result)=>{
    if(err) return console.log(err.toString());
    return console.log("the result is: ",result);
});
console.log("ahihi");