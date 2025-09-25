// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i < smallImages.length; i++) {
//     smallImages[i].src = "assets/spiderman_img.png";
//     // console.dir(smallImages[i].src);
//     console.log(`value of image no. ${i} is changed. `);
// }

// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("div a"));

// console.dir(document.querySelectorAll("p"));

// console.dir(document.querySelectorAll("div a"));


let link = document.querySelectorAll(".box a");

// for(let i = 0; i < link.length; i++) {
//     link[i].style.color = "yellow";
// }

for(links of link) {
    links.style.color = "green"; // inline style
}