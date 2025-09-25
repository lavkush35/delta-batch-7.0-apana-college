function printName(name) {
    console.log(name);
}

function printInfo(name, age){
    console.log(`${name}'s age is ${age}`);
}

function sum(a, b){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
}

// this function is Average
function avg(a, b, c) {
    console.log("Average is ", (a+b+c)/3);
}

// pqs 2. Create a function that prints the multiplication table of  a number.
function printTable() {
    let num = prompt("enter table number");
    for(let i = 1; i<=10; i++) {
        console.log(num + " " + "*" + " " + i + " " + "=" + " " + num*i);
    }
}


printTable();
// avg(4,5,23);

// sum(12, 3);
// sum(123, 23);
// sum(432, 232)
// printInfo("Luvkush katara", 22);
// printInfo("karan");
// printName("Luvkush katara");

