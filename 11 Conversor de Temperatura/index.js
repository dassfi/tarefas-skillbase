let graus = document.querySelector(".graus");

let btnCelsiusParaFarenheit = document.querySelector(".btnCToF");
let btnFarenheitParaCelsius = document.querySelector(".btnFToC");
let divConversor = document.querySelector(".conversorDeTemperatura");

function calcularTemperatura(temperatura) {
  if (temperatura == "farenheit") {
    // C=(F-32)/1,8
    let calculoParaCelsius = Number(graus.value - 32) / 1.8;
    alert(`${graus.value} farenheit são ${calculoParaCelsius} celsius`);
  } else {
    // F=(C*1,8)+32
    let calculoParaFarenheit = Number(graus.value * 1.8) + 32;
    alert(`${graus.value} celsius são ${calculoParaFarenheit} farenheit`);
  }
}

divConversor.addEventListener("click", function (event) {
  let elementoClicado = event.target;
  if (elementoClicado.classList.contains("btnCToF"))
    calcularTemperatura("celsius");
  if (elementoClicado.classList.contains("btnFToC"))
    calcularTemperatura("farenheit");
});
