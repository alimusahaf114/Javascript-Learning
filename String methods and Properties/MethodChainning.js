// // Without Method Chaining

// let userName = window.prompt("Enter the username please.....") ;
// // userName = userName.trim();
// // let letter = userName.charAt(0);
// // letter = letter.toUpperCase();

// // let extraChar = userName.slice(1);
// // extraChar = extraChar.toLowerCase();
// // userName = letter + extraChar ;
// // console.log(extraChar);


// // With Method Chaining

// // userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
// // console.log(userName);
// // userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
// // userName = userName.replace(/([a-z])([A-Z])/g, '$1 $2');
// // console.log(userName);

// let userName = "MusahafAli";

// // Function to format the name
// function formatName(name) {
//     name = name.trim();  // Remove leading and trailing spaces
//     name = name.charAt(0).toUpperCase() + name.slice(1);  // Capitalize the first letter
    
//     // Find where to insert the space
//     let formattedName = '';
//     for (let i = 0; i < name.length; i++) {
//         if (i > 0 && name[i] === name[i].toUpperCase() && name[i-1] !== ' ') {
//             formattedName += ' ';
//         }
//         formattedName += name[i];
//     }
    
//     return formattedName;
// }

// userName = formatName(userName);

// console.log(userName);  // Output: "Musahaf Ali"
