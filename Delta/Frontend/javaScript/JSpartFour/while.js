// // let i = 0;
// // while(i <= 20) {
// //     console.log(i);
// //     i++;
// // }

// let i = 1;
// while(i <= 20) {
//     console.log(i);
//     i = i+2;
// }



// 
// let favMovie = "avatar";
// let guess = prompt("guess my favorite movie");

// while((guess != favMovie)) {
//     if(guess == "quit") {
//         console.log("you quit");
//         break
//     }
//     guess = prompt("wrong guess. Please try again");
// }

// if(guess == favMovie) {
//     console.log("congrats!!");
// }


// let i = 1;
// while(i <= 5){
    // if(i == 3) {
        // break;
    // }
    // console.log(i);
    // i++;
// }
// 
// console.log("we used break at 3");

let fruits = ["mango","apple", "banana", "litchi", "orange"];
fruits.push("pineapple");
for(i = 0; i<= fruits.length; i++) {
    console.log(i, fruits[i]);
}