// function hello() {
//     console.log("inside hello fnx.")
//     console.log("hello!");
// }

// function demo() {
//     console.log("calling hello fnx.")
//     hello();
// }
// console.log("calling demo fnx");
// demo();
// console.log("done, bye!");

//-------------------------------------------------------------------------------------------------------------------------------

// function one() {
    
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = one() + two();
//     console.log(ans);
// }

// three();

//------------------------------------------------------------------------------------------------------------------------------

// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// let sum = a+b;
// console.log(sum);

//------------------------------synchrous nature------------------------------------------------------------------------------------------

// setTimeout (() => {
//     console.log("Apna college.");
// }, 2000);

// setTimeout (() => {
//     console.log("hello world.");
// }, 1000);

// console.log("Hello...")


//----------------------------------------------------------------------------------------------------------------------

// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// };

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("pink", 1000, () => {
//             changeColor("blue", 1000, () => {
//                 changeColor("yellow", 1000);
//             });
//         });
//     });
// });
// callbacks nesting -> callback hell

//-----------------------------------------------------------------------------------------------------------------------

let h1  = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    });
}

changeColor("red", 1000)
.then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
} )
.then(() => {
    console.log("orange color was completed.");
    return changeColor("pink", 1000);
})
.then(() => {
    console.log("pink color was completed.");
})


// --------------------------------------------- PROMISES -------------------------------------------------------------

// function saveToDb(data, success, failure) {

//     let internetSpeed = Math.floor(Math.random() *10)+1;
//     if(internetSpeed > 4){
//         success();
//     } else {
//         failure();
//     }
// }

// saveToDb( 
//     "Luvkush katara",
//     () => {
//         console.log("success : your data was saved.");
//         saveToDb("hello world", () => {
//             console.log("success2 : data2 saved");
//             saveToDb(
//                 "luv katara",
//                 () => {
//                     console.log("success3 : your data was saved.");
//                 },
//                 () => {
//                     console.log("failure3 : week connection!");

//                 }
//             );
//         }, () => {
//             console.log("failure : week connection");
//         });
// },
//     () => {
//         console.log("failure : week Connection. data was not saved!");
//     }
// );

