import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outsideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("ativo");
    });
  }

  dropdownMenus.forEach((menu) => {
    // menu.addEventListener("click", handleClick);
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  /* Bom exemplo de porque o this em funções funciona diferente do this em uma arrowFunction
  function handleClick(event) {
  event.preventDefault();
  this.classList.add("ativo");
  outsideClick(this, ["click", "touchstart"], function () {
    console.log(this);
    this.classList.remove("ativo");
  });
} */
}
