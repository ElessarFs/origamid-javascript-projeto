export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.metadeTamanhoTela = window.innerHeight * 0.6;
    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const distTop =
        section.getBoundingClientRect().top - this.metadeTamanhoTela;
      const isSectionVisible = distTop < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      window.addEventListener("scroll", this.animaScroll);
      this.animaScroll();
    }
  }
}
