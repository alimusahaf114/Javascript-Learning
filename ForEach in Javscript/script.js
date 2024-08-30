const obj = {
    multiplier: 2
  };
  
  const numbers = [1, 2, 3, 4, 5];
  
  numbers.forEach(function (number) {
    console.log(number * this.multiplier);
  }, obj);
  


// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(iteratNumber);
// numbers.forEach(oprt)

// function oprt(element , index , array){
//     array[index] = element * 3;
// }

// function iteratNumber(element) {
//     console.log(element);
//   }


// let fruits = ["apple" , "Banana" , "Mango" , "papaya"];

// function upperCase(element , index , array){
//     array[index] = element.toUpperCase();
// }

// fruits.forEach(upperCase);
// fruits.forEach(display);


// function display(element){
//     console.log(element);
// }



// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(iteratNumber);
// numbers.forEach(oprt)

// function oprt(element , index , array){
//     array[index] = element * 3;
// }

// function iteratNumber(element) {
//     console.log(element);
//   }


// output of elements after multiplying with 3 is not showing now i want to get result of both original and after multiplying with 3 how can i get the result 