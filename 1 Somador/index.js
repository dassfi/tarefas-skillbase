let button = document.querySelector(".button");

let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");

function somar() {
  if (input1.value && input2.value) {
    alert(Number(input1.value) + Number(input2.value));
  }else{
    alert("Preencha adequadamente os campos");
  }
}

button.addEventListener("click", somar);
