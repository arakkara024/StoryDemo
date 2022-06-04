// Variable Declaration 
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");
let image5 = document.getElementById("image5");
let image6 = document.getElementById("image6");
let image7 = document.getElementById("image7");
let continueBtn = document.getElementById("continue-btn");
let openBtn = document.getElementById("open");
let storyBoard = document.getElementById("storyBoard");
let startBtn = document.getElementById("start-btn");

// Start Button Function

startBtn.addEventListener("click", function() {
    startBtn.style.display = "none";
    image1.classList.add("animation");
    image2.classList.add("animation");
    image3.classList.add("animation");
    image4.classList.add("animation");
    image5.classList.add("animation");
    image6.classList.add("animation");
    image7.classList.add("animation");
    continueBtn.classList.add("animation");
});

// function stop() {
//     document.getElementById("button-container").classList.toggle("animationToggle")
// }
