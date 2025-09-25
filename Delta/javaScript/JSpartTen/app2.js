// let btn = document.querySelector('button');
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// let p = document.querySelector('p');



// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);

//----------------------------------------------------------------------------------------------------------------------------

// let btn = document.querySelector("button");
// btn.addEventListener("click", function(event) {
//     console.log(event);
//     console.log("button clicked");
// })

// btn.addEventListener("dblclick", function() {
//     console.log(event);
//     console.log("button clicked")
// })

//----------------------------------------------------------------------------------------------------------------------
// let ipt = document.querySelector("input");
// // ipt.addEventListener("keydown", function(event) {
// //     console.log(event);
// //     console.log("key was pressed");
// // })

// ipt.addEventListener("keyup", function() {
//     console.log(event);
//     console.log("key = ", event.key);
//     console.log("code = ", event.code);
//     console.log("key was release");
// })

//---------------------------------------------------------------------------------------------------------------------

// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function(event) { 
//     console.log("code = ", event.code); // ArrowUp, ArrowDown, ArrowLeft, ArrowRight
//     if(event.code == "ArrowUp") {
//         console.log("Character moves forward!");
//     } else if(event.code == "ArrowDown") {
//         console.log("Character moves backward!");
//     } else if(event.code == "ArrowLeft") {
//         console.log("Character moves Left!");
//     } else if(event.code == "ArrowRight") {
//         console.log("Character Arrow right!");
//     }

// });

//--------------------------------------------------------------------------------------------------------------------------

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.dir(form);
//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//     console.log(user.value);
//     console.log(pass.value);

//     alert(`hi ${user.value}, your password is set to ${pass.value}`);
// });

// // ---------------------------------------------------------------------------------------------------------------------------

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.dir(form);

//     let user = this.elements[0];
//     let pass = this.elements[1];
//     console.log(user.value);
//     console.log(pass.value);

//     alert(`hi ${user.valu}, your password is set to ${pass.value}`);
// })

//----------------------------------------------------------------------------------------------------------------------------

let form = document.querySelector('form');
form.addEventListener("submit", function(event) {
    event.preventDefault();
})

let user = document.querySelector("#user");
user.addEventListener("change", function(){
    console.log("change event");
    console.log("final value = ",this.value);
})

user.addEventListener("input", function() {
    console.log("input event");
    console.log("final value = ", this.value);
})