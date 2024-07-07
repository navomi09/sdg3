window.onload = () => {
    gsap.from("h1", { duration: 2, opacity: 0, y: -50 });
    gsap.from("h2", { duration: 2, opacity: 0, y: 50, delay: 1 });
    gsap.from(".android-logo", { duration: 2, opacity: 0, scale: 0.5, delay: 2 });
    gsap.from(".about-item", { duration: 1, opacity: 0, x: -50, stagger: 0.2, delay: 3 });

    document.querySelector('nav ul li a[href="#contact"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });
};
