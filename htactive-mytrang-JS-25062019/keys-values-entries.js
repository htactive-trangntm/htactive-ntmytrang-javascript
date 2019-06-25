chang = {
    name: "chang",
    age: 22,
    gender: "female"
}

for(let value of Object.values(chang)){
    console.log(value)
}

for(let value of Object.keys(chang)){
    console.log(value)
}

for(let value of Object.entries(chang)){
    console.log(value)
}

for(let value in Object.entries(chang)){
    console.log(value)
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

sumSalaries = (salaries) =>{
    sum =0;
    for(let value of Object.values(salaries)){
        sum += value;
    }
    return sum;
}

console.log(sumSalaries(salaries))

sumSalaries1 = (salaries) =>{
    return Object.keys(salaries).reduce((a,b)=>(a+b));
}

console.log(sumSalaries1(salaries));