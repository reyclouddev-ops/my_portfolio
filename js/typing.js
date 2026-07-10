/* ==========================
   ReyCloudProject
   typing.js
========================== */

const typingElement = document.getElementById("typing");

const words = [
    "Full Stack Developer",
    "REST API Developer",
    "WhatsApp Bot Developer",
    "Telegram Bot Developer",
    "Hosting Provider",
    "Pterodactyl Developer",
    "Open Source Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;
let speed = 100;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
        currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;
            speed = 1800;

        } else {

            speed = 100;

        }

    } else {

        typingElement.textContent =
        currentWord.substring(0, charIndex - 1);

        charIndex--;

        speed = 50;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

            speed = 500;

        }

    }

    setTimeout(typeEffect, speed);

}

document.addEventListener("DOMContentLoaded", () => {

    if (typingElement) {
        typeEffect();
    }

});
