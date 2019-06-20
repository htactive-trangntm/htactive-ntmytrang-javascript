var person1 = {firstName: 'tan', lastName: 'nguyen'};
var person2 = {firstName: 'trang', lastName: 'nguyen'};

function say(greeting0, greeting1) {
 console.log(greeting0 + ',' + greeting1 + ' ' + this.firstName + ' ' + this.lastName);
}
//không gọi hàm trực tiếp mà nó sẽ trả về một hàm mới




var sayHelloTan = say.bind(person1, 'Hello', 'Good morning');
var sayHelloChang = say.bind(person2, 'Hello', 'Good morning');

sayHelloTan(); 
sayHelloChang(); 