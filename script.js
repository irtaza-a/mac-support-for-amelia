// Simple JS for interactive functionality
document.addEventListener("DOMContentLoaded", () => {
    // Example: Highlight sections on scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if(rect.top < window.innerHeight && rect.bottom >= 0) {
                section.style.backgroundColor = "#eaf3fc";
            } else {
                section.style.backgroundColor = "#fff";
            }
        });
    });
});