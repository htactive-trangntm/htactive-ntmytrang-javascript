//object

//có 2 cách tạo đối tượng 

//let chang1 = new Object(); // "object constructor" syntax
//let chang2 = {};  // "object literal" syntax

let changchang = {
    name: "mytrang",
    age: 18,
    gender: "female",
    job: "baby"
}

//Existence check: kiểm tra sự tồn tại

//console.log(chang1.noSuchProperty === undefined ); //true means "no such property"

//cách 2 kiểm tra sự tồn tại: "key" in object

console.log("name" in changchang);
console.log("tan" in changchang);

//for..in :đi qua tất cả các khóa của một đối tượng:

for (let key in changchang) {
    console.log(key);
    console.log(changchang[key]);
}

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for (let code in codes) {
    console.log(code); // 1, 41, 44, 49
  }

//  Cloning and merging, Object.assign

let chang = {
    name: "chang"
}

let chang1 = {
    age: 18,
    gender: "female"
}

let chang2 = {
    job: "baby",
    nickname: "bubble Princess"
}

//object merge

Object.assign(chang,chang1,chang2);
console.log(chang);

//Merge With Same Properties

let a1 = {
    a: 1,
    b: 2,
    c:6
} 

let a2 = {
    b: 1,
    c: 2,
    
} 

let a3 = {
    c:9
} 

Object.assign({}, a1,a2,a3); // giá trị cuối cùng sẽ đè lên giá trị trước đó
console.log(a1);


//symbol

let ahihi1 = Symbol("chang xđ");
let ahihi2 = Symbol("chang dt");

console.log(ahihi1 == ahihi2); // false: bởi vì định danh duy nhất



