let add =(a, b, callback)=>{
    setTimeout(() => {
        if(typeof a!= "number"|| typeof b!="number"){
            //return callback("đây ko phải là số thì sao mà cộng nhỉ");
            return callback(new Error("đây ko phải là số thì sao mà cộng nhỉ"))
        }
        return callback(undefined, a+b);
    }, 1000);
}

add(5,6,(err, result)=>{
    if(err) return console.log("Lỗi nè: "+err);
    return console.log("the result is: "+ result);
});

console.log("ahihi");