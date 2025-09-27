// ------------------------------------------------ PROMISES -------------------------------------------------------------------

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10);
//         if(internetSpeed > 4) {
//             resolve("success : data was saved ("+data+")");
//         } else {
//             reject("failure : weak connection ("+data+")");
//         }
//     }) ;
// }

// savetoDb('luvkush katara').then(() => {
//         console.log("promise was resolved");
      
//     })
//     .catch(() => {
//         console.log("promise was rejected");
    
//     })


// ------------------------------------------ PROMISE CHAINING -----------------------------------------------------------------

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10);
//         if(internetSpeed > 4) {
//             resolve("success : data was succeed.");
//         } else {
//             reject("failure : data failed");
//         }
//     });
// }

// savetoDb("Luvkush katara")
//     .then(() => {
//         console.log("data1 saved.");
//         return savetoDb("hello world");
//     })
//     .then(() => {
//         console.log("data2 saved");
//         return savetoDb("Luvkush katara");
//     })
//     .then(() => {
//         console.log("data3 saved.");
//     })
//     .catch(() => {
//         console.log("promis was rejected.");
//     })

// --------------------------------------------------------------------------------------------------------------------

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10);
//         if(internetSpeed > 4) {
//             resolve("success : your data was succeed.")
//         } else {
//             reject("failure : data not saved");
//         }
//     })
// }

// savetoDb("apna college")
//     .then((result) => {
//         console.log("data1 saved");
//         console.log("result of promise : ", result);
//         return savetoDb("Luvkush katara");
//     })
//     .then((result) => {
//         console.log("data2 saved");
//         console.log("result of promise : ", result);
//         return savetoDb("Dhruv katara");
//     })
//     .then((result) => {
//         console.log("data3 saved");
//         console.log("result of promise :  ", result);
//     })
//     .catch ((error) => {
//         console.log("promise was reject");
//         console.log("error of promise: ", error);
//     })