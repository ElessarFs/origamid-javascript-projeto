import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, eventos) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    this.openMenu = this.openMenu.bind(this);
    if (eventos !== undefined) this.eventos = eventos;
    else this.eventos = ["click", "touchstart"];
  }

  openMenu() {
    this.menuList.classList.add("ativo");
    this.menuButton.classList.add("ativo");
    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove("ativo");
      this.menuButton.classList.remove("ativo");
    });
  }

  addMenuMobileEvents() {
    this.eventos.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }

    return this;
  }
}
