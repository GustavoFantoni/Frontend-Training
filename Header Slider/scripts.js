let areaImg = document.querySelector('section.carousel');
let btnRight = document.querySelector('button.btn-right');
let btnLeft = document.querySelector('button.btn-left');
let indicators = document.querySelectorAll('li.ball'); 
let imagesCarousel = ['blue.webp', 'green.webp', 'white.jpg', 'yellow.webp'];
let quant = 0;
btnLeft.addEventListener('click', CLeft);
btnRight.addEventListener('click', CRight)

function updateImage() {
    let image = document.createElement('img');
    image.setAttribute('src', imagesCarousel[quant]);
    image.setAttribute('class', 'image-header');
    areaImg.innerHTML = '';
    areaImg.appendChild(image);

    indicators.forEach((ind, i) => {
        if (i == quant) {
            ind.classList.add('active');
        } else {
            ind.classList.remove('active')
        }
    }
    )
    
}

updateImage();

function CRight() {
    quant = (quant + 1) % imagesCarousel.length;
    updateImage();
}

setInterval(CRight, 5000);

function CLeft() {
    quant = (quant - 1 + imagesCarousel.length) % imagesCarousel.length;
    updateImage();
}


