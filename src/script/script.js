var xmark = document.getElementById("xmark");
var slider = document.getElementById("slider");
var bars = document.getElementById("bars")

bars.addEventListener("click", () => {
    slider.style.transform = "translateX(0%)";
});

xmark.addEventListener("click", () => {
    slider.style.transform = "translateX(-100%)";
});