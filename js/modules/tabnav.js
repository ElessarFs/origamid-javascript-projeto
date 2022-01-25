export default class TabNav {
  constructor(menu, content) {
    this.tabmenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    this.tabContent[index].classList.add(this.activeClass);
  }

  addTabNavEvent() {
    this.tabmenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabmenu.length && this.tabContent.length) {
      // colocar animação em cada item
      this.tabContent.forEach((item) => item.classList.add(item.dataset.anime));
      // ativar primeiro item
      this.activeTab(0);

      this.addTabNavEvent();
    }
  }
}
