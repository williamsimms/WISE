const date = new Date().getFullYear()
const rotate = document.getElementById('rotated')
const circularText = document.querySelector('.circular-text')
const homeLink = document.querySelector('.arrow')
const hero = document.getElementById('hero')
const photoContainer = document.querySelector('.mission-photo-container')
const statementContainer = document.querySelector('.mission-statement')
const scrollDownButton = document.querySelector('.scroll-down')
const header = document.querySelector('.navigation-bar')
const home = document.getElementById('home')
const circle = new CircleType(rotate).radius(80)


$(window).scroll(function () {
    let offset = $(window).scrollTop()
    offset = offset * 0.4

    $('.circular-text').css({
        transform: 'rotate(' + offset + 'deg)'
    })
})

homeLink.addEventListener('click', function (e) {
    $('html, body').animate({
        scrollTop: 0
    }, 1800)
})

window.addEventListener('scroll', function () {
    scrollFn()
})

function scrollFn() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        circularText.style.opacity = 1
        homeLink.style.opacity = 1
        homeLink.style.pointerEvents = 'all'
    } else {
        circularText.style.opacity = 0
        homeLink.style.opacity = 0
        homeLink.style.pointerEvents = 'none'
    }
}

function missionAnimate() {
    if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {

    }
}

scrollDownButton.addEventListener('click', function () {
    $('html, body').animate({
        scrollTop: 969
    }, 1800)
})

$('.navigation-bar a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault()

        const hash = this.hash

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1800)
    }
})

// const sectionOneOptions = {
    // root: null,
    // threshhold: 0,
    // rootMargin: '1px'
// }
// const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
//     entries.forEach((entry) => {
//         if (!entry.isIntersecting) {
//            header.classList.add('scrolled-nav')
//         } else {
//             header.classList.remove('scrolled-nav')
//         }


//     })

// }, sectionOneOptions)

// sectionOneObserver.observe(home)


// IMAGES FADE OR SLIDE IN WITH INTERSECTION OBSERVER