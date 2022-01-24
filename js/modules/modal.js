export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function abrirModal(event) {
    event.preventDefault();
    containerModal.classList.add("ativo");
  }

  function fecharModal(event) {
    event.preventDefault();
    containerModal.classList.remove("ativo");
  }

  function cliqueForaModal(event) {
    console.log(this);
    console.log(event.target);
    if (this === event.target) fecharModal(event);
  }

  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener("click", abrirModal);
    botaoFechar.addEventListener("click", fecharModal);
    containerModal.addEventListener("click", cliqueForaModal);

    // André sugeriu de colocarmos o toggle e substituir nosso abrir modal e fechar modal por essa única função, prefiro não fazer isso agora por motivos didáticos, mas fica a possibilidade em fazer isso aqui
  }
}
