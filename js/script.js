const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        observerInstance.unobserve(entry.target);
    });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach((element) => {
    observer.observe(element);
});