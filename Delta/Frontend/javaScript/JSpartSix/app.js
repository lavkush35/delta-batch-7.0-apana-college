function hello() {
    console.log("Hello akash");
}

function print1to5() {
    for(i = 1; i<=5; i++) {
        console.log(i);
    }
}

function isAdult() {
    let age = prompt("enter your age : ");
    if(age >= 18) {
        console.log("Adult");
    } else {
        console.log("Not adult");
    }
}

function poem() {
    console.log("Twinkle Twinkle,  little star");
    console.log("how I wonder what you are");
}

function diceRole() {
    let random = Math.floor(Math.random()*6)+1;
    console.log(random);
}

// hello();

// print1to5();

// isAdult();

// poem();

diceRole();


