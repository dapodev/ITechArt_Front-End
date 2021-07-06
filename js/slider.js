const IMAGE_COUNT = 4;

const sliderImage = document.querySelector('.slider__image');
const sliderLine = document.querySelector('.slider__line');
let sliderOffset = 0;

let IMAGE_WIDTH = sliderImage.offsetWidth;
let MAX_OFFSET = (IMAGE_COUNT - 1) * IMAGE_WIDTH;

window.addEventListener('resize', (event) => {
    IMAGE_WIDTH = sliderImage.offsetWidth;
    MAX_OFFSET = (IMAGE_COUNT - 1) * IMAGE_WIDTH;
    sliderOffset = 0;
    setOffset();
});

document.querySelector('.slider__control-arrow_right').addEventListener('click', function() {
    sliderOffset += IMAGE_WIDTH;
    checkOffset();
    setOffset();
});

document.querySelector('.slider__control-arrow_left').addEventListener('click', function() {
    sliderOffset -= IMAGE_WIDTH;
    checkOffset();
    setOffset();
});

function checkOffset() {
    if(sliderOffset > MAX_OFFSET ) {
        sliderOffset = 0;
    }
    if(sliderOffset < 0) {
        sliderOffset = MAX_OFFSET;
    }
}

function setOffset() {
    sliderLine.style.marginLeft = -sliderOffset + 'px';
}