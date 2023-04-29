window.addEventListener("DOMContentLoaded", (e) => {});
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const fadeEls = document.querySelectorAll(".has-fade");

const toggleBtn = (e) => {
  console.log(header.classList);
  if (!header.classList.contains("open")) {
    //open hamburger menu
    header.classList.add("open");
    body.classList.add("noscroll");
    fadeEls.forEach((el) => {
      el.classList.add("fade-in");
      el.classList.remove("fade-out");
    });
  } else {
    header.classList.remove("open"); //close hamburger menu
    body.classList.remove("noscroll");

    fadeEls.forEach((el) => {
      el.classList.add("fade-out");
      el.classList.remove("fade-in");
    });
  }
};
btnHamburger.addEventListener("click", toggleBtn);
