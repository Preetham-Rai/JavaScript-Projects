const abtUs = document.querySelector(".about-us");
const aboutContent = document.getElementById("about-content");

abtUs.addEventListener("click", () => {
  aboutContent.classList.toggle("toggleAbt");
});

const readMore = document.querySelector(".read-more");
const readMoreContent = document.getElementById("readMore-content");

readMore.addEventListener("click", () => {
  readMoreContent.classList.toggle("toggleRdm");
});

//fetching fake data from fake shop
