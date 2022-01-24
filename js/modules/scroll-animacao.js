export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-js="scroll"]');
  const metadeTamanhoTela = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const distTop = section.getBoundingClientRect().top - metadeTamanhoTela;
      const isSectionVisible = distTop < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  if (sections.length) {
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
