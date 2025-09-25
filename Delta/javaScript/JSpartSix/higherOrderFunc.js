// function multipleGreet(func, count) { // higher order function
//     for(let i = 1; i<=count; i++) {
//         func();
//     }
// }

// let greet = function() {
//     console.log("hello");
// }

// multipleGreet(greet, 1000);
// multipleGreet(function() {console.log("namaste")}, 1000);



// function oddOrEvenFactory(request) {
//     if(request == "odd") {
//         return function(n) {
//             console.log(!(n%2 == 0));
//         }

//     } else if(request == "even") {
//         return function(n) {
//             console.log(n%2 == 0);
//         }

//     } else {
//         console.log("wrong request"); 
//     }
// }

// let request = "odd"; // even



// Methods

const calculator = {
    num : 55,
    add : function(a, b){
        return a+b;
    },
    sub : function(a, b) {
        return a - b;
    },
    mul: function(a, b)  {
        return a*b;
    }
}

// method shorthand
const calc = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a-b;
    },
    mul(a, b) {
        return a*b;
    }
}