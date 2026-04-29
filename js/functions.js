function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));
    slides[index].classList.add("active");
    dots[index].classList.add("active");
    current = index;
}


function autoSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}


function resetAuto() {
    clearInterval(interval);
    interval = setInterval(autoSlide, 6000);
}

function startCounter(counter) {
  let target = +(counter.dataset.target);
  let count = 0;

  let increment = target / 100;

  let interval = setInterval(() => {
    count += increment;

    if (count >= target) {
      counter.innerText = target;
      clearInterval(interval);
    } else {
      counter.innerText = Math.floor(count);
    }
  }, 20);
}
