const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    // once the entire section/area is visible it will fade in
    threshold: 1,
    // 100px in from bottom
    // rootMargin: "0px, 0px, -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target)
            }
        })
    },
    appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})