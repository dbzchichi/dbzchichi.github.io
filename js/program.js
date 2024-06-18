let animatedGif = document.getElementById('animated-gif');
let animatedGif1 = document.getElementById('animated-gif-1');
let animatedGif2 = document.getElementById('animated-gif-2');
let animatedGif3 = document.getElementById('animated-gif-3');
let animatedGif4 = document.getElementById('animated-gif-4');
let learnMore1 = document.getElementById('learn-more-1');
let learnMore2 = document.getElementById('learn-more-2');
let learnMore3 = document.getElementById('learn-more-3');
let learnMore4 = document.getElementById('learn-more-4');

animatedGif1.addEventListener("mouseover", function(event) {
    animatedGif.style.background = 'linear-gradient(to bottom, rgba(245, 246, 252, 0.32), rgba(117, 19, 93, 0.53)), url("../images/tigers.gif")';
    animatedGif.style.backgroundSize = "cover";
    learnMore1.style.display = "inline";
}, false);

animatedGif1.addEventListener("mouseout", function(event) {
    learnMore1.style.display = "none";

}, false);

animatedGif2.addEventListener("mouseover", function(event) {
    animatedGif.style.background = 'linear-gradient(to bottom, rgba(245, 246, 252, 0.32), rgba(117, 19, 93, 0.53)), url("../images/kids.gif")';
    animatedGif.style.backgroundSize = "cover";
    learnMore2.style.display = "inline";
    console.log("2-mouseover");
}, false);

animatedGif2.addEventListener("mouseout", function(event) {
    learnMore2.style.display = "none";
    console.log("2-mouseout");

}, false);


animatedGif3.addEventListener("mouseover", function(event) {
    animatedGif.style.background = 'linear-gradient(to bottom, rgba(245, 246, 252, 0.32), rgba(117, 19, 93, 0.53)), url("../images/adults.gif")';
    animatedGif.style.backgroundSize = "cover";
    learnMore3.style.display = "inline";
}, false);

animatedGif3.addEventListener("mouseout", function(event) {
    learnMore3.style.display = "none";
    console.log("3-mouseout");
}, false);

animatedGif4.addEventListener("mouseover", function(event) {
    animatedGif.style.background = 'linear-gradient(to bottom, rgba(245, 246, 252, 0.32), rgba(117, 19, 93, 0.53)), url("../images/krav.gif")';
    animatedGif.style.backgroundSize = "cover";
    learnMore4.style.display = "inline";
}, false);

animatedGif4.addEventListener("mouseout", function(event) {
    learnMore4.style.display = "none";
    console.log("4-mouseout");
}, false);