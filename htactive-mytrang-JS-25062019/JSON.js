let myNephew = {
    name:"huy",
    age:12,
    gender: "male",
    grade: 7
}

let myBb = JSON.stringify(myNephew); //json.stringify object mảng và chuyển thành string
console.log(typeof myBb)
console.log(myBb)

//JSON parse: giải mã JSON

myBb = JSON.parse(myBb);
console.log(myBb)


//example
let user = {
    name: "John Smith",
    age: 35
};

let user1 = JSON.parse(JSON.stringify(user));
console.log(user1)