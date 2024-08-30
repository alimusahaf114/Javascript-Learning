function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    setTimeout(() => {
        console.log('Hello, ' + this.name);
    }, 1000);
};

const john = new Person('John');
john.greet(); // Logs 'Hello, John' because `this` in arrow function refers to `john`


// Person.prototype.greet = function() {
//     setTimeout(function() {
//         console.log(`Hello ${this.name}`);
//     }, 1000);
// };

// const john = new Person('John');
// john.greet(); // Logs 'Hello, undefined' because `this` in setTimeout refers to the global object




























// const obj = {
//     arrowFunction: () => {
//         console.log(this);
//     }
// };
// const obj2 = {
//     greet:function(){
//         console.log(this);
//     }
// };

// obj.arrowFunction();
// obj2.greet();
// obj.method(); // Logs the surrounding context, not the obj object
 // Logs the surrounding context, which could be the global object or undefined in strict mode

// function traditionalFunction() {
//     console.log(this);
// }

// const obj = {
    
//     method: traditionalFunction
// };

// obj.method(); // Logs the obj object
// traditionalFunction(); // Logs the global object or undefined in strict mode


// function introduce(){
//     console.log(this.name);
// }
// let person1 = {name:"Musahaf"}
// introduce.call(person1)
// introduce.apply(person1)
// introduce();

// function chai(){
//     // "use strict";
//     // x = 10 ;
//     console.log(this);
// };
// chai();

// y = 20 ;
// console.log(y);

// function chai(){
//     console.log(this);
// }
// chai();


// let person = {
//     name: "Musahaf" ,
//     cast: "Kunbhar" ,
//     age: 32 ,
//     greet: () => {
//         console.log(`Hi ${this.name} How are you `);
//     }

// };
// person.greet();


// let person = {

//     name: "Musahaf",
//     cast: "Kunbhar" ,
//     city: "Hyderabad" ,
//     age:  37 ,
//     profession: function(){
//         console.log(`${this.name} is a very good at Programming..`);
//     },
//     allDetails: function(){
//         console.log(`${this.name} is very good person and he is from ${this.city}`);
//     }
// };

// person.profession();
// person.allDetails();