document.documentElement.classList.add("js");

// Mobile navigation toggle
var btn = document.querySelector(".menu-btn");
var links = document.querySelector(".links");
if (btn && links) {
  btn.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// Reveal on scroll
var items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
} else {
  items.forEach(function (el) { el.classList.add("in"); });
}

// Footer year
var y = document.getElementById("year");
if (y) { y.textContent = new Date().getFullYear(); }
