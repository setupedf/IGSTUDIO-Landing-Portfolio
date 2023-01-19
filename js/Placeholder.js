const mediaQueryMin = window.matchMedia('(max-width: 438px)')
let buttonField = document.querySelector('.main-description-fields-center')

window.addEventListener('resize', function(){
    console.log(window.innerWidth)

    if (window.innerWidth <= 438) {
        buttonField.querySelector('input').placeholder = 'Enter your email'
    }
    else {
        buttonField.querySelector('input').placeholder = 'Enter your email adress'
    }
});