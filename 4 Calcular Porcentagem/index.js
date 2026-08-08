let valor = document.querySelector(".valor");
let percentual = document.querySelector(".percentual");

let botaoCalcular = document.querySelector(".botaoCalcular");

function calcularPercentual() {
  if (valor.value && percentual.value) {
    let valorDivido = Number(valor.value / 100);
    let total = valorDivido * percentual.value;
    alert(total);
  }else{
    alert("Preencha adequadamente os campos");
  }
}

botaoCalcular.addEventListener("click", calcularPercentual);
