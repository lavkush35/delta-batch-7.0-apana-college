// ============---FOR EACH---------------------------------------------------------------================================
// let arr = [1, 2, 3, 4, 5];

// arr.forEach( (el) => {
//     console.log(el);
// }) 
// arr.forEach(function(el) {
//     console.log(el)
// })
// -----------------------------------------------FOR EACH------------------------------------------------------------------------------
// let arr = [1, 2, 3, 4, 5];
// let print = function(el) {
//     console.log(el);
// };

// arr.forEach(print);

// -----------------------------------------------FOR EACH-------------------------------------------------------------------------

// let arr = [{
//     name: "luvkush katara",
//     marks: 94.6
// }, 
// {
//     name: "abhishek sharma",
//     marks: 89.9
// }, 
// {
//     name: "rohit rawat",
//     marks: 88.8
// },
// ]

// arr.forEach((student) => {
//     console.log(student);
// });


// ----------------------------------------- MAP -----------------------------------------------------------------

// let num = [1, 2, 3, 4, 5];

// let double = num.map((el) => {
//     return el*2;
// })


// ---------------------------------------- MAP -------------------------------------------------------------------

// let studentInfo = [
//     {
//         name : "luvkush katara",
//         marks: 97.3
//     },
//     {
//         name : "abhi",
//         marks:87.4
//     },
//     {
//         name : "rohit",
//         marks: 78.43

//     },
// ];

// let gpa = studentInfo.map((el) => {
//     return el.marks / 10;
// })


// -----------------------------------------------FILTER-------------------------------------------------------

// let num = [1, 3, 2, 4, 12, 13, 6, 5, 7, 6, 8, 14, 88];
// let ans = num.filter((el) => {
//     return el % 2 == 0;
// })


// -------------------------------------------------------EVERY-----------------------------------------------------

// let num = [2, 4, 6, 1, 8];

// let arr = num.every((el) => el % 2 == 0);
// console.log(arr);

// -------------------------------------------------------------Reduce ------------------------------------------------

// let num = [1, 2, 3, 4];
// let finalVal = num.reduce((res, el) => {
//     console.log(res);
//     return res + el;
// } );
// console.log(finalVal);

// --------------------------------------------------- REDUCE -----------------------------------------------------------

// let arr = [3, 2, 4, 1, 7, 5, 7, 11, 9, 14];
// let  ans = arr.reduce((max, el) => {
//     if(max < el) {
//         return el;
//     } else {
//         return max;
//     }
// });

// console.log(ans);

// -------------------check if all numbers in our array are multiples of 10 or not. ---------------------------------

// let arr = [10, 5, 20, 30, 40];
// let ans = arr.every((el) => el % 2 == 0);
// console.log(ans);

// ---------------------------Create a function to find the min number in an array.

// function getMin(arr) {

//     let ans = arr.reduce((min, el) => {
//         if(min < el) {
//             return min;
//         } else {
//             return el;
//         }
//     });
//     return ans;
    
// }
// let arr = [2, 1, 4, 3, 9, 5, 11, 7];

// console.log(getMin(arr));


// -------------------------------------------DEFAULT PARAMETER------------------------------------------------------

// function sum(a,b = 2){
//     return a+b;

// }
// sum(1);
// console.log(sum(1)); 

// ----------------------------------------SPREAD-----------------------------------------------------------------------

// let arr  = [1, 4, 3, 2, 5, 8, 9, 6];
// console.log(...arr);

// let str = "Luvkushkatara";
// console.log(...str);

// ---------------------------------------SPREAD :- WITH ARRAY LITERALS-------------------------------------------

// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];

// let chars = [..."hello"];

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];
// let nums = [...even, ...odd];

const data = {
    email : "ironman@gmail.com",
    password: "abcd"
};

const datacopy = {...data, id: 123, country: "India"};

let arr = [1, 2, 3, 4, 5]; // val
let obj1 = {...arr}; // obj -> key : val

let obj2 = {..."Hello"};