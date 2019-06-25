// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

// Using setInterval.


printNumber = (from, to) => {
    let count = setInterval(() => {
        console.log(from);
        from++;
        if(from ===to){
            clearInterval(count);
        }
    }, 1000);
}

printNumber(1,7);


function sayHi(phrase, who) {
    alert( phrase + ', ' + who );
  }
  
  setTimeout(sayHi, 1000, "Hello", "John");