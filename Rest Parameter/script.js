// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }

// const total = sum(1,2,3,4,5,6,7,8);
// console.log(`your total is $${total}`);
function combineStrings(...strings){
    return strings.join(" ");
}
const fullName = combineStrings("Mr" ,"Musahaf Murtaza" , "Kunbhar");
console.log(fullName);



// // function openFridge(...foods){
// //     console.log(foods);
// // }

// // openFridge(food1 , food2 , food3 , food4)
// function getFood(...foods){
//     return foods;
// }

// let food1 = "Pizza" ;
// let food2 = "Burger" ;
// let food3 = "Fries" ;
// let food4 = "Role" ;

// const foods = getFood(food1 , food2 , food3 , food4)
// console.log(foods);