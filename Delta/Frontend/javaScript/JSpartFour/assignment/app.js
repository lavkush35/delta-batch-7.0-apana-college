// qs 1. Write a JS program to delete all occurences of element 'num' in a given array. 
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;
// for(let i = 0; i<arr.length; i++) {
//     if(arr[i] == num) {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);




// qs 2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6
// let number = 287152;
// let count = 0;
// let copy = number;
// while(copy > 0) {
//     count++;
//     copy = Math.floor(copy/10);

// }
// console.log(count);

// qs 3. Write a  JS program to find the sum of digits in a number. 
// Example : if number = 287152, sum = 25


// let numb = 287152;
// let sum = 0;
// let copy1 = numb;
// while(copy1 > 0) {
//     digit = copy1 % 10;
//     sum += digit;
//     copy1 = Math.floor(copy1/10);

// }
// console.log(sum);


// qs 4. print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that
// integer]
// Example : 
            // 7! (factorial of 7)  = 1*2*3*4*5*6*7 = 5040
            // 5! (factorial of 5) = 1*2*3*4*5 = 120
            // 3! (factorial of 3) = 1*2*3 = 6
            // 0! is always 1

// let n = 5;
// let factorial = 1;

// for(let i = 1; i<=n; i++) {
//     factorial *= i;

// }
// console.log(`factorial of ${n} is ${factorial}`);




// qs 5. find the largest number in an array with only positive numbers.
let arr = [2, 5, 10, 4, 2, 7, 1,9];
let largest = 0;

for(let i = 0; i<=arr.length; i++) {
    if(largest < arr[i]) {
        largest = arr[i];
    }
}
console.log(largest);