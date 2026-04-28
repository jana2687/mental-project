let slides = document.querySelectorAll(".slide"),
  dots = document.querySelectorAll(".indicators button"),
  firstAbout = document.querySelector("#about .first"),
  secondAbout = document.querySelector("#about .second"),
  current = 0,
  interval;
dots.forEach(function (dot) {
  dot.addEventListener("click", function () {
    let index = +(this.dataset.index);
    showSlide(index);
    resetAuto();
  });
});

window.addEventListener("load", () => {
  showSlide(0);
});
interval = setInterval(autoSlide, 6000);

window.addEventListener("scroll", () => {
  let nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
})
const sections = document.querySelectorAll(".animate"),
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }

    });
  }, {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px"
  });

sections.forEach((section) => {
  observer.observe(section);
});
AOS.init();