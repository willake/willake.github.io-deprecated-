"use strict";

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var mobileNavContent = document.querySelector("#wil-mobile-nav-content");
var mobileNavContentLi = document.querySelectorAll("#wil-mobile-nav-content li");
// On click
hamburger.addEventListener("click", function() {
// Toggle class "is-active"
hamburger.classList.toggle("is-active");
// Do something else, like open/close menu
mobileNavContent.classList.toggle("close");
for(var index=0; index < mobileNavContentLi.length; index++) {
       mobileNavContentLi[index].classList.toggle("hide");
}
});