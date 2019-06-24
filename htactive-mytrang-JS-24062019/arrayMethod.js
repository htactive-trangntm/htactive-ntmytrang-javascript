let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

console.log( arr[1] ); // undefined

// arr = ["I",  , "home"];
console.log( arr.length ); // 3

//splice
let changchang1 = ["hôm", "nay", "chang", "đẹp", "quá"];
changchang1.splice(1,1); //từ vị trí số 1 xóa q phần tử
console.log(changchang1)

//let changchang3 = changchang1

//removde
let changchang2 = ["hôm", "nay", "chang", "đẹp", "quá"];
let removed = changchang2.splice(4,1,"tuyệt") 
console.log(changchang2 == changchang1)////code ninef

//insert
let arr1 = ["I", "am", "a","girl"];
arr1.splice(3, 0, "beautiful", "sexy"); // từ vị trí số 3, ko cắt, insert beautiful, sexy vào mảng
console.log( arr1 ); //[ 'I', 'am', 'a', 'beautiful', 'sexy', 'girl' ]

//find và findIndex
let users = [
    {id: 1, name: "Huy"},
    {id: 2, name: "Linh"},
    {id: 3, name: "Duy"}
  ];
  
  let user = users.find(item => item.id == 1);
  console.log(user.name);


  //reverse: đảo mảng

let arr2 = [1, 2, 3, 4, 5];
arr2.reverse();

console.log( arr2 );

//split: tách
let names = 'Linh, Huy, Bao';

let arr3 = names.split(', ');

for (let name of arr3) {
  console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}