const scrollDownButton = document.querySelector('.faq-scroll-button')
const date = new Date()
const faqSection = document.getElementById('faq')
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



let faqSectionTop = faqSection.getBoundingClientRect().top
scrollDownButton.addEventListener('click', function () {
    $('html, body').animate({
        scrollTop: faqSectionTop
    }, 1000)
})
