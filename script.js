/* ===========================
   LOADER
=========================== */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
});

/* ===========================
   IMAGE SLIDER
=========================== */

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

if (slides.length > 0) {
    showSlide(currentSlide);
    setInterval(nextSlide, 4000);
}

/* ===========================
   COUNTER
=========================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (current < target) {
            counter.innerText = current + increment;
            setTimeout(updateCounter, 25);
        } else {
            counter.innerText = target;
        }

    };

    updateCounter();

});

/* ===========================
   SCROLL ANIMATION
=========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});


document.querySelectorAll(".fade-up").forEach(el => {
    observer.observe(el);
});
/* ===========================
   SCROLL ANIMATION
=========================== */

const fadeElements = document.querySelectorAll(".fade-up");

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    fadeElements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ===========================
   BACK TO TOP BUTTON
=========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (!topBtn) return;

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* ===========================
   DARK MODE
=========================== */

const darkToggle = document.getElementById("darkModeBtn");

if (darkToggle) {

    darkToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    });

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

}

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

console.log("✅ Salade Baba Pratishthan Website Loaded Successfully");
