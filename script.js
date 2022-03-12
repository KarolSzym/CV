function animatedProgressBars() {
const htmlBar = document.querySelector("#html");
htmlBar.classList.add("progress-meter-html");
const cssBar = document.querySelector("#css");
cssBar.classList.add("progress-meter-css");
const jsBar = document.querySelector("#js");
jsBar.classList.add("progress-meter-js");
const wpBar = document.querySelector("#wp");
wpBar.classList.add("progress-meter-wp");
const engBar = document.querySelector("#eng");
engBar.classList.add("progress-meter-eng");
//const gimpBar = document.querySelector("#gimp");
//gimpBar.classList.add("progress-meter-gimp");
}

animatedProgressBars();

function animatedSiteLoad() {
const fadeIn = document.querySelector("main");
fadeIn.classList.add("fade-in");
}

window.addEventListener("load", animatedSiteLoad());
