gsap.from(".info-h1", {
  opacity: 0,
  duration: 1,
  delay: 1.2,
  y: -50,
  stagger: 0.6,
});

gsap.from(".info-part", {
  opacity: 0,
  duration: 1,
  y: -50,
  //   ease: "Power2.easeInOut",
});

gsap.from("img", {
  duration: 1,
  //   x: 130,
  delay: 1.4,
  opacity: 0,
});
gsap.from(".img-1", {
  duration: 1,
  delay: 1.1,
  backgroundPosition: "200px 0px",
  opacity: 0,
});
const nav = document.querySelector(".navbar");
const header = document.querySelector(".navbar");

const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//Revealing Elements on Scroll
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.3,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
