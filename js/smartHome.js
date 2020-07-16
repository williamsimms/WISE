const date = new Date()
const featureSection = document.getElementById('features')
const scrollDownButton = document.querySelector('.signature-scroll-button')
const faders = document.querySelectorAll('.fade-in')
const sliders = document.querySelectorAll('.slide-in')
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

let featureSectionTop = featureSection.getBoundingClientRect().top
scrollDownButton.addEventListener('click', function () {
    $('html, body').animate({
        scrollTop: featureSectionTop
    }, 1000)
})

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

//Slide 
const slideOptions = {
    root: null,
    threshold: .2,
    rootMargin: '0px 0px -100px 0px'
}
const appearOnScrollSlide = new IntersectionObserver(function (entries, appearOnScrollSlide) {

    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add('translate')
            appearOnScrollSlide.unobserve(entry.target)
        }
    })

}, slideOptions)

// Change Slier Black On Scroll

sliders.forEach((slider) => {
    appearOnScrollSlide.observe(slider)
})