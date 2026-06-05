// ============================
// SMOOTH SCROLL
// ============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }

    });

});

// ============================
// STICKY NAVBAR
// ============================

const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {

        header.classList.add('sticky');

    } else {

        header.classList.remove('sticky');

    }

});

// ============================
// ACTIVE NAV LINKS
// ============================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute('id');

        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (
            link.getAttribute('href') === '#' + current
        ) {

            link.classList.add('active');

        }

    });

});

// ============================
// SCROLL REVEAL ANIMATION
// ============================

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show');

            }

        });

    },

    {
        threshold: 0.15
    }

);

document.querySelectorAll('.hidden').forEach(el => {

    observer.observe(el);

});

// ============================
// ANIMATED COUNTERS
// ============================

const statsSection = document.querySelector('.stats');
const counters = document.querySelectorAll('.stat h2');

let counterStarted = false;

function startCounters() {

    counters.forEach(counter => {

        const target = parseInt(
            counter.innerText.replace('+', '')
        );

        let count = 0;

        const increment = Math.ceil(target / 50);

        function updateCounter() {

            count += increment;

            if (count < target) {

                counter.innerText = count + '+';

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + '+';

            }

        }

        updateCounter();

    });

}

window.addEventListener('scroll', () => {

    if (!statsSection) return;

    const triggerPoint =
        statsSection.offsetTop - window.innerHeight + 150;

    if (
        window.scrollY > triggerPoint &&
        !counterStarted
    ) {

        counterStarted = true;
        startCounters();

    }

});

// ============================
// PORTFOLIO CARD EFFECTS
// ============================

const cards = document.querySelectorAll('.video-card');

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform = 'translateY(-10px)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = 'translateY(0px)';

    });

});

// ============================
// MOBILE MENU
// ============================

const menuToggle =
    document.querySelector('.menu-toggle');

const nav =
    document.querySelector('nav');

if (menuToggle) {

    menuToggle.addEventListener('click', () => {

        nav.classList.toggle('active');

        menuToggle.classList.toggle('open');

    });

}

// ============================
// HERO PARALLAX EFFECT
// ============================

const heroImage =
    document.querySelector('.hero-image');

window.addEventListener('scroll', () => {

    if (heroImage) {

        const scroll = window.pageYOffset;

        heroImage.style.transform =
            `translateY(${scroll * 0.15}px)`;

    }

});

// ============================
// PRELOAD ANIMATION
// ============================

window.addEventListener('load', () => {

    document.body.classList.add('loaded');

});

// ============================
// CURRENT YEAR AUTO UPDATE
// ============================

const yearElement =
    document.querySelector('.year');

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}
















document.querySelectorAll('.video-card').forEach(card => {

    const video = card.querySelector('video');

    card.addEventListener('mouseenter', () => {
        video.play();
    });

    card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });

});