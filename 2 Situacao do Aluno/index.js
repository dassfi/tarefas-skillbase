let primeiraNota = document.querySelector(".nota1");
let segundaNota = document.querySelector(".nota2");
let terceiraNota = document.querySelector(".nota3");

let botaoConsultar = document.querySelector(".button");
let texto = document.querySelector(".MostrarAlunos");

var aprovados = 0;
var reprovados = 0;

function mostrarConsulta(situacao) {
  texto.innerHTML = `
  <p class="MostrarAlunos">
        ${situacao} <br>
        Qtd Aprovados: ${aprovados} <br>
        Qtd Reprovados: ${reprovados}
    </p>`;
}
function calcularMedia() {
  let totalSoma =
    Number(primeiraNota.value) +
    Number(segundaNota.value) +
    Number(terceiraNota.value);
  let totalMedia = totalSoma / 3;

  if (totalMedia >= 6) {
    aprovados++;
    mostrarConsulta("aprovado");
  } else {
    reprovados++;
    mostrarConsulta("reprovado");
  }
}
function consultarMedia() {
  if (primeiraNota.value && segundaNota.value && terceiraNota.value) {
    calcularMedia();
  } else {
    alert("Preencha adequadamente os campos");
  }
}

botaoConsultar.addEventListener("click", consultarMedia);
