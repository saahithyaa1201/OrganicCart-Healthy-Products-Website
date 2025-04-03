// Sticky Navbar
window.onscroll = function() {stickyNavbar()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Content Show/Hide
document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll(".policy-section");
    sections.forEach(section => {
        section.addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.querySelector("ul");
            if (this.classList.contains("active")) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});

