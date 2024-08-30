// let day = 9;
// switch (day) {
//   case 1:
//     console.log("Today is Monday..");
//     break;
//   case 2:
//     console.log("Today is Tuesday..");
//     break;
//   case 3:
//     console.log("Today is Wednesday..");
//     break;
//   case 4:
//     console.log("Today is Thursday..");
//     break;
//   case 5:
//     console.log("Today is Friday..");
//     break;
//   case 6:
//     console.log("Today is Saturday..");
//     break;
//   case 7:
//     console.log("Today is Sunday..");
//     break;
//   default:
//     console.log(`${day} is not a day..`);
//     break;
// }

let testScore = 30;
let letterGrade;

switch (true) {
  case testScore >= 90:
    console.log("A");
    break;
  case testScore >= 80:
    console.log("B");
    break;
  case testScore >= 70:
    console.log("C");
    break;
  case testScore >= 60:
    console.log("D");
    break;
  case testScore >= 50:
    console.log("Fail");
    break;
  default:
    console.log("You are term back");
}
