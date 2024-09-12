'use strict';

// 1

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = salaries.John + salaries.Ann + salaries.Pete;

console.log(sum);

// 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric() {
    menu.width  *= 2;
    menu.height *=2;

}
multiplyNumeric();
console.log(menu);


// 3

const calculator = {
   
    read() {
      this.a = +prompt("Введите первое число:");
      this.b = +prompt("Введите второе число:");
    },
  
  
    sum() {
      return this.a + this.b;
    },
  
  
    mul() {
      return this.a * this.b;
    }
  };

calculator.read();
alert(calculator.sum());
alert(calculator.mul()) ;


//  4

let str = "$120";

function extractCurrencyValue(str) {
    return +str.slice(1);
}
console.log(extractCurrencyValue(str));
  

// 5

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name);

alert( names ); 

 
// 6


function getAverageAge(users) {
    let totalAge = 0;
  
    for (const user of users) {
      totalAge += user.age;
    }
  let kk =  totalAge / users.length
    alert(kk)
  }

  getAverageAge(users)