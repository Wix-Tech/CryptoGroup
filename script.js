document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for "Discover Our Vibe" button
    const scrollToSectionBtn = document.querySelector('.scroll-to-section');
    if (scrollToSectionBtn) {
        scrollToSectionBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // --- Advanced Animations with GSAP (Highly Recommended for this level of animation) ---
    // If you plan to use GSAP, uncomment the GSAP script tags in index.html
    // and use this section.

    // Example of how you would use GSAP for a more complex Hero Section animation
    // if (typeof gsap !== 'undefined') {
    //     gsap.from(".hero-content h1", {
    //         opacity: 0,
    // y: -50,
    // duration: 1,
    // ease: "power3.out",
    // delay: 0.5
    //     });
    //     gsap.from(".hero-content p", {
    //         opacity: 0,
    // y: 50,
    // duration: 1,
    // ease: "power3.out",
    // delay: 0.7
    //     });
    //     gsap.from(".hero-content .btn", {
    //         opacity: 0,
    // scale: 0.8,
    // duration: 0.8,
    // ease: "back.out(1.7)",
    // delay: 1
    //     });

    //     // Animate pillars on scroll (requires GSAP ScrollTrigger plugin)
    //     // If using ScrollTrigger, ensure the script tag is uncommented in index.html
    //     // gsap.utils.toArray(".pillar-card").forEach((card, i) => {
    //     //     gsap.from(card, {
    //     //         opacity: 0,
    //     //         y: 50,
    //     //         rotation: 5,
    //     //         duration: 1,
    //     //         ease: "power2.out",
    //     //         scrollTrigger: {
    //     //             trigger: card,
    //     //             start: "top 85%", // When top of card is 85% from top of viewport
    //     //             toggleActions: "play none none reverse",
    //     //             // markers: true // For debugging
    //     //         }
    //     //     });
    //     // });
    // }

    // --- Custom JavaScript for Advanced Button Effects (if not using GSAP for buttons) ---

    // Yappers Button: Subtle Wobble on Hover (more advanced than CSS hover)
    const yappersBtn = document.querySelector('.btn-yappers');
    if (yappersBtn) {
        yappersBtn.addEventListener('mouseover', () => {
            // Apply a class that triggers a CSS animation, or use JS for precise control
            yappersBtn.classList.add('wobble-active');
        });
        yappersBtn.addEventListener('animationend', () => {
            yappersBtn.classList.remove('wobble-active');
        });
    }

    // Airdrops Button: More Complex Glow/Particle Effect (conceptual, would need a library or canvas)
    const airdropsBtn = document.querySelector('.btn-airdrops');
    if (airdropsBtn) {
        airdropsBtn.addEventListener('mouseover', () => {
            // For a "coin particle" effect, you'd typically use a JS particle library
            // or draw on a <canvas> element. This is illustrative.
            console.log("Airdrops button hovered: Imagine particles!");
            // Example: airdropsBtn.style.setProperty('--glow-size', '40px'); // CSS variable
        });
        airdropsBtn.addEventListener('mouseout', () => {
            // airdropsBtn.style.setProperty('--glow-size', '25px');
        });
    }

    // Degen Button: More pronounced flicker/glitch on hover
    const degenBtn = document.querySelector('.btn-degen');
    if (degenBtn) {
        degenBtn.addEventListener('mouseover', () => {
            degenBtn.classList.add('glitch-active');
        });
        degenBtn.addEventListener('mouseout', () => {
            degenBtn.classList.remove('glitch-active');
        });
        // You'd need more CSS for .glitch-active to define keyframes for the glitch
        // A simple example for a glitch (add this to your CSS for .glitch-active):
        /*
        .glitch-active {
            animation: degenGlitch 0.1s infinite alternate;
        }
        @keyframes degenGlitch {
            0% { transform: translate(1px, 1px); }
            25% { transform: translate(-1px, -1px); }
            50% { transform: translate(1px, -1px); }
            75% { transform: translate(-1px, 1px); }
            100% { transform: translate(0, 0); }
        }
        */
    }

});
