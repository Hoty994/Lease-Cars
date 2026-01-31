const slides = document.querySelectorAll(".slides img");
const slideLine = document.querySelectorAll(".slide-line .line");
let slideInsex = 0;
let IntervalId = null;


document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if (slideLine.length > 0) {
            slideLine[0].style.backgroundColor = '#0066FF';
        }

    if(slides.length > 0){
        slides[slideInsex].classList.add("displaySlide");
        IntervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){

    if(index >= slides.length)
    {
        slideInsex = 0;
    }
    else if(index < 0) {
        slideInsex = slides.length - 1;
    }


    slideLine.forEach(line => {
        line.style.backgroundColor = '#ffffff'; 
    });

    if (slideLine[slideInsex]) {
        slideLine[slideInsex].style.backgroundColor = '#0066FF';
    }

    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });

    slides[slideInsex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(IntervalId)
    slideInsex--;
    showSlide(slideInsex);
}

function nextSlide(){
    slideInsex++;
    showSlide(slideInsex);
}