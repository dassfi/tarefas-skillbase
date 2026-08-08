let nome = document.querySelector(".nome");
let btnAdicionar = document.querySelector(".btnAdicionar");
let convidados = document.querySelector(".convidados");
let vetNomes = [];

function adicionarNomes() {
  if (nome) {
    vetNomes.push(nome.value);
    convidados.innerHTML = `<p class="convidados">${vetNomes.join("<br>")}</p>`;
    nome.value = "";
  }else{
    alert("Preencha o campo");
  }
}

btnAdicionar.addEventListener("click", adicionarNomes);
