// Capturar inputs
let nome = document.querySelector(".nome");
let cpf = document.querySelector(".cpf");
let foto = document.querySelector(".linkFoto");

// Capturar botão adicionar e tabela de clientes
let btnAdicionar = document.querySelector(".btnAdicionar");
let exibirClientes = document.querySelector(".clientes");

// Criar vetor e objeto para clientes
let vetClientes = [];
let objClientes = {};

// Capturar título e linha para editar cadastro
let textoTitulo = document.querySelector(".tituloCadastroEdit");
let tabelaEditar = document.querySelector(".CadastroEdit");

// Criar verificador para saber se está em fase de editar e variável para posição de editar
var editar = false;
let posicaoEditar = 0;

// Torna o valor dos inputs nada
function limparInputs() {
  nome.value = "";
  cpf.value = "";
  foto.value = "";
}

// Tabela recebe suas coisas, sem lista de clientes
function limparTabela() {
  exibirClientes.innerHTML = ` <th>
        <tr>
          <td>ID</td>
          <td>Nome</td>
          <td>CPF</td>
          <td>Foto</td>
          <td>Ações</td>
        </tr>
      </th>`;
}

function mostrarVetorClientes() {
  // Chama a função para limpar a lista
  limparTabela();
  // Verifica se ainda está em modo de edição (Botão de adicionar fica como "Cancelar")
  if (editar == true) {
    // Captura o botão de editar
    let botaoEditarCadastro = document.querySelector(".btnEditarCadastro");
    // Volta ao normal com o botão de adicionar substituindo texto e classe
    btnAdicionar.innerHTML = `Adicionar`;
    btnAdicionar.className = `btnAdicionar`;
    // Muda para o modo de adicionar
    editar = false;
    // Remove a coluna onde estava o botão de editar junto com o botão de editar
    botaoEditarCadastro.parentElement.remove();
    // Torna o título no modo de adicionar
    textoTitulo.textContent = "Cadastro de Clientes";
    // Enquanto 'i' for menor que a quantidade de itens no vetor, ele vai repetir. Mas a cada vez que executa, recebe mais um
    for (let i = 0; i < vetClientes.length; i++) {
      // Cria linha
      let linha = document.createElement("tr");
      // Adiciona linha na tabela de clientes
      exibirClientes.appendChild(linha);
      // Linha recebe colunas com as informações do cliente
      linha.innerHTML = `
          <!-- Posição na tabela visível -->
          <td>${i + 1}</td>
          <!-- Nome do cliente -->
          <td>${vetClientes[i].nome}</td>
          <!-- CPF do cliente -->
          <td>${vetClientes[i].cpf}</td>
          <!-- Foto do cliente -->
          <td>${vetClientes[i].foto}</td>
          <td>
          <!-- Botão de excluir, já com a posição do cliente no vetor, embutido em "data-index" -->
            <button class="btn btnExcluir" data-index="${i}">X</button>
          <!-- Botão de editar -->
            <button class="btn btnEditar" data-index="${i}">edit</button>
          </td>`;
      /* Como o for loop consegue percorrer todas as posições do vetor com a variável 'i'. Nós podemos filtrar no vetor a posição do cliente
             Então a  cada execução do for loop, ele cria linhas e colunas na lista com as informações dos clientes. Como nós queremos */
    }
    // Se não estiver em modo de editar, ele executa apenas o for loop, fazendo a lista de clientes
  } else {
    for (let i = 0; i < vetClientes.length; i++) {
      let linha = document.createElement("tr");
      exibirClientes.appendChild(linha);
      linha.innerHTML = `
        <td>${i + 1}</td>
          <td>${vetClientes[i].nome}</td>
          <td>${vetClientes[i].cpf}</td>
          <td>${vetClientes[i].foto}</td>
          <td>
            <button class="btn btnExcluir" data-index="${i}">X</button>
            <button class="btn btnEditar" data-index="${i}">edit</button>
          </td>`;
    }
  }
}

function adicionarClientes() {
  // Verifica se o botão está configurado para cancelar ou adicionar (se editar for igual a verdadeiro, está para cancelar)
  if (editar == true) {
    // Captura o botão de editar
    let botaoEditarCadastro = document.querySelector(".btnEditarCadastro");
    // Tira a verificação do botão ficar adicionar ficar "Cancelar"
    editar = false;
    // Remove a coluna onde estava o botão de editar, removendo também o botão de editar
    botaoEditarCadastro.parentElement.remove();
    // Volta ao normal com o título e o botão de adicinar
    textoTitulo.textContent = "Cadastro de Clientes";
    // Torna o botão adicionar, que no caso está "Cancelar" para "Adicionar Cliente"
    btnAdicionar.innerHTML = `Adicionar Cliente`;
    // Substitui as classes do botão de adicionar ou cancelar para o normal
    btnAdicionar.className = `btnAdicionar`;
  } else {
    // Verifica se os inputs têm algum valor adequado
    if (nome.value && cpf.value && foto.value) {
      // ObjClientes faz o objeto. "Modela" as informações para adicionar no vetor
      objClientes = { nome: nome.value, cpf: cpf.value, foto: foto.value };
      // Adiciona o objeto ao vetor
      vetClientes.push(objClientes);
      // Chama a função para mostrar o vetor (a lista de clientes)
      mostrarVetorClientes();
    } else {
      // Se não for válido, ele exibe um alerta informando para preencher corretamente
      alert("Preencha os campos adequadamente");
    }
  }
}

function excluirClientes(i) {
  // Exclui a posição do vetor indicada, excluindo só um apartir daquela posição
  vetClientes.splice(i, 1);
  // Chama a função de mostrar a lista de clientes
  mostrarVetorClientes();
}

function editarClientes(i) {
  // Cria coluna
  let tdBotao = document.createElement("td");
  // Adiciona de editar botão à coluna
  tdBotao.innerHTML = `<button class="btnEditarCadastro" data-index="${i}">Editar Cliente</button>`;
  // Muda o botão de adicionar substituindo seu texto e classe para o botão de cancelar
  btnAdicionar.innerHTML = `Cancelar`;
  btnAdicionar.className = `btnCancelar`;
  // Muda o título para editar e especifíca o cliente
  textoTitulo.textContent = `Editar Cliente - ${vetClientes[i].nome}`;
  // adiciona a coluna à tabela de inputs e botões
  tabelaEditar.appendChild(tdBotao);
}

function finalizarEdicao(i) {
  // Modela as informações fazendo um objeto
  objClientes = { nome: nome.value, cpf: cpf.value, foto: foto.value };
  // Adiciona as informações novas á posição do cliente no vetor
  vetClientes[i] = objClientes;
  // Chama a função de mostrar o vetor na lista visível
  mostrarVetorClientes();
}

// Ficar ouvindo se alguém clicar no botão de adicionar clientes, se sim, ele chama a função adicionarClientes.
btnAdicionar.addEventListener("click", adicionarClientes);

// Ouvir se alguém clicar em algum lugar da tabela de clientes
exibirClientes.addEventListener("click", function (event) {
  // Captura o elemento clicado
  let elementoClicado = event.target;
  // Verifica se é o botão de excluir, se tem a classe do botão de excluir.
  if (elementoClicado.classList.contains("btnExcluir")) {
    // Se é o botão de excluir, ele executa:
    // Captura a posição do cliente pelo 'data-index'
    let index = elementoClicado.getAttribute("data-index");
    // Chama a função de excluir junto com o parametro, a posição do cliente
    excluirClientes(index);
  }

  // Verifica se é o botão de editar
  if (elementoClicado.classList.contains("btnEditar")) {
    // Se sim, ele captura a posição do cliente
    let index = elementoClicado.getAttribute("data-index");
    // Verifica se já não está em modo de edição:
    if (editar == true) {
      // Se sim, ele avisa que antes de editar ou cancelar a edição
      alert(
        "Antes, edite ou cancele a edição do cliente " +
          vetClientes[index].nome +
          "."
      );
    } else {
      // Se não, ele chama a função de editar clientes e ativa o modo de edição
      editarClientes(index);
      editar = true;
    }
  }
});

// Escuta se alguém clicar em alguma parte da tabela de inputs e botões
tabelaEditar.addEventListener("click", function (event) {
  // Captura o elemento clicado
  let elementoClicado = event.target;
  // Se o elemento clicado for o botão de editar, ele pega a posição do cliente, e chama a função de finalizar edição
  if (elementoClicado.classList.contains("btnEditarCadastro")) {
    let posicao = elementoClicado.getAttribute("data-index");
    finalizarEdicao(posicao);
  }
});
