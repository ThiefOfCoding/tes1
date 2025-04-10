// Scroll-triggered
const scrollElements = document.querySelectorAll(".scroll-animate");

function elementInView(el, offset = 100) {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
}

function displayScrollElement(el) {
  el.classList.add("visible");
}

function handleScrollAnimation() {
  scrollElements.forEach(el => {
    if (elementInView(el)) {
      displayScrollElement(el);
    }
  });
}

window.addEventListener("scroll", handleScrollAnimation);
document.addEventListener("DOMContentLoaded", handleScrollAnimation);

// Botão "ver mais"
document.querySelectorAll(".reveal-btn").forEach(button => {
  button.addEventListener("click", () => {
    const hidden = button.nextElementSibling;
    hidden.style.display = "block";
    button.style.display = "none";
  });
});

// Vanilla Tilt 3D
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
});

// Partículas.js
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#00eaff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 4 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00f0ff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.7 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Slideshow
let slideIndex = 0;
showSlides();

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "block" : "none";
  });
}
