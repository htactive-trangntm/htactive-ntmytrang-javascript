let myMentor ={
    name: "Điên",
    age: 98,
    character: "crazy",
    level: "little"
}

function sayHelloMyMentor(h1,h2,h3,h4){
    console.log(h1+" "+this.name+","+h2+" "+this.age+h3+" "+this.character+","+h4+" "+this.level);
}

sayHelloMyMentor.apply(myMentor,["xin chào, tôi tên là ", "năm nay tôi", "tính cách của toi là", "với một mức độ"]);