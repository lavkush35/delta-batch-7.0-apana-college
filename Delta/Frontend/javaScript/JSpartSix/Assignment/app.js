// qs 1. Write a javaScript function that returns array elements larger than a number.

// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5;


// // elements larger than a number num
// function getElement(arr, num) {
//     for(i = 0; i < arr.length; i++) {
//         if(arr[i] > num) {
//             console.log(arr[i]);
//         }
//     }
// }


// console.log(getElement(arr, num));



// Qs 2.  Write a javascript function to extract unique characters from a string . 
// Example : str = "abcdabcdefgggh"
// ans = "abcdefgh"

// let str = "abcdabcdefgggh";

// function to get String with all unique elements
// function getUnique(str) {
//     let ans = "";
//     for(let i = 0; i < str.length; i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1) {
//             // if current character is not added, then add it in ans . 
//             // otherwise it is a duplicate.
//             ans += currChar;
//         }
//     }
//     return ans;
// }

// console.log(getUnique(str));


// Qs 3. Write a javaScript function that accepts a list of country names as input and returns the logest country name as output.
// Example: country = ["Australia", "Germany", "United States of America"]
// output : "United State of America"

// let country = ["Australia", "Germany", "United States of America"];
// function longestCountry(country) {

//     let count = 0;

//     for(let i = 0; i<country.length; i++) {
//         let ansLen = country[count].length;
//         let currLen = country[i].length;
        
//         if(currLen > count ) {   
//             count = i;
//         }
//     }
//     return country[count];
// }


// console.log(longestCountry(country));


// Qs 4. Write a javaScript function to count the number of vowels in a string argument.

// let str = "apnacollege";

// function countVowels(str) {
//     let count = 0;
//     for(let i = 0; i < str.length; i++) {
//         if(
//             str.charAt(i) == "a" ||
//             str.charAt(i) == "e" ||
//             str.charAt(i) == "i" ||
//             str.charAt(i) == "o" ||
//             str.charAt(i) == "u"
//         ) {
//             count ++;
//         }
//     }
//     return count;
// }
// console.log(countVowels(str));

// qs 5. Write a JavaScript function to generate a random number within a range (start, end).
let start = 100;
let end = 200;

function generateNumber(start, end) {
    let diff = end - start;
    return Math.floor(Math.random()*diff) + start;
}

console.log(generateNumber(start, end));