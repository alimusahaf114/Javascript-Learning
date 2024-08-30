//                 // How to inherit parents objects properties or methods from to a child obj

// let parent = {
//     greet: function(){
//         console.log("Hello Musahaf ");
//     } 
// };

// let child = Object.create(parent);
// child.greet();
// console.log(child);


function add(a, b) {
    return a + b;
  }
  
  function operate(fn, a, b) {
    return fn(a, b);
  }
  
  console.log(operate(add, 2, 3)); // 5
  

// // let theNumber = prompt("Pick a number");

// // console.log("Your number is the square root of " + theNumber * theNumber);
// // console.log(typeof(theNumber));

// // // let theNumber = Number(prompt("Pick a number"));
// // // console.log("Your number is the square root of " +
// // // theNumber * theNumber);
// // // console.log(typeof(theNumber));