// (i). a <p> with red text that says "Hey I'm red!"---------------------------------------------------------------
let para = document.createElement('p');

para.innerText = "Hey, I am red!";

let body = document.querySelector('body').prepend(para);

para.classList.add("red");


// ---(ii).  an <h3> with blue text that says "i'm a blue h3!" ---------------------------------------
let h1 = document.createElement('h1');

h1.innerText = "hey, i  am blue!";

let body1 = document.querySelector('body').prepend(h1);

h1.classList.add('blue');


// (iV). a <div> with a black border and pink background color with the following elements inside of it:
// (a). another <h1> that says "I'm in a div"
// (b). a <p> that says "ME TOO!"

let div = document.createElement('div');
// div.classList.add("border");
let h2 = document.createElement("h2");
let p2 = document.createElement('p');

h2.innerText = "I'm in a div";
p2.innerText = "ME TOO!";
div.append(h2);
div.append(p2);
div.classList.add("box");

document.querySelector("body").prepend(div);