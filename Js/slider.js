class slider {
    constructor() {
      this.slide = [
        "./assets/image1.jpg",
        "./assets/image2.jpg",
        "./assets/image3.jpg",
        "./assets/image4.jpg",];
      this.next = document.getElementById('nextBtn')
      this.previous = document.getElementById('prevBtn')
      this.index = 0;
      this.slideLength =this.slide.length
      this.next.onclick = () => {
        this.index++;
          if (this.index >= this.slideLength)  {
              this.index = 0;
            }
        document.getElementById("sliderImage").src = this.slide[this.index];
        console.log(this.index);
        console.log(this.slideLength)
      }
      this.previous.onclick = () => {
        this.index--
          if (this.index < 0 ) {
              this.index = this.slideLength - 1
            }
        document.getElementById("sliderImage").src = this.slide[this.index]
      }
    }
  };
  
  new slider();