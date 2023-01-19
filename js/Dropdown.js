let controls = document.querySelectorAll(".section_5-content-column-block-header-control");
let texts = document.querySelectorAll(".section_5-content-column-block-text");

for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener('click', () => {
        
        if (controls[i].innerHTML === '+') {
            controls[i].innerHTML = '-'
        }
        else if (controls[i].innerHTML === '-') {
            controls[i].innerHTML = '+'
        }

        texts[i + 1].classList.toggle('section_5-content-column-block-text-visible')
    })
}

