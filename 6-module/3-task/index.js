import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.createCarousel();
    this.flipSlides();
    this.addProduct();
  }

  createCarousel() {
    const carousel = createElement(`<div class="carousel">
    </div>`);
    const rightArrow =
      createElement(`<div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>`);
    const leftArrow =
      createElement(`<div class="carousel__arrow carousel__arrow_left">
    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
  </div>`);
    const carouselInner = createElement(`<div class="carousel__inner"></div>`);
    carousel.appendChild(rightArrow);
    carousel.appendChild(leftArrow);
    this.slides.forEach((slide) => {
      const slideElement = createElement(`
          <div class="carousel__slide" data-id="${slide.id}">
            <img src="/assets/images/carousel/${
              slide.image
            }" class="carousel__img" alt="slide">
            <div class="carousel__caption">
              <span class="carousel__price">€${slide.price.toFixed(2)}</span>
              <div class="carousel__title">${slide.name}</div>
              <button type="button" class="carousel__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
            </div>
          </div>
        `);
      carouselInner.appendChild(slideElement);
    });

    carousel.appendChild(carouselInner);

    return carousel;
  }

  flipSlides() {
    const rightArrow = this.elem.querySelector(".carousel__arrow_right");
    const leftArrow = this.elem.querySelector(".carousel__arrow_left");
    leftArrow.style.display = "none";
    let slideCounter = 1;

    this.elem.addEventListener("click", (event) => {
      const rightArrowClicked = event.target.closest(".carousel__arrow_right");
      const leftArrowClicked = event.target.closest(".carousel__arrow_left");
      const slideWidth =
        this.elem.querySelector(".carousel__slide").offsetWidth;
      const slidesTape = this.elem.querySelector(".carousel__inner");

      if (rightArrowClicked) {
        slideCounter++;
      }
      if (leftArrowClicked) {
        slideCounter--;
      }

      if (slideCounter === 1) {
        leftArrow.style.display = "none";
        rightArrow.style.display = "";
      } else if (slideCounter === this.slides.length) {
        leftArrow.style.display = "";
        rightArrow.style.display = "none";
      } else {
        leftArrow.style.display = "";
        rightArrow.style.display = "";
      }

      slidesTape.style.transform = `translateX(-${
        slideWidth * (slideCounter - 1)
      }px)`;
    });
  }

  addProduct() {
    const plusButtons = this.elem.querySelectorAll(".carousel__button");

    for (let plusButton of plusButtons) {
      plusButton.addEventListener("click", (event) => {
        const button = event.target.closest("BUTTON");

        const slideId = event.target.closest(".carousel__slide").dataset.id;

        if (button) {
          const addProductEvent = new CustomEvent("product-add", {
            detail: slideId,
            bubbles: true,
          });

          plusButton.dispatchEvent(addProductEvent);
        }
      });

      plusButton.addEventListener("product-add", () => {
        console.log("bravo");
      });
    }
  }
}
