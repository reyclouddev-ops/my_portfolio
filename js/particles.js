/* ==========================
   ReyCloudProject
   particles.js
========================== */

const container = document.querySelector(".particles");

if (container) {

    // Membuat partikel
    for (let i = 0; i < 60; i++) {

        const particle = document.createElement("span");

        const size = Math.random() * 6 + 2;

        particle.style.position = "absolute";
        particle.style.width = size + "px";
        particle.style.height = size + "px";
        particle.style.borderRadius = "50%";
        particle.style.background = "#4da3ff";
        particle.style.opacity = (Math.random() * 0.7 + 0.2).toFixed(2);

        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";

        particle.style.boxShadow =
            "0 0 10px rgba(77,163,255,.8)";

        const duration = Math.random() * 12 + 8;

        particle.style.animation =
            `floatParticle ${duration}s linear infinite`;

        particle.style.animationDelay =
            `${Math.random() * 5}s`;

        container.appendChild(particle);

    }

    // CSS Animation
    const style = document.createElement("style");

    style.innerHTML = `
    @keyframes floatParticle{

        0%{
            transform:translateY(0) translateX(0);
        }

        25%{
            transform:translateY(-40px) translateX(20px);
        }

        50%{
            transform:translateY(-80px) translateX(-20px);
        }

        75%{
            transform:translateY(-40px) translateX(15px);
        }

        100%{
            transform:translateY(0) translateX(0);
        }

    }

    .particles{
        position:fixed;
        inset:0;
        overflow:hidden;
        pointer-events:none;
        z-index:-1;
    }

    .particles span{
        will-change:transform;
    }
    `;

    document.head.appendChild(style);

}
