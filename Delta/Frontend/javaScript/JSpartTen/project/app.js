let p = document.querySelector("p");
p.addEventListener("mouseenter", function() {
    console.log("parah was clicked");
});

let div = document.querySelector("#box");
div.addEventListener("mouseenter", function() {
    console.log("mouse inside box");
});


//---------------------------------------------------------------------------------------------------------------------------

let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    let h1 = document.querySelector("h1");
    let randomColor = getRandomColor();
    h1.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    console.log("color updated");
})

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

