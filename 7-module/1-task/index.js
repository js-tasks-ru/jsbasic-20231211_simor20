import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.addEventListeners();
  }

  render() {
    this.elem = createElement(`<div class="ribbon">
      <button class="ribbon__arrow ribbon__arrow_left">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    <nav class="ribbon__inner"></nav>
    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    </div>
    </div>`);

    this.categories.forEach((category) => {
      const categoryElem = createElement(
        `<a href='#' class="ribbon__item" data-id="${category.id}">${category.name}</a>`
      );
      this.elem.querySelector(".ribbon__inner").append(categoryElem);
    });
  }

  addEventListeners() {
    const ribbonInner = this.elem.querySelector(".ribbon__inner");
    const rightArrow = this.elem.querySelector(".ribbon__arrow_right");
    const leftArrow = this.elem.querySelector(".ribbon__arrow_left");

    const updateArrows = () => {
      const scrollLeft = ribbonInner.scrollLeft;
      const scrollWidth = ribbonInner.scrollWidth;
      const clientWidth = ribbonInner.clientWidth;
      const scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollRight < 1) {
        leftArrow.classList.add("ribbon__arrow_visible");
        rightArrow.classList.remove("ribbon__arrow_visible");
      }
      if (scrollLeft === 0) {
        leftArrow.classList.remove("ribbon__arrow_visible");
        rightArrow.classList.add("ribbon__arrow_visible");
      }
      if (scrollLeft > 0 && scrollRight > 1) {
        leftArrow.classList.add("ribbon__arrow_visible");
        rightArrow.classList.add("ribbon__arrow_visible");
      }
    };

    const chooseItem = (event) => {
      event.preventDefault();

      const allCategories = this.elem.querySelectorAll(".ribbon__item");
      const chosenCategory = event.target.closest("A");
      const otherCategories = Array.from(allCategories).filter(
        (category) => category !== chosenCategory
      );

      if (chosenCategory) {
        chosenCategory.classList.add("ribbon__item_active");
        otherCategories.forEach((category) =>
          category.classList.remove("ribbon__item_active")
        );
        const chooseItemEvent = new CustomEvent("ribbon-select", {
          detail: chosenCategory.dataset.id,
          bubbles: true,
        });

        this.elem.dispatchEvent(chooseItemEvent);
      }
    };

    this.elem.addEventListener("click", (event) => {
      if (event.target.closest(".ribbon__arrow_right")) {
        ribbonInner.scrollBy(350, 0);
      }

      if (event.target.closest(".ribbon__arrow_left")) {
        ribbonInner.scrollBy(-350, 0);
      }
    });
    ribbonInner.addEventListener("scroll", updateArrows);

    this.elem.addEventListener("click", chooseItem);
    this.elem.addEventListener("ribbon-select", () => {});
  }
}
