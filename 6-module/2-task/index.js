import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.createCard();
    this.addProduct();
  }

  createCard() {
    const card = createElement(`<div class="card">
    <div class="card__top">
        <img src="" class="card__image" alt="product">
        <span class="card__price"></span>
    </div>
    <div class="card__body">
        <div class="card__title"></div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>`);

    const cardTitle = card.querySelector(".card__title");
    cardTitle.textContent = this.product.name;

    const cardPrice = card.querySelector(".card__price");
    cardPrice.textContent = "€" + this.product.price.toFixed(2);

    const cardImage = card.querySelector(".card__image");
    cardImage.src = `/assets/images/products/${this.product.image}`;

    return card;
  }

  addProduct() {
    const plusButton = this.elem.querySelector(".card__button");

    plusButton.addEventListener("click", (event) => {
      const button = event.target.closest("BUTTON");

      if (button) {
        const addProductEvent = new CustomEvent("product-add", {
          detail: this.product.id,
          bubbles: true,
        });

        plusButton.dispatchEvent(addProductEvent);
      }
    });

    plusButton.addEventListener("product-add", () => {});
  }
}
