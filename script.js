// GSAP Animation for Header
gsap.from("#header h1", { duration: 1, opacity: 0, y: -50 });
gsap.from("#header p", { duration: 1, opacity: 0, y: 50, delay: 0.3 });

// Color Change on Scroll
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
