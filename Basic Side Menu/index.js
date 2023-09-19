let menu = document.querySelector('section.area-menu');
let btn  = document.querySelector('button.btn-act');
btn.addEventListener('click', active);

function active() {
    menu.classList.toggle('area-menu-actived');
    btn.classList.toggle('btn-act-active')
}
