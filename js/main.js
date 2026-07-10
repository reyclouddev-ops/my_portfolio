/* ==========================
   ReyCloudProject
   main.js
========================== */

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 1500);
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

// Element Animation
document.querySelectorAll(
`
.about-box div,
.card,
.project-card,
.contact-box,
.hero-left,
.hero-right
`
).forEach((el) => {

    el.classList.add("fade-up");

    observer.observe(el);

});

// Navbar Background
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
        "rgba(6,11,22,.92)";

        header.style.backdropFilter =
        "blur(20px)";

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background =
        "rgba(10,15,25,.55)";

        header.style.boxShadow =
        "none";

    }

});

// Active Navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (pageYOffset >= top) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Smooth Scroll
navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        window.scrollTo({

            top: target.offsetTop - 70,

            behavior:"smooth"

        });

    });

});

// Scroll To Top
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#4da3ff";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "22px";
topBtn.style.boxShadow = "0 0 20px rgba(77,163,255,.5)";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// Footer Year
const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
    `© ${new Date().getFullYear()} ReyCloudProject. All Rights Reserved.`;

}
