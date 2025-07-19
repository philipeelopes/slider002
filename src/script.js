const Slider = document.querySelectorAll('.Slider')
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('Next-button')

let currentSlide = 0;

function hideSlider(){
    Slider.forEach(item => item.classList.remove('on'))
}

function showSlider(){
    Slider[currentSlide].classList.add('on')
}

function nextSlider(){
hideSlider()
if(currentSlide == Slider.length -1){
    currentSlide = 0
}else{
    currentSlide++
}
showSlider()

}

function prevSlider(){
hideSlider()
if(currentSlide == 0){
    currentSlide = Slider.length -1
}else{
    currentSlide--
}
showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

console.log(slider)