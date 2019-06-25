let hello = async  () => {
    console.log("chang xđ");
}

hello();

let add = (a,b) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a!= "number"|| typeof b!="number"){
                return reject( new Error("tham số truyền vào phải là số"));
            }
            return resolve(a+b);
        }, 1000);
    });
}

let add1 = async  () => {
    let result = add(4,5);
    console.log(result); //pending vi add chưa chạy xong 
}
add1()

let add2 = async  () => {
    let result = await add(4,5);
    console.log(result); //9 await sẽ chờ promise trả về nó sẽ chạy tiếp funcitn add2
}
add2()
