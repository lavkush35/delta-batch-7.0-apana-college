// let jsonRes = 
//     '{"fact":" A cat only has the ability to move their jaw up and down, not side to side like a human can.","length":93}';
// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// let student = {
//     name : "shradha",
//     marks : 95,
// };

// console.log(JSON.stringify(student));

//=------------------------------------------------------------------------------------------------------------------------

// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log("data1 = ", data.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log("data2 = ", data2.fact);
//     })
//     .catch((err) => {
//         console.log("ERROR - ", err);
//     });

//     console.log("I am Happy");


//-----------------------------------------------------------------------------------------------------------------------

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch (e) {
        console.log("error - ", e);
    }
    console.log("bye");
}