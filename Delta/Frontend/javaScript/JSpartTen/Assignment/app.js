// qs 1. Try out the following events in Event Listener on youtr own : 
 // - mouseout
 // - keypress
 // - Scroll
 // - load

 let h1 = document.querySelector("h1");

 h1.addEventListener("mouseout", function() {
    h1.style.color = "pink";
    h1.style.backgroundColor = "yellow";
 })

 //---------------------------------------keypress-------------------------------------------------------------

 let inp = document.querySelector("input");

 inp.addEventListener("keypress", function(event) {
    console.log("key pressed ", event.key)
 })

 //-------------------------------------------scroll----------------------------------------------------------------------

 let box = document.querySelector("div");

 box.addEventListener("scroll", function() {
    console.log("Scrolling inside div.............");
 })

 window.addEventListener("scroll", function() {
    console.log("scrolling the pag inside...");
 })

 //-------------------------------------------- load -------------------------------------------------------------------------

 window.addEventListener("load", function() {
    console.log("page fully loaded!");

    alert("welcome! page is ready !");
 })

 //------------------------------------------------------------------------------------------------------------------------

 //qs 2. crate a button on the page using JavaScript. Add an event listener to the button that changes the  button's 
 // color to green when it is clicked.

 let btn = document.createElement("button");

 btn.innerText = "click me!";

 btn.style.padding = "10px 20px";
 btn.style.fontsize = "16px";
 btn.style.pointer = "cursor";

 document.body.appendChild(btn);

 btn.addEventListener("click", function() {
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
 })


 // qs 3. Create an input element on the page with a placeholder " enter your name " and an H2 heading on the page inside HTML.
 // The purpose of this input element is to enter a user's name so it should only input letters from a-z, A-Z and space (all other 
 // other characters should not be detected). 
// Whenever the user inputs their name, their input should be dynamically visible inside the heading. 
// [Please note that no other character apart from the allowed characters should be visible in the heading]

let input = document.querySelector("#name");
let h2 = document.querySelector("h2");

input.addEventListener("input", function() {
    let cleanvalue = input.value.replace(/[^a-zA-z]/g, "");
    input.value = cleanvalue;

    h2.innerText = cleanvalue;
})
