const students = ["ali" , "khan" , "wali" ,"Rahim"] ;
const upperCases = students.map(upperCase);
console.log(upperCases);
function upperCase(element){
    return element.toUpperCase() ;
}



// const numbers = [1,2,3,4,5];
// let squares = numbers.map(square);
// console.log(squares);
// function square(elements){
//     let result = Math.floor(Math.pow(elements ,8))
//     return result ;
// }