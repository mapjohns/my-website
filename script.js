const catPurr = document.getElementById("catty");

catPurr.addEventListener("click", playPurr);

const catsPurr = document.getElementsByClassName("catImages")

for (let i = 0; i < catsPurr.length; i++) {
    catsPurr[i].addEventListener("click",playPurr);
}

function playPurr(){
    let audio = new Audio("cat_purr.mp3");
    audio.play();
}