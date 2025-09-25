// qs 1. Create a new input and button element on the page using JavaScript only. Set the text of button to "Click me";

let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = "Click me!";
let body = document.querySelector('body');
body.append(input);
body.append(button);

// qs 2. Add following attributes to the element : 
//   - Change placeholder value of input to "username"
//   - Change the id of button to "btn"

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

// qs 3.   Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.

btn.setAttribute("id", "button");
button.classList.add('btn');


// qs 4. Create an h1 element on the page anad set it text to "DOM Prctice" underlined. change its color to purple.

let h1 = document.createElement('h1');
h1.innerHTML = "<u>DOM Practice</u>";
h1.classList.add('u');
document.querySelector('body').append(h1);

// qs 5. Create  a p tag on the page and set its text to "Apna College Delta Practice", where Delta is bold.

let p = document.createElement('p');
p.innerHTML = "Apna college <b>Delta</b> Practice";
document.querySelector('body').append(p);