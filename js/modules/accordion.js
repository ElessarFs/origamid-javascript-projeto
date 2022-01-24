export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-js="accordion"] dt');
  const ativoClass = "ativo";

  function activeAccordion() {
    // aqui o this é igual ao elemento onde adicionei o evento, current target
    this.classList.toggle(ativoClass);
    this.nextElementSibling.classList.toggle(ativoClass);
  }
  if (accordionList.length) {
    accordionList[0].classList.add(ativoClass);
    accordionList[0].nextElementSibling.classList.add(ativoClass);

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
