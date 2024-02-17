"use strict";
const plusButtons = document.querySelectorAll(".plus-button");
const paragraphs = document.querySelectorAll(".show");
const titleClick = document.querySelectorAll(".title-click");

for (let i = 0; i < plusButtons.length; i++) {
  //Adds a eventListener to all the plus buttons
  plusButtons[i].addEventListener("click", () => {
    //loops through the parapgrahs and remove the class "none"
    paragraphs[i].classList.remove("none");

    if (plusButtons[i].getAttribute("src") === "assets/images/icon-plus.svg") {
      plusButtons[i].setAttribute("src", "assets/images/icon-minus.svg");
    } else {
      plusButtons[i].setAttribute("src", "assets/images/icon-plus.svg");
      paragraphs[i].classList.add("none");
    }
  });
}

for (let i = 0; titleClick.length; i++) {
  titleClick[i].addEventListener("click", () => {
    paragraphs[i].classList.remove("none");

    if (plusButtons[i].getAttribute("src") === "assets/images/icon-plus.svg") {
      plusButtons[i].setAttribute("src", "assets/images/icon-minus.svg");
    } else {
      plusButtons[i].setAttribute("src", "assets/images/icon-plus.svg");
      paragraphs[i].classList.add("none");
    }
  });
}
