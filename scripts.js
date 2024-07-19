// Fetch the copyright year
let year = document.querySelector(".year");
year.textContent = new Date().getFullYear();

// Mobile Nav
const header = document.querySelector(".header");
const btnNav = document.querySelector(".btn-mobile-nav");
btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

//Smooth scrolling
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");
    if (href == "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href == "#sign-up") {
      console.log(href);
      const signUpEl = document.querySelector(href);
      const sectionTop =
        signUpEl.getBoundingClientRect().top + window.scrollY - 90;
      console.log(sectionTop);
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#") && href !== "#sign-up") {
      const sectionEl = document.querySelector(href);
      const sectionTop =
        sectionEl.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

// Sticky NAV
const sectionHero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);

// To avoid the flash of nav
window.addEventListener("resize", function () {
  const nav = document.querySelector(".main-nav");
  if (nav.classList.contains("nav-open")) {
    nav.style.transition = "none";
    nav.style.transform = "translateY(-100%)";
    nav.style.opacity = "0";
  }

  setTimeout(() => {
    nav.style.transition = "";
  }, 100);
});
