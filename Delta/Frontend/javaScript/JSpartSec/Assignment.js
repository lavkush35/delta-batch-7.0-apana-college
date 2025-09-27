//Ques.1   create a number variable num with some value. 
// Now, print "good" if the number is divisible by 10 and print "bad"  if it is not . 

// let num = 20;
// if(num / 10 === 0) {
//     console.log("Good");
// }
// else {
//     console.log("Bad");
// }



// Ques 2.  Take the user's name & age as input using prompts.
// then return back the following statement to the user as an alert (by substituting their name & age):
//       name is age years old.
// [Use template Literals to print this sentence]

// let name = prompt("Enter the user name : ");
// let age =  prompt("Enter the user age : ");
// let msg = name + " " + "is" + " " + age + " " +"Years" + " " + "old";
// alert(msg);



// ques 3. Write  a switch statement to print the months in a quarter.
// Months in Quarter 1 : January, Febuary, March
// Months in Quarter 2 : April, May, June
// Months in Quarter 3 : July, Augst, Sepetember 
// Months in Quarter 4 : October, November, December.
// // [Use the number as the case value in switch]

// let month = 1;
// switch(month) {
//     case(1):
//         console.log("January, Febuary, March");
//         break;
//     case(2):
//         console.log("April, May, June");
//         break;
//     case(3):
//         console.log("July, Augst, September");
//         break;
//     case(4) :
//         console.log("October, November, December");
//         break;
//     default:
//         console.log("NOT A QUARTER!");
// }




// Ques 4.  A string is a golden string if  it starts with the character 'A' or 'a' and has a total length greater than 5.
//                            for a given string print if it is golden or not.

// let str = "apples";
// if((str[0] == 'a'|| str[0] == 'A') && str.length > 5) {
//     console.log("golden string");
// }    
// else {
//     console.log("not a golden string");
// }



// Ques 5. Write a program to find the largest of 3 numbers.

// let a = 100;
// let b = 150;
// let c = 23;
// if(a > b) {
//     if(a > c) {
//         console.log(a, " is largest.");
//     }
//     else {
//         console.log(c, " is largest.");
//     }
// }
// else {
//     if(b > c) {
//         console.log(b, " is largest.");
//     }
//     else {
//         console.log(c, " is largest.");
//     }
// }




// Ques 6. (Bonus). Write a program to check if 2 numbers have the same last digit. 
// Eg: 32 and 47852 Have the same last digit i.e. 2
let num = 32;
let num2 = 47852;
if((num % 10) == (num2%10)) {
    console.log("numbers have the same last digit which is ", num % 10);
}
else {
    console.log("numbers don't have the same last digit");
}