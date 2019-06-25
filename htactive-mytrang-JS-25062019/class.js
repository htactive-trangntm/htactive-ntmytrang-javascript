class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`hi ${this.name}`);
    }
    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name
    }

    get getAge() {
        return this.age;
    }

    set setAge(age) {
        this.age = age
    }

}

class student extends Person {
    constructor(name, age, score){
        super(name, age);
        this.score = score;
    }

    set setScore(score){
        this.score = score;
    }

    get getScore() {
        return this.score;
    }
}

let p = new Person();
p.setName="nguyễn thị mỹ linh";
console.log(p.getName);

let student1 = new student();
student1.setName="nguyễn thị mỹ trang";
console.log(student1.getName);
student1.sayHello();

let student2 = new student("Duy",8,10);
console.log(student2.getName);
console.log(student2.getAge);
console.log(student2.getScore);


