const scrollDownButton = document.querySelector('.freq-scroll-button')
const date = new Date()
const faders = document.querySelectorAll('.fade-in')
const freqSection = document.getElementById('freq')
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



let freqSectionTop = freqSection.getBoundingClientRect().top
scrollDownButton.addEventListener('click', function () {
    $('html, body').animate({
        scrollTop: freqSectionTop
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
