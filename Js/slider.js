class slider {
    constructor() {
        this.slides = [
        "./assets/image1.jpg",
        "./assets/image2.jpg",
        "./assets/image3.jpg",
        "./assets/image4.jpg",];
        this.slide = document.getElementById("sliderImage")
        this.next = document.getElementById("nextBtn")
        this.previous = document.getElementById("prevBtn")
        this.index = 0;
        this.slideLength =this.slides.length
        this.dots = document.querySelectorAll(".slider__dot");
        
        this.next.addEventListener("click",()=>this.nextSlide())
        this.previous.addEventListener("click",()=>this.prevSlide())
    }
    
    updateDots(dot){
        dot.classList.remove("active")
    }

    nextSlide() {
        this.index++;
        if (this.index >= this.slideLength)  {
            this.index = 0;
        }
        this.slide.src = this.slides[this.index];
        this.dots.forEach((dot) => this.updateDots(dot))
        this.dots[this.index].classList.add("active")
    }

    prevSlide(){
        this.index--
        if (this.index < 0 ) {
            this.index = this.slideLength - 1
        }
        this.slide.src = this.slides[this.index]
        this.dots.forEach((dot) => this.updateDots(dot))
        this.dots[this.index].classList.add("active")
    }

  };
  
  new slider();