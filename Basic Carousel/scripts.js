let btnR = document.querySelector('button.btnR');
let btnL = document.querySelector('button.btnL');
btnR.addEventListener('click', right);
btnL.addEventListener('click', left);
let areaImagens = document.querySelector('div.carrossel');
let imagens = ['blue.webp', 'green.webp', 'yellow.webp', 'white.jpg'];
let itensArray = 0;
let img = document.createElement('img');
img.setAttribute('src', imagens[itensArray]);
areaImagens.appendChild(img);

function right() {
    img.style.opacity = 0;
    setTimeout(() => {
        itensArray = (itensArray + 1) % imagens.length;
        img.setAttribute('src', imagens[itensArray]);
        img.style.opacity = 1; 
    }, 500); 
}

function left() {
    img.style.opacity = 0; 
    setTimeout(() => {
        itensArray = (itensArray - 1 + imagens.length) % imagens.length;
        img.setAttribute('src', imagens[itensArray]);
        img.style.opacity = 1; 
    }, 500); 
}
