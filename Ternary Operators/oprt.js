// const PI = 3.14 ;
// if(PI === "3.14" ){
//     console.log("PI is string .... ");
// } else {
//     console.log("Just shutup....");
// }


// DO WHILE LOOP 
let loggedIn = false ;
let username;
let password;
 
while(!loggedIn){

username = window.prompt(`Enter you username`);
password = window.prompt(`Enter your password`);
    if(username === "myUsername" && password === "myPassword"){
        loggedIn= true;
        console.log("you are logged in");
    } else {
        console.log("Invalid username ..");
    }
}