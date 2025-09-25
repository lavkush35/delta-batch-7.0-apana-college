// function sum(...args) {
//     // arguments
//     for(let i = 0; i < args.length; i++) {
//         console.log("you gave us ", args[i]);
//     }
// }

// function min() {
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(1);
// }

// function sum(...args) {
//     return args.reduce((sum, el) => sum + el);
// }

// function min(msg, ...args) {
//     console.log(msg);
//     return args.reduce((min, el) => {
//         if(min > el) {
//             return el;
//         } else {
//             return min;
//         }
//     });
// }



// ----------------------------------DESTRUCTURING ---------------------------------------------------------------------

// let name = ["tony", "bruce", "peter", "steve", "abc", "xyz", "pqr"];
// 
// let [winner, runnerup, ...other] = name;
// 
// -------------------------------DESTRUCTURING ------------------------------------------------------------------------

let student = {
    name : "luvkush katara",
    age : 21,
    class : 9,
    subject : ["Hindi", "English", "Math", "Science", "Social Science"],
    username : "karan123",
    password : "abcd",
    
};

let {username : user, password: secret, city : place = "Mumbai"} = student;

