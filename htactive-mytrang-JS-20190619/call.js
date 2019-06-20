let chang = {
    nicknam: "chang",
    age: "22",
    gender: "unknow"
}

let changchang = {
    nicknam: "chang cute",
    age: "8",
    gender: "unknow"
}

function sayHello(hi1,hi2){
    console.log(hi1   + ' ' + this.nicknam + ','+' '+ hi2 +' ' + this.age);
}

sayHello.call(chang,"Hello Chang","chang ");

sayHello.call(changchang,"hiiiiiiii","tui");