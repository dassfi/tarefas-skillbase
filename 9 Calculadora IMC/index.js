let peso = document.querySelector(".peso");
let altura = document.querySelector(".altura");
let btnCalcular = document.querySelector(".btnCalcular");

function compararFaixas(imc) {
  let imcArredondado = imc.toFixed(1);
  if (imc < 18.5) {
    alert(`${imcArredondado} abaixo do peso`);
  }
  if (imc > 18.5 && imc < 25) {
    alert(`${imcArredondado} normal`);
  }
  if (imc > 25 && imc < 30) {
    alert(`${imcArredondado} sobrepeso`);
  }
  if (imc > 30 && imc < 35) {
    alert(`${imcArredondado} obesidade grau I`);
  }
  if (imc > 35 && imc < 40) {
    alert(`${imcArredondado} obesidade grau II`);
  }
  if (imc > 40) {
    alert(`${imcArredondado} Obesidade grau III`);
  }
}

function calcularIMC() {
  if (peso.value && altura.value) {
    let alturaAoQuadrado = altura.value * altura.value;
    let imc = peso.value / alturaAoQuadrado;
    compararFaixas(imc);
  } else {
    alert("Preencha os campos adequadamente");
  }
}

btnCalcular.addEventListener("click", calcularIMC);
