import createElement from "../../assets/lib/create-element.js";

export default class Modal {
  constructor() {
    this.modalWindow = this.open();
    this.addEventListeners();
  }

  open() {
    const modalWindow = createElement(`
    <div class="container">
    <div class="modal">
    <div class="modal__overlay"></div>
     <div class="modal__inner">
       <div class="modal__header">
         <button type="button" class="modal__close">
           <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
         </button>
         <h3 class="modal__title"></h3>
       </div>
     <div class="modal__body">
     </div>
    </div>
    </div>
    </div>`);

    document.body.append(this.modalWindow);
    document.body.classList.add("is-modal-open");

    return modalWindow;
  }

  setTitle(title) {
    const modalTitle = this.modalWindow.querySelector(".modal__title");
    modalTitle.textContent = title;
  }

  setBody(node) {
    const modalBody = this.modalWindow.querySelector(".modal__body");
    modalBody.innerHTML = "";
    modalBody.append(node);
  }

  addEventListeners() {
    const xButtonClose = (event) => {
      const xButton = event.target.closest(".modal__close");

      if (xButton) {
        this.modalWindow.remove();
        document.body.classList.remove("is-modal-open");
      }
    };

    this.modalWindow.addEventListener("click", xButtonClose);

    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        this.modalWindow.remove();
        document.body.classList.remove("is-modal-open");
      }
    });
  }

  close() {
    this.modalWindow.remove();
    document.body.classList.remove("is-modal-open");
  }
}
