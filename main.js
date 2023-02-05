const menuIcon = document.querySelector("nav .toggle-menu");
const menu = document.querySelector("nav ul");
const goUpBtn = document.querySelector("button.go-up");

const statsSec = document.querySelector(".stats");
const numbers = document.querySelectorAll(".stats .number");
let started = false;

const skillSec = document.querySelector(".our-skills");
const progressSpan = document.querySelectorAll(".prog span");

menuIcon.onclick = function () {
  menu.classList.toggle("show-menu");
};

window.onscroll = function () {
  // Go up button
  if (scrollY > 1200) {
    goUpBtn.classList.add("show-btn");
  } else {
    goUpBtn.classList.remove("show-btn");
  }
  // Stats Section
  if (window.scrollY >= statsSec.offsetTop - 260) {
    if (!started) {
      numbers.forEach((num) => increaseNum(num));
    }
    started = true;
  }
  // Skills Section
  if (scrollY >= skillSec.offsetTop - 100) {
    console.log("increase");
    progressSpan.forEach((e) => (e.style.width = e.dataset.progress));
  }
};
goUpBtn.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};
// Stats section
function increaseNum(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;

    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 1500 / goal);
}
