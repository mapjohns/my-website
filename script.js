// Event Listener to play purring sounds on-click
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

// Event Listener to move petting hand via keydown
const hand = document.getElementById('petHand')
document.addEventListener('keydown',function(e) {
    if (e.key === 'ArrowUp') {
        ArrowUp()
    }
    else if (e.key === 'ArrowDown') {
        ArrowDown()
    }
    else if (e.key === 'ArrowRight') {
        ArrowRight()
    }
    else if (e.key === 'ArrowLeft') {
        ArrowLeft()
    }
})

function ArrowUp() {
    let topNum = hand.style.top.replace("px",'')
    let topp = parseInt(topNum,10)
    hand.style.top = `${topp-8}px`
}

function ArrowDown() {
    let topNum = hand.style.top.replace("px",'')
    let topp = parseInt(topNum,10)
    hand.style.top = `${topp+8}px`
}

function ArrowRight() {
    let leftNum = hand.style.left.replace("px",'')
    let leff = parseInt(leftNum,10)
    hand.style.left = `${leff+8}px`
}

function ArrowLeft() {
    let leftNum = hand.style.left.replace("px",'')
    let leff = parseInt(leftNum,10)
    hand.style.left = `${leff-8}px`
}