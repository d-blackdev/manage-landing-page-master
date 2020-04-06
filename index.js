const icon = document.getElementById('close');
const closeIcon = document.getElementById('closeBtn')
icon.addEventListener('click', () => {
    const show = document.getElementById('header-list');
    const openIcon = document.getElementById('close')

    // close.classList.toggle('show-item')
    show.classList.add('show-item')
    openIcon.classList.add('hide-item')
})

closeIcon.addEventListener('click', () => {
    const show = document.getElementById('header-list');
    const openIcon = document.getElementById('close')
    show.classList.replace('show-item', 'hide-item')
    icon.classList.replace('hide-item', 'show-item')
})

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })
})

// form validation
const form = document.getElementById('form');
const email = document.getElementById('email');
form.addEventListener('submit', e => {
    e.preventDefault();
    const emailVal = email.value;

    if (!validateEmail(emailVal)) {
        form.classList.add('error')
    } else {
        form.classList.remove('error')
    }
})








function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}