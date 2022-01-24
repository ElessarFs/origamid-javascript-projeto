export default function initTabNav() {
  const tabmenu = document.querySelectorAll('[data-js="tabmenu"] li');
  const tabContent = document.querySelectorAll(
    '[data-js="tabcontent"] section',
  );

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContent[index].classList.add();
    tabContent[index].classList.add("ativo");
  }

  if (tabmenu.length && tabContent.length) {
    tabContent.forEach((item) => item.classList.add(item.dataset.anime));
    tabContent[0].classList.add("ativo");

    tabmenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
