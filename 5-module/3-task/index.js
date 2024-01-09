function initCarousel() {
  const carousel = document.querySelector(".carousel");
  const leftArrow = carousel.querySelector(".carousel__arrow_left");
  const rightArrow = carousel.querySelector(".carousel__arrow_right");
  let slideCounter = 0;
  leftArrow.style.display = "none";

  carousel.addEventListener("click", function (event) {
    const rightArrowClicked = event.target.closest(".carousel__arrow_right");
    const leftArrowClicked = event.target.closest(".carousel__arrow_left");
    const slideWidth = carousel.querySelector(".carousel__slide").offsetWidth;
    const slidesTape = carousel.querySelector(".carousel__inner");

    if (rightArrowClicked) {
      slideCounter++;
    }
    if (leftArrowClicked) {
      slideCounter--;
    }

    if (slideCounter === 0) {
      leftArrow.style.display = "none";
      rightArrow.style.display = "";
    } else if (slideCounter === 3) {
      leftArrow.style.display = "";
      rightArrow.style.display = "none";
    } else {
      leftArrow.style.display = "";
      rightArrow.style.display = "";
    }

    slidesTape.style.transform = `translateX(-${slideWidth * slideCounter}px)`;
  });
}
