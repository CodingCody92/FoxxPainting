const faders = document.querySelectorAll('.fade-in');

let header = document.querySelector('.header');
let navbar = document.querySelector('.navbar');
let bars = document.getElementById('menu-bar');
let appoint = document.querySelector('.btn')

window.onscroll = () => {
    if (window.scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};

bars.addEventListener('click', () => {
    bars.style.color = 'black';
})

appoint.addEventListener('click', () => {
    appoint.style.backgroundColor = 'black';
    setTimeout(() => {
        appoint.style.backgroundColor = 'rgb(13, 73, 122)'
    }, 2000);
})


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