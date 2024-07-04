window.addEventListener('scroll', () => {
    const fadeIns = document.querySelectorAll('.fade-in');
    const windowBottom = window.innerHeight + window.scrollY;

    fadeIns.forEach(fadeIn => {
        const fadeInTop = fadeIn.getBoundingClientRect().top + window.scrollY;

        if (windowBottom >= fadeInTop) {
            fadeIn.classList.add('visible');
        }
    });
});
