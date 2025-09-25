// function outerFunc() {
//     let x = 5;
//     let y = 39;
//     function innerFunc() {
//         console.log(x);
//     }
//     innerFunc();
// }



// let greet = "hello"; // global scope

// function changeGreet() {
//     let greet = "namste"; // function scope
//     console.log(greet);

//     function innerGreet() {
//         console.log(greet); // Lexical scope
//     }

//     innerGreet(); 
// }

// console.log(greet);
// changeGreet();

// Expression Function

let sum = function(a, b) {
    return a+b;
}

let hello = function() {
    console.log("hello hello hello ");
}