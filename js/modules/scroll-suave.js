export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-js="menu"] a[href^="#"]',
  );

  function scrollToSection(event) {
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
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });
}
