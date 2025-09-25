function sum(a, b) {
    return a+b;
}

function isAdult(age) {
    if(age > 18) {
        return "Adult";
    }
    else {
        return "not Adult";
    }
    
}

function sumOfNumber(n) {
    let sum = 0;
    for(let i = 1; i<=n; i++) {
        sum += i;
        
    }
    return sum;
}


let str = ["hi", "hello", "bye", "!"];
function concat(str) {
    let result = "";
    for(let i = 0; i<str.length; i++) {
        result += str[i];

    }
    return result;
}

// console.log(sum(sum(1, 2), 3));

// console.log(isAdult(13));

// console.log(sumOfNumber(5));