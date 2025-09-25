// Qs1.Write a JavaScript program to get the first n element so fanarray . [ n can be any positive number].
// For example:for array[7,9,0,-2] and n = 3 Print , [7,9,0]
// let arr = [7, 9, 0, -2];
// let n = 3;

// let ans = arr.slice(0, n);
// console.log(ans);


//Qs2.Write a JavaScript program to get the last n element so f an array.[n can be any positive  number].
// For example:for array[7,9,0,-2] and n=3 Print, [9,0,-2]
let arr1 = [7, 9, 0, -2];
let n1 = 3;

let ans1 = arr1.slice(arr1.length - n1);
console.log(ans1);

// Qs3.Write a JavaScript program to check whether a string is blank or not.

// let str = prompt("Please enter a string: ");
// if(str == 0) {
//     console.log("Empty string");
// }
// else {
//     console.log("string is not empty");
// }


// Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.

let strg = "lUvkUsHkATara";
let idx = 5;
if(strg[idx] == strg[idx].toLowerCase()){
    console.log("String is lowercase");
}
else {
    console.log("string is UPPERCASE");
}

// Qs5.Write a JavaScript program to strip leading and trailing spaces from a string.

let str = prompt("please enter a string ");
console.log(`Orginal string = ${str}`);
console.log(`string without space = ${str.trim()}`);


// Qs6. Write a JavaScript program to check if an element exists in an array or not.
let arr = ["hello", "a", 23, 45, 66, -5, 43,35];
let item = -1;
if(arr.indexOf(item) != -1){
    console.log("element in exists array");
} else {
    console.log("element does not exists in array");
}