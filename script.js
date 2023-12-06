//toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilang navbar
const hamberger = document.querySelector(`#hamberger-menu`);

document.addEventListener(`click`, function (e) {
  if (!hamberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove(`active`);
  }
});
