export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number); // já converte string para número
  const horarioSemana = funcionamento.dataset.horario
    .split(",")
    .map((numero) => +numero);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  if (
    diasSemana.indexOf(diaAgora) !== -1 &&
    horarioAgora >= horarioSemana[0] &&
    horarioAgora < horarioSemana[1]
  ) {
    // poderia resolver com includes
    funcionamento.classList.add("aberto");
  }
}
