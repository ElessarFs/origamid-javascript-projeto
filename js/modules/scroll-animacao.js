import debounce from "./debounce.js";

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.metadeTamanhoTela = window.innerHeight * 0.6;
    this.checkDistance = debounce(
      this.checkDistance.bind(this, "flksdja", "lkdasjlkdsj"),
      100,
    );
  }

  // pega a distancia de cada item em relação ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.metadeTamanhoTela),
      };
    });
  }

  // verifica a distancia de cada objeto em relação ao scroll do site
  checkDistance(teste, teste2) {
    console.log(teste, teste2);
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      window.addEventListener("scroll", this.checkDistance);
      this.checkDistance();
    }
    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
