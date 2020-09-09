const date = new Date()
const rotate = document.getElementById('rotated')
const circularText = document.querySelector('.circular-text')
const homeLink = document.querySelector('.arrow')
const hero = document.getElementById('hero')
const photoContainer = document.querySelector('.mission-photo-container')
const statementContainer = document.querySelector('.mission-statement')
const scrollDownButton = document.querySelector('.scroll-down')
const header = document.querySelector('.navigation-bar')
const home = document.getElementById('home')
const wiseHeader = document.querySelector('.wise-construction')
const navigationListLinks = Array.from(document.querySelectorAll('.navigation-list li a'))
const mobileNavMenu = document.getElementById('menu')
const circle = new CircleType(rotate).radius(80)
const faders = document.querySelectorAll('.fade-in')
const laptopFaders = document.querySelectorAll('.fade-in-laptop')
const sliders = document.querySelectorAll('.slide-in')
const portfolio = document.getElementById('portfolio')
const arrow = document.querySelector('.arrow-up')
const clientele = document.getElementById('clientele')
const copyright = document.getElementById('copyright')
const mobileNavigation = document.querySelector('.mobile-nav')
const mobileNavigationList = document.querySelector('.mobile-navigation-list')
const menu = document.getElementById('menu')
const menuIcon = document.querySelector('.menu-icon')
const missionSection = document.getElementById('mission')
const smartHomeSection = document.getElementById('smart')
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
  '11': 'December',
}

function setDate() {
  copyright.innerText = `${currentDate[date.getMonth()]} ${date.getFullYear()}`
}
setDate()

$(window).scroll(function () {
  let offset = $(window).scrollTop()
  offset = offset * 0.4

  $('.circular-text').css({
    transform: 'rotate(' + offset + 'deg)',
  })
})

homeLink.addEventListener('click', function (e) {
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    1800
  )
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

// Scroll Down Button Event Listeners
let missionSectionTop = missionSection.getBoundingClientRect().top
scrollDownButton.addEventListener('click', function () {
  $('html, body').animate(
    {
      scrollTop: missionSectionTop,
    },
    1200
  )
})

$('.navigation-bar a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault()

    const hash = this.hash

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      1800
    )
  }
})

const sectionOneOptions = {
  root: null,
  rootMargin: '-200px 0px 0px 0px',
}
const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add('scrolled-navigation')
      wiseHeader.classList.add('scrolled-navigation-text')
      navigationListLinks.forEach((a) => {
        a.classList.add('scrolled-navigation-text')
      })
    } else {
      header.classList.remove('scrolled-navigation')
      wiseHeader.classList.remove('scrolled-navigation-text')
      navigationListLinks.forEach((a) => {
        a.classList.remove('scrolled-navigation-text')
      })
    }
  })
}, sectionOneOptions)
sectionOneObserver.observe(home)

const fadeOptions = {
  root: null,
  threshold: 1,
  rootMargin: '0px 0px -100px 0px',
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

const slideOptions = {
  root: null,
  threshold: 0,
  rootMargin: '0px 0px -100px 0px',
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

const smartOptions = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
}
const smartObserver = new IntersectionObserver(function (entries, smartObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      circularText.classList.remove('dark-background-scroll')
      arrow.classList.remove('dark-arrow')
    } else {
      circularText.classList.add('dark-background-scroll')
      arrow.classList.add('dark-arrow')
    }
  })
}, smartOptions)

smartObserver.observe(smart)

const portfolioOptions = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
}
const portfolioObserver = new IntersectionObserver(function (entries, portfolioObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      circularText.classList.remove('dark-background-scroll')
      arrow.classList.remove('dark-arrow')
    } else {
      circularText.classList.add('dark-background-scroll')
      arrow.classList.add('dark-arrow')
    }
  })
}, portfolioOptions)

portfolioObserver.observe(portfolio)

const clienteleOptions = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
}
const clienteleObserver = new IntersectionObserver(function (entries, clienteleObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      circularText.classList.remove('dark-background-scroll')
      arrow.classList.remove('dark-arrow')
    } else {
      circularText.classList.add('dark-background-scroll')
      arrow.classList.add('dark-arrow')
    }
  })
}, clienteleOptions)

clienteleObserver.observe(clientele)

$('.footer-container ul:first-of-type li a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault()

    const hash = this.hash

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      1800
    )
  }
})

$('.btn').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault()

    const hash = this.hash

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      1800
    )
  }
})

// Laptop Fade

const laptopFadeOptions = {
  root: null,
  threshold: 0.4,
  rootMargin: '0px 0px -30px 0px',
}
const appearOnScrollLaptop = new IntersectionObserver(function (entries, appearOnScrollLaptop) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add('appear')
      appearOnScrollLaptop.unobserve(entry.target)
    }
  })
}, laptopFadeOptions)

laptopFaders.forEach((fader) => {
  appearOnScrollLaptop.observe(fader)
})

mobileNavMenu.addEventListener('click', (e) => {
  mobileNavigation.classList.toggle('extended')
  mobileNavigationList.classList.toggle('text-appear')

  if (menuIcon.getAttribute('name') === 'menu-outline') {
    menuIcon.setAttribute('name', 'close-outline')
  } else {
    menuIcon.setAttribute('name', 'menu-outline')
  }
})

$('.mobile-navigation-list li a').on('click', function (e) {
  mobileNavigation.classList.toggle('extended')
  mobileNavigationList.classList.toggle('text-appear')

  if (menuIcon.getAttribute('name') === 'menu-outline') {
    menuIcon.setAttribute('name', 'close-outline')
  } else {
    menuIcon.setAttribute('name', 'menu-outline')
  }

  if (this.hash !== '') {
    e.preventDefault()

    const hash = this.hash

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      1800
    )
  }
})
