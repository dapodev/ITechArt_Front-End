const IMAGE_WIDTH = 1024;
const IMAGE_COUNT = 4;
const MAX_OFFSET = (IMAGE_COUNT - 1) * IMAGE_WIDTH;

const sliderLine = document.querySelector('.slider__line');
let sliderOffset = 0;


document.querySelector('.slider__control-arrow_right').addEventListener('click', function() {
    sliderOffset += IMAGE_WIDTH;
    checkOffset();
    sliderLine.style.marginLeft = -sliderOffset + 'px';
});

document.querySelector('.slider__control-arrow_left').addEventListener('click', function() {
    sliderOffset -= IMAGE_WIDTH;
    checkOffset();
    sliderLine.style.marginLeft = -sliderOffset + 'px';
});

function checkOffset() {
    if(sliderOffset > MAX_OFFSET ) {
        sliderOffset = 0;
    }
    if(sliderOffset < 0) {
        sliderOffset = MAX_OFFSET;
    }
}
