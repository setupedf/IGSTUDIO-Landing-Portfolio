const overlay = document.querySelector('.header-burger-overlay')
const openBtn = document.querySelector('.header-burger-overlay-btns-open')
const closeBtn = document.querySelector('.header-burger-overlay-btns-close')
const content = document.querySelector('.header-burger-overlay-navbar-list')

function changeBtn() {
    if (overlay.classList.contains('open')) {
        overlay.classList.remove('open')
        openBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    } else {
        overlay.classList.add('open')
        openBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    }
}

function displayMenuContent() {
    if (overlay.classList.contains('open')) {
        content.style.display = 'flex';
    }
    else {
        content.style.display = 'none';
    }
}

function expandMenu() {
    changeBtn()
    displayMenuContent()
}

overlay.addEventListener('click', expandMenu)