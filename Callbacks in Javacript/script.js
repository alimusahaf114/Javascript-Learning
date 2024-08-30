// function sum(callback , x , y){
//     let Result = x + y ;
//     callback(Result);
// }
// function displayConsol(Result){
//     console.log(Result);
// }

// function displayPage(Result){
//     document.getElementById("de").textContent = Result ;
// }

// sum(displayPage , 2 ,5);



// function sayGoodbye(name , greet) {
//     console.log(`Hello ${name} your age is ${12+9} and `);
//     greet();
// }

// function greet(){
//     console.log('Goodbye!');
// }

// sayGoodbye("Musahaf" , greet);




        // PRACTICE 1 
// /// Create an Array
// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// // Call removeNeg with a callback

// const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// // Display Result
// document.getElementById("demo").innerHTML = posNumbers;

// // Keep only positive numbers
// function removeNeg(numbers, callback) {
//   const myArray = [];
//   for (const x of numbers) {
//     if (callback(x)) {
//       myArray.push(x);
//     }
//   }
//   return myArray;
// }
