var widthIm = 0;
var widthSlaiderLine = 0;
var left = 0;
var timer;

sizeInf();

// Вычисление ширины картинки, слайдера и полосы через
//  размер картинки указанный пользователем
function sizeInf() {
    var img = document.querySelectorAll('#slaiderImg');
    var i = 0
    var polosaWidth = 0;

    for (i; i < img.length; i++) {
        widthIm += img[i].clientWidth;
    }
    polosaWidth = widthIm;
    widthIm = widthIm / i;
    widthSlaiderLine = widthIm * (i - 1);
    slaiderWidth();
    polosa(polosaWidth);
    autoSlider();
}
// Присвоение ширины слайдеру
function slaiderWidth() {
    var slaider = document.querySelector('#slaider');
    slaider.style.width = widthIm + 'px';
}
// Присвоение ширины полосы
function polosa(width) {
    var polosa = document.querySelector('#polosa');
    polosa.style.width = width + 'px';
}
// Автослайдер
function autoSlider() {
    timer = setTimeout(function () {
        var polosa = document.querySelector('#polosa');
        left = left - widthIm; // Сдвиг картинки
        if (left < - widthSlaiderLine) { // Ограничение на  макс сдвиг
            left = 0;
            clearTimeout(timer);
        }

        polosa.style.left = left + 'px';
        autoSlider();
    }, 2000);
}
