// // qs 1. Sqaure and sum the array elements using the arrow function and then find the average of the array.

// let arr = [1, 2, 3, 4, 5];

// const square = arr.map((arr) => arr * arr);
// console.log(square);

// let sum = square.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);

// let avg = sum / arr.length;
// console.log(avg);

// // ----------------------------------------------------------------------------------------------------------------------------

// // qs 2. create a new array using the map function whose each element is equal to the original element plus 5.

// let numbers = [2, 4, 6, 8, -2, -4];

// console.log(numbers.map((number) => number + 5));

// // -----------------------------------------------------------------------------------------------------------------------------
// // qs 3.  Create a new array whose elements are in uppercase of words present in the original array.

// let arr = ["hello", "namaste", "sir!"];
// console.log(arr.map((arr) => arr.toUpperCase()));


// // qs 4. write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
// // The function should return a new array with the original array values and all of the additional arguments doubled.

// const doubleAndReturnArgs = (arr, ...args) => [
//     ...arr, 
//     ...args.map((v) => v * 2),
// ];
// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// doubleAndReturnArgs([1, 2, 3], 4, 4); // [1, 2, 3, 8, 8]
// doubleAndReturnArgs([2], 10, 4); // [2, 20, 8]
// console.log(doubleAndReturnArgs([2], 10, 4));

// // qs 5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys 
// // and values of the first object and second object.

// const mergeObjects = (obj1, obj2) => ({ ...obj1, ... obj2});
// mergeObjects({a : 1, b : 2}, {c : 3, d : 4}); // {a : 1, b : 2, c : 3, d : 4}
// console.log(mergeObjects({a : 1, b : 2}, {c : 3, d : 4}));