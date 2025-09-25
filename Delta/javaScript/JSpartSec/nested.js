// let marks = 95;
// if(marks >= 33) {
//     console.log("Pass");
//     if(marks >= 90) {
//         console.log("Grade : O");
//     }
//     else if(marks >= 70) {
//         console.log("Grade : A")
//     }
//     else if(marks >= 60) {
//         console.log("Grade : B");
//     }
//     else {
//         console.log("Grade : C")
//     }
// }
// else {
//     console.log("better luck next time!");
// }




let mark = 90;
if(mark >= 33 && mark >= 80) {
    console.log("Pass");
    console.log("A+")
}



let marks1 = 50;
if(marks1 >= 33 || marks1 >= 80) {
    console.log("Pass");
    console.log("A++");
}
else {
    console.log("better luck next time!");
}



// logical operator Or
let marks2 = 75;
if(marks2 >= 33 && marks2 <= 80 || !false) {
    console.log("PASS")
}