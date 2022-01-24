export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    this.options = options || {
      behavior: "smooth",
      block: "start",
    };
  }

  scrollToSection(event) {
    event.preventDefault();
    // também poderia pegar assim: event.currentTarget.href só que assim me traria o link inteiro, não é o que queremos
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    /* podemos fazer a rolagem dessa maneira 
      window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  */
    // essa é preferencial
    section.scrollIntoView(this.options);
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }

  addLinkEvent() {
    this.linksInternos.forEach((item) => {
      item.addEventListener("click", this.scrollToSection.bind(this));
      // aqui também funcionaria se eu encapsulasse com uma arrow function
      /* (event) => {this.scrollToSection(event)} */
      // o ruim é que a gente perde a referencia da função pois dessa forma estamos passando uma anonima, nunca mais vamos conseguir retirar esse evento
    });
  }
}
