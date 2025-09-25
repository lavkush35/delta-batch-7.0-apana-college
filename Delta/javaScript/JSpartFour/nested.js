// let heroes = [

//     ["ironman", "spiderman", "thor"], 

//     ["superman", "wonder woman", "flash"]

// ]

// for(let i = 0; i <= heroes.length; i++) {

//     console.log(i, heroes[i], heroes[i].length);

//     for(let j = 0; j <= heroes[i].length; j++) {

//         console.log(`j=${j}, ${heroes[i][j]}`);
//     }
// }





// let student = [["aman", 95], ["shradha", 94.4], ["karan", 100]];

// for(let i = 0; i <= student.length; i++) {
//     console.log(`info of student #${i+1}`);
//     for(let j = 0; j<student[i].length; j++) {
//         console.log(student[i][j]);
//     }
// }



// let fruits = ["mango", "apple", "banana", "orange", "litchi"];

// for(fruit of fruits) {
//     console.log(fruit);
// }

// let str = "apnacollege";
// for(char of str) {
//     console.log(char);
// }




let heroes = [["superman", "batman", "wonder woman"],
            ["spiderman", "ironman", "thor"]];
for(list of heroes) {
    for(hero of list) {
        console.log(hero);
    }
}