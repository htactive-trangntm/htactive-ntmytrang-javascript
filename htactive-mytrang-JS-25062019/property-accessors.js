chang = {
    firstName: "chang",
    lastName: "nguyen",
    age: 22,
    gender: "female",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
      }
};

chang.fullName = "trang nguyen";
console.log(chang.firstName);
console.log(chang.lastName);
console.log(chang.fullName);

//console.log(chang)

