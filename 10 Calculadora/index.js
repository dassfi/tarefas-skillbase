let numeroUm = document.querySelector(".NumeroUm");
let numeroDois = document.querySelector(".NumeroDois");

let divCalculadora = document.querySelector(".divCalculadora");

let btnCalcular = document.querySelector(".btnCalcular");

let operacao = "";
let vetCalculo = [];

function calcular(){
   if(numeroDois.value && numeroUm.value){
    vetCalculo.push(numeroUm.value);
    vetCalculo.push(operacao);
    vetCalculo.push(numeroDois.value);    
    let calculoFinal = vetCalculo.join("");
    alert(eval(calculoFinal));
    vetCalculo = [];
   }else{
    alert("Preencha adequadamente os campos");
   }
}

divCalculadora.addEventListener("click", function (event){
   let elementoClicado = event.target;

   if(elementoClicado.classList.contains("btnAdicionar")) operacao = "+";
   if(elementoClicado.classList.contains("btnSubtrair")) operacao = "-";
   if(elementoClicado.classList.contains("btnMultiplicar")) operacao = "*";
   if(elementoClicado.classList.contains("btnDividir")) operacao = "/";
   if(elementoClicado.classList.contains("btnCalcular")) calcular();
});