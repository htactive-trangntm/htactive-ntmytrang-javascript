let fs = require("fs");
let a = new Promise(()=>{
    console.log("good mó ning");
});

let demoPromise = new Promise((resolve, reject)=>{
    //resolve("successfully"); 
    reject(new Error("không thể kết nối đến server")); // chỉ truyền
});

demoPromise.then((message)=>console.log("You have excuted ",message),
(errMessage)=>console.log(errMessage+''));


let add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a!= "number"|| typeof b!="number"){
                return reject( new Error("tham số truyền vào phải là số"));
            }
            return resolve(a+b);
        }, 2000);
    })  
}
add(6,"8").then(result=>console.log("The result is: ",result),
error=>console.log(error+""));


// dùng promise với trường hợp readfil


let fs = require("fs");
let promiseRead = new Promise((resolve,reject)=>{
    fs.readFile("a.txt","utf8",(err,data)=>{
        if(err) return reject(new Error("lỗi rồi"));
        return resolve(data);
    })
});

promiseRead.then(result=>console.log(result),
err=>console.log(err));