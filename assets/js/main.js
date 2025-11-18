document.addEventListener('DOMContentLoaded', function () {
    // === Footer year ===
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // === Scroll reveal ===
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Only animate once per element
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    reveals.forEach((el) => observer.observe(el));

    // === Very subtle background shift on scroll ===
    function updateBackgroundShift() {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollY = window.scrollY || window.pageYOffset;
        const ratio = maxScroll > 0 ? scrollY / maxScroll : 0;

        // Tiny range so it stays subtle (48% -> 52%)
        const offset = 48 + ratio * 4;

        document.body.style.backgroundPosition = `center ${offset}%`;
    }

    window.addEventListener('scroll', updateBackgroundShift, { passive: true });
    updateBackgroundShift();
});
