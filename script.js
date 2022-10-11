var h3 = document.querySelector("#backgroundGradient");
var textcolor = document.querySelector("#textcolor");

var textColor = document.querySelector(".textColor");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var BgBlock = document.querySelector(".BgBlock");
var textcolorBlock = document.querySelector(".textcolorBlock");
var body = document.getElementById("gradient");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  h3.textContent = "background: " + body.style.background + ";";
}
function setTextColor() {
  body.style.color = textColor.value;
  textcolor.textContent = "color: " + body.style.color + ";";
}

function setBorder() {
  BgBlock.style.border = "2px solid" + textColor.value;
  textcolorBlock.style.border = "2px solid" + textColor.value;
}
BgBlock.addEventListener("input", setBorder);
textcolorBlock.addEventListener("input", setBorder);
textColor.addEventListener("input", setTextColor);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
