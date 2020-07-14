const scrollDownButton = document.querySelector('.scroll-down-button')
const aboutSection = document.getElementById('about')




let aboutUsSectionTop = about.getBoundingClientRect().top
scrollDownButton.addEventListener('click', function () {
    $('html, body').animate({
        scrollTop: aboutUsSectionTop
    }, 1200)
})