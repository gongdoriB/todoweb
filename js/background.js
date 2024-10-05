const images = [
  "0.png",
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
const changeImage = images[Math.floor(Math.random() * images.length)];
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
bgImage.id = "background";

const button = document.getElementsByClassName("changecolor");

function change() {
  bgImage.src = `img/${images[Math.floor(Math.random() * images.length)]}`;
  console.log("clicked");
  console.log(changeImage);
  console.log(chosenImage);
}
button[0].addEventListener("click", change);
