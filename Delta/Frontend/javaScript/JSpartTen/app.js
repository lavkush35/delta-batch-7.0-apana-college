// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function() {
//     // console.log("button was clicked"); 
//     alert('button was clicked')
// }

//-----------------------------------------------------------------------------------------------------------------------

// let btns = document.querySelectorAll('button');
// for(button of btns) {
    
//     button.onclick = sayHello;
//     console.dir(button);
// }

// function sayHello() {
//     alert("Hello!");
// }

//--------------------------------------------------------------------------------------------------------------------------

// let btn = document.querySelectorAll('button');
// for(btns of btn) {
//     btns.onclick = sayHello;
//     btns.onmouseenter = function() {
//         console.log("you entered a button");
//     };
//     console.dir(btns);
// }

// function sayHello(){
//     alert("Hello1");
// }

//-------------------------------------------------------------------------------------------------------------------------------

// let btn = document.querySelectorAll('button');

// for(btns of btn) {
//     btns.addEventListener("click", sayHello);
//     btns.addEventListener("click", sayName);
// }

// function sayHello() { 
//     alert('Hello');
// }

// function sayName() {
//     alert('apana College');
// }

//-----------------------------------------------------------------------------------------------------------------------

let btn = document.querySelectorAll('button');
for(btns of btn) {
    btns.addEventListener("dblclick", function() {
        console.log(" you double clicked me!")
    });
};
