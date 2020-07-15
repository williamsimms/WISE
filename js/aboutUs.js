const scrollDownButton = document.querySelector('.scroll-down-button')
const aboutSection = document.getElementById('about')
const faders = document.querySelectorAll('.fade-in')
const copyright = document.getElementById('copyright')
const date = new Date()
const glider = document.querySelector('.glider')
const currentDate = {
    '0': 'January',
    '1': 'February',
    '2': 'March',
    '3': 'April',
    '4': 'May',
    '5': 'June',
    '6': 'July',
    '7': 'August',
    '8': 'September',
    '9': 'October',
    '10': 'November',
    '11': 'December'
}


function setDate() {
    copyright.innerText = `${currentDate[date.getMonth()]} ${date.getFullYear()}`
}
setDate()


let aboutUsSectionTop = about.getBoundingClientRect().top
scrollDownButton.addEventListener('click', function () {
    $('html, body').animate({
        scrollTop: aboutUsSectionTop
    }, 1200)
})



// Faders Intersection Observer

const fadeOptions = {
    root: null,
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
}
const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {

    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add('appear')
            appearOnScroll.unobserve(entry.target)
        }
    })

}, fadeOptions)


faders.forEach((fader) => {
    appearOnScroll.observe(fader)
})



// Glider Carousel

new Glider(glider, {
    slidesToShow: 3,
    slidesToScroll: 8,
    draggable: true,
    dots: '#dots',
    dragVelocity: 1.5,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [{
            // screens greater than >= 1024px
            breakpoint: 300,
            settings: {
                scrollLock: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            // screens greater than >= 775px
            breakpoint: 750,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 'auto',
                itemWidth: 150,
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            // screens greater than >= 1024px
            breakpoint: 1600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 8,
            }
        }
    ]
});