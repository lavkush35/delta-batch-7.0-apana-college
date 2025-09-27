// const sum = (a, b) => {
//     console.log(a+b)
// }

// const cube = (n) => {
//     return n*n*n;
// }

// const pow = (a) => {
//     return a**2;
// }


//  ------------=====SET TIMEOUT---------------------------------------------------------------------------------------------

// console.log("hi there!");
// setTimeout( () => {
//     console.log("apana college");
// }, 4000);
// console.log("Welcome to")


// -----------------SET INTERVAL------------=-------------------------------------------------------------------------
// console.log("hii there!")

// let id = setInterval( () => {
//     console.log("Luvkush katara");
// }, 2000);
// console.log(id);

// let id2 = setInterval( () => {
//     console.log("rahul katara");
// }, 3000);
// console.log(id2);



// -----------this with arrow function ----------------------------------------------------------------------------------------

// const student = {
//     name: "aman",
//     marks: 87,
//     pro: this, //  global scope
//     getName: function() {
//         console.log(this);
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this); // Parent's scope  -> window
//         return this.marks;
//     },

//     getInfo1: function() {
//         setTimeout( () => {
//             console.log(this); // student
//         }, 2000);
//     },

//     getInfo2 :function() {
//         setTimeout( function() {
//             console.log(this); // window
//         }, 2000);
//     },
// };


// --------------------Write an arrow function that returns the square of a number 'n'---------------------------------------

// const square = (n) => {
//     return n*n;
// }
// console.log(square(4));


// -----------------Write a function that prints "Hello world" 5 times at intervals of 2s each.----------------------------


let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout( () => {
    clearInterval(id);
    console.log("clear interval run")
}, 10000);