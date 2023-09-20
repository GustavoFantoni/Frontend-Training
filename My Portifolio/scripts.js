
var imagensColor1 = document.querySelector('div.left-image');
var imagensColor2 = document.querySelector('div.right-image');

function surgin() {
    areaColor.classList.toggle('images-surgin-toggle');
    imagensColor1.classList.toggle('left-image-toggle');
    imagensColor2.classList.toggle('right-image-toggle');

}

imagensColor1.addEventListener('click', alinha)
imagensColor2.addEventListener('click', alinha)
function alinha() {
    imagensColor1.classList.toggle('left-image-alinha');
    imagensColor2.classList.toggle('right-image-alinha');
}










var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            surgin();
            observer.unobserve(entry.target);
        }
    });
}, options);

var areaColor = document.querySelector('section.images-surgin');

observer.observe(areaColor);





var appVaso1 = document.querySelector('div.img-vs1');
var appVaso2 = document.querySelector('div.img-vs2');
var appVaso3 = document.querySelector('div.img-vs3');
var appVaso4 = document.querySelector('div.img-vs4');

function surginVasos() {
    appVaso1.classList.toggle('img-vs1-toggle');
    appVaso1.classList.toggle('img-vs2-toggle');
    appVaso1.classList.toggle('img-vs3-toggle');
    appVaso1.classList.toggle('img-vs4-toggle');
}

var condicoes = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
}

var observer2 = new IntersectionObserver(function(entries2) {
    entries2.forEach(function(entry2) {
        if (entry2.isIntersecting) {
            surginVasos();
            observer2.unobserve(entry2.target);
        }
    });
}, condicoes);

var vasos = document.querySelector('section.vasos');

observer2.observe(vasos);