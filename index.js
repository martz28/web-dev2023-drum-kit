var crash = new Audio("./sounds/crash.mp3");
var kick = new Audio("./sounds/kick-bass.mp3");
var snare = new Audio("./sounds/snare.mp3");
var tom1 = new Audio("./sounds/tom-1.mp3");
var tom2 = new Audio("./sounds/tom-2.mp3");
var tom3 = new Audio("./sounds/tom-3.mp3");
var tom4 = new Audio("./sounds/tom-4.mp3");

function playSound(button) {
  switch (button) {
    case "w":
      crash.play();
      break;
    case "a":
      kick.play();
      break;
    case "s":
      snare.play();
      break;
    case "d":
      tom1.play();
      break;
    case "j":
      tom2.play();
      break;
    case "k":
      tom3.play();
      break;
    case "l":
      tom4.play();
      break;
    default:
      console.log(button);
  }};



function buttonAnimation(button) {
    var activeButton = document.querySelector("." + button);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
document.querySelectorAll("button")[i].addEventListener("click", function () {
  var button = this.innerHTML;
  playSound(button);
  buttonAnimation(button);

})};


document.addEventListener("keydown", function(event) {
  var button = event.key;
  playSound(button);
  buttonAnimation(button);
});

