// // pqs 1. Write  arrow function named arrayAverage that accepts an array of numbers and returnss the average of those numbers.
// let arr = [1, 2, 3, 5, 6];
// const arrayAverage =  (arr) => {
    
//     let total = 0;
//     for(let number of arr) {
//         total += number;
//     }
//     return total / arr.length;
// };

// console.log(arrayAverage(arr));


// // qs 2. Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
// const isEven = (n) => {
//     if(n % 2 == 0) {
//         console.log("even numbr", n);
//     } else {
//         console.log("odd number",n);
//     }
// }
// console.log(isEven(15));

// qs 3. ----------------------------------------------------------------------------------------------------------------

// const object =  {
//     message : "hello, world!",

//     logMessage() {
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage, 1000);

// qs 4.. ---------------------------------------------------------------------------------------------------
let length = 4;
function callback() {
    console.log(this.length);
}

const object = {
    length : 5, 
    method(callback) {
        callback();
    },
};

console.log(object.method(callback, 1, 2));