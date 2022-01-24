//Modal Code ######################################################

var quoteModal = document.getElementById("quoteModal");
var quoteModalButton = document.getElementById("quoteModalButton");
var closeButton = document.getElementsByClassName("close")[0];

quoteModalButton.onclick = function(){
    quoteModal.style.display = "block";
}

closeButton.onclick = function(){
    quoteModal.style.display = "none";
}

window.addEventListener("click", function(event) {
    if(event.target == quoteModal){
        quoteModal.style.display = "none";
    }
});

//Carousel Code ###################################################

let images = ['Images/founder.jpg', 'Images/carol.png', 'Images/soren.png'];

const previous = document.getElementById("previous");
const next = document.getElementById("next");
const slide = document.getElementById("slide");
//const currentImage

previous.onclick = function previousCard(){
let currentBackground = window.getComputedStyle(slide, false);
currentBackground = currentBackground.backgroundImage.slice(4, -1).replace(/"/g, "");

alert(currentBackground);
}

next.onclick = function nextCard(){
    alert("NEXT");
}

/*
    On next button clicked
        Get current background image position in array
        If next image in array
            Background image = next image
        Else
            Background image = first image in array

    On previous button clicked
        Get current background image position in array
        If previous image in array
            Background image = previous image
        Else
            Background image = last image in array
*/

/*previous.addEventListener("click", function(){
    const currentCard = document.getElementsByClassName("view")[0];
    const previousCard = 
});*/


