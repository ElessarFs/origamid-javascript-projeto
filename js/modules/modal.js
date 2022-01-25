export default class initModal {
  constructor(abrir, fechar, containerModal) {
    this.botaoAbrir = document.querySelector(abrir);
    this.botaoFechar = document.querySelector(fechar);
    this.containerModal = document.querySelector(containerModal);
  }

  toggleModal(event) {
    event.preventDefault();
    this.containerModal.classList.toggle("ativo");
  }

  cliqueForaModal(event) {
    if (event.currentTarget === event.target) this.toggleModal(event);
  }

  addModalEvents() {
    this.botaoAbrir.addEventListener("click", this.toggleModal.bind(this));
    this.botaoFechar.addEventListener("click", this.toggleModal.bind(this));
    this.containerModal.addEventListener(
      "click",
      this.cliqueForaModal.bind(this),
    );
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }

  // André sugeriu de colocarmos o toggle e substituir nosso abrir modal e fechar modal por essa única função, prefiro não fazer isso agora por motivos didáticos, mas fica a possibilidade em fazer isso aqui
}
