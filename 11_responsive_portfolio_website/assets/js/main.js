// SHOW MENUN: Y HIDDEN
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// SHOW MENU
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// HIDE MENU
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// REMOVE MENU MOBILE(when links are clicked)
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // remove show-menu class when links are clicked
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SKILLS ACCORDION
// const skillsContent = document.getElementsByClassName("skills__content"),
//   skillsHeader = document.querySelectorAll(".skills__header");

// function toggleSkills() {
//   let itemClass = this.parentNode.className;

//   // Close all
//   for (let i = 0; i < skillsContent.length; i++) {
//     skillsContent[i].classList.remove("skills__open");
//     skillsContent[i].classList.add("skills__close");
//   }

//   // Open the clicked one
//   if (itemClass === "skills__content skills__close") {
//     this.parentNode.classList.remove("skills__close");
//     this.parentNode.classList.add("skills__open");
//   }
// }

// skillsHeader.forEach((el) => {
//   el.addEventListener("click", toggleSkills);
// });

const skillsHeader = document.querySelectorAll(".skills__header");

skillsHeader.forEach((header) => {
  header.addEventListener("click", function () {
    const parent = this.parentNode; // this = clicked header

    // Close all others
    document.querySelectorAll(".skills__content").forEach((content) => {
      content.classList.remove("skills__open");
      content.classList.add("skills__close");
    });

    // Open current
    parent.classList.toggle("skills__open");
    parent.classList.toggle("skills__close");
  });
});

// QUALIFICATION TABS
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });

    tab.classList.add("qualification__active");
  });
});
