const navbar = document.querySelector("#navbar");
const navLinks = document.querySelectorAll(".nav-link");
const mainDoc = document.querySelector("#main-doc");
let navbarHidden = true;

function showNavbar() {
  if (navbarHidden) {
    navbar.style.cssText = "display: flex";
    mainDoc.style.cssText = "display: none";
    navbarHidden = false;
  } else {
    navbar.style.cssText = "display: none";
    mainDoc.style.cssText = "display: block";
    navbarHidden = true;
  }
}

navLinks.forEach(function (elem) {
  elem.addEventListener("click", (e) => {
    if (e.sourceCapabilities.firesTouchEvents) showNavbar();
  });
});
