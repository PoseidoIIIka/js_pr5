'use strict'

// let user = new Object();
// let user = {
//     name: 'Bulat',
//     age: 19,
//     "pets name": 'arsy'
// };

// console.log(user['pets name'])

// user.surname = 'Bashirov'

// console.log(user)

// delete user.surname;

// console.log(user)


// let fruit = prompt('Фрукт', 'lemon')
// let shop = {
//     [fruit]: 10
// }

// console.log(shop.lemon)


// let shop = { 
//     apple : 10,
//     potato : 6,
//     cucumber : 17
// }
// shop.apple *=2;
// console.log(shop)


// for(let key in shop){
//     console.log(key, shop[key])
// }

// let a = 5;
// let b = a;

// let user = {name: 'Al'}
// let user2 = {};

// // for(let key in user){
// //     user2[key] = user[key];
// // }
// Object.assign(user2, user);

// user2.age = 10;
// console.log(user);
// console.log(user2);


// let user = {
//     name : 'Булат',
//     sayHi(){
//         alert(`Hi ${this.name}`);
//     }
// }
// let user2 = user;
// user = null;
// user2.sayHi();


// function sayHi() {
//     alert(this.name)
// }

// let user = {
//     name: 'Al'
// }
// let user2 = {
//     name: 'Vl'
// }
// user.fun = sayHi;
// user2.fun = sayHi;

// user.fun();
// user2.fun();


// let str = 'Hello';

// console.log(str[0]);
// console.log(str.at(-1));

// for(let letter of str) {
//     console.log(letter);
// }

// console.log(str.toLowerCase());
// console.log(str[0].toLowerCase());


// console.log(str.indexOf('e'));

// console.log(str.includes('ell'));

// let substr = str.slice(0, 2)
// let substr2 = str.substring(2, 0)
// let substr3 = str.substr(1, 3)
// console.log(substr);
// console.log(substr2);
// console.log(substr3);


// let arr = [1, 2, 3, 'Apple', {name: 'Bulat'}, function(){alert('hi')}, [1,2]];

// console.log(arr[0])
// console.log(arr.at(-2))
// arr[0] = 'cat'
// console.log(arr[4].name);
// arr[5]()

// push добавляет элемнт в конец.
// shift удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым
// unshift добавляет элемнт в начало
// pop удаляет последний элемент

// arr.push(2)
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.unshift(10)
// console.log(arr);
// arr.shift()
// console.log(arr);

// for(let i = 0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

// for(let elem of arr){
//     console.log(elem);
// }

// let arr = ['apple', 'cucumber', 'water', 'milk'];

// arr.splice(1, 2, 'banana', 'watermelon', 'owied')
// let arr2 = arr.slice(2, 3)
// console.log(arr);
// console.log(arr2);

// let arr3 = arr.concat(arr2)
// console.log(arr3);

// arr.forEach((item, index)=>{
//     alert(`у ${item} index = ${index}`)
// })


// console.log(arr.indexOf('cucumber'));
// console.log(arr.includes('cucumber'));

// let users = [
//     {id: 1, name: 'Bulat', age : 20},
//     {id: 2, name: 'Alina', age : 10},
//     {id: 3, name: 'Alsu', age : 30},
// ]

// let user = users.find(item=>item.id == 3)
// console.log(user.name);

// let users2 = users.filter(item => item.age > 18)
// console.log(users2);


// let arr = ['apple', 'cucumber', 'water', 'milk'];

// let lengths = arr.map(item => item.length)
// console.log(lengths);

// arr.reverse()
// console.log(arr);

// let nums = [2, 1, 17, 24, 16]
// console.log(nums.sort((a,b)=>a-b));