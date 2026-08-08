let numeroUm = document.querySelector(".numeroUm");
let numeroDois = document.querySelector(".numeroDois");
let btnCalcularMedia = document.querySelector(".btnCalcularMedia");

function calculoDeMedia(){
   if(numeroDois.value && numeroUm.value){
    let totalSoma = Number(numeroUm.value) + Number(numeroDois.value);
    alert(totalSoma/2);
   }else{
    alert("Preencha os campos adequadamente");
   }
}

btnCalcularMedia.addEventListener("click", calculoDeMedia);