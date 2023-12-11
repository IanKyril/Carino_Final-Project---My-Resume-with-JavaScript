document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    function handleIntersection(entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }

    var observer = new IntersectionObserver(handleIntersection, options);
    var fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach(function (element) {
        observer.observe(element);
    });
});

function flipBox(element) {
    element.classList.toggle("flipped");
}

function animateSkills() {
    const skillsBars = document.querySelectorAll('.skill-bar');
    skillsBars.forEach(skillBar => {
        const targetWidth = skillBar.getAttribute('data-width');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillBar.style.width = targetWidth;
                    skillBar.innerText = targetWidth;
                    observer.unobserve(skillBar);
                }
            });
        });
        observer.observe(skillBar);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var scrollUpBtn = document.getElementById("scrollUpBtn");

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollUpBtn.style.display = "block";
        } else {
            scrollUpBtn.style.display = "none";
        }
    });

    scrollUpBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
function toggleMenu() {
    var navMenu = document.getElementById("navMenu");
    navMenu.style.display = (navMenu.style.display === 'block') ? 'none' : 'block';
}
