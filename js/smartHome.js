const date = new Date()
const videosSection = document.getElementById('video')
const videoOne = document.querySelector('.videoOne')
const featureSection = document.getElementById('features')
const scrollDownButton = document.querySelector('.signature-scroll-button')
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

let videosSectionTop = videosSection.getBoundingClientRect().top
scrollDownButton.addEventListener('click', function () {
    $('html, body').animate({
        scrollTop: videosSectionTop
    }, 1000)
})

const controller = new ScrollMagic.Controller()

const scene = new ScrollMagic.Scene({
        duration: 21000,
        triggerElement: videosSection,
        triggerHook: 0
    })
    .setPin(videosSection)
    .addTo(controller)



let scrollPos = 0

scene.on('update', e => {
    scrollPos = e.scrollPos / 1000
})

setInterval(() => {


    videoOne.currentTime = scrollPos
}, 33.3)