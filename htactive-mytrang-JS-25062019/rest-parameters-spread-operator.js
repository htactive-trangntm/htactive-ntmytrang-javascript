//rest parameters: khai báo hàm với số lượng tham số không xác định

let inforList = (name, age, ...moreinfor)=>{
    console.log( `My name is ${name}`);
    console.log(`I am ${age} years old`);
    console.log(`hello everyone`);
    console.log(moreinfor);
};

inforList("trang",18,"PNV","Danang");
inforList("trang",18)

//spead operator


let middle = ["and", "beautiful"];
let someone = ["bad", "agressive",...middle, "dirty"]
console.log(someone)
