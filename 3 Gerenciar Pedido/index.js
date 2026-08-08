let pedidoPequeno = document.querySelector(".pedidoPequeno");
let pedidoMedio = document.querySelector(".pedidoMedio");
let pedidoGrande = document.querySelector(".pedidoGrande");

let botaoCalcular = document.querySelector(".botaoCalcular");

function calcularPedidos() {
  if (pedidoGrande.value && pedidoMedio.value && pedidoGrande.value) {
    let total =
      Number(pedidoPequeno.value * 10) +
      Number(pedidoMedio.value * 12) +
      Number(pedidoGrande.value * 15);
    alert(total);
  }else{
    alert("Preencha adequadamente os campos");
  }
}

botaoCalcular.addEventListener("click", calcularPedidos);
