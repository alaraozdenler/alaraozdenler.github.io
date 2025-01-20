// script.js

// Get the modal
var modal = document.getElementById("imageModal");

// Get all images with class "popup-img"
var images = document.querySelectorAll(".popup-img");

// Get the modal image element and caption
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

// Loop through images and add click event
images.forEach(function (img) {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.getAttribute("data-img");
        captionText.innerHTML = this.alt;
    }
});

// Get the <span> element to close the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
close.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
