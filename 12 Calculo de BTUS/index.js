let area = document.querySelector(".area");
let qtdPessoas = document.querySelector(".qtdPessoas");
let qtdEletronicos = document.querySelector(".qtdEletronicos");

let btnCalcular = document.querySelector(".btnCalcular");

function calcularBTUS(){
 let calculoArea = Number(area.value*800);
 let calcularPessoaos = Number(qtdPessoas.value*600);
 let calcularEletronicos = Number(qtdEletronicos.value*800);
 let btus = calculoArea + calcularPessoaos + calcularEletronicos;
 alert(`${btus} BTUS`);
}

btnCalcular.addEventListener("click", calcularBTUS);