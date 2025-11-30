// Interactive JS: Soft scroll highlight for sections
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');

    // Smoothly highlight visible sections on scroll
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

            // Check if section is in the viewport
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.style.backgroundColor = "#ffe0eb"; // soft pastel pink highlight
            } else {
                section.style.backgroundColor = "#ffe8f0"; // default pastel pink
            }
        });
    });
});