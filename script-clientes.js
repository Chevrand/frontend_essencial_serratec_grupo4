listaClientes = [];
const barraPesquisa = document.getElementsByTagName('input')[0]

window.onload = function () {
    carregarPagina();
}

barraPesquisa.onkeyup = function () {
    let textoPesquisado = barraPesquisa.value;
    let listaFiltrada = buscar(listaClientes, textoPesquisado);
    criarTabela(listaFiltrada);
} 

function carregarPagina() {
    fetch('https://randomuser.me/api/?results=50')
        .then(dadosClientes => dadosClientes.json())
        .then(dadosClientes => dadosClientes.results)
        .then(dadosClientes => {
            listaClientes = dadosClientes;
            criarTabela(listaClientes);
        })           
}

function criarTabela (clientes) {
    const tBody = document.querySelector('tbody');

    tBody.innerHTML = "";

    for (i = 0; i < clientes.length; i++) {
        let cliente = {
            nome: clientes[i].name.first + " " + clientes[i].name.last,
            genero: clientes[i].gender.toLowerCase() == 'female' ? 'Feminino' : 'Masculino',
            idade: clientes[i].dob.age,
            localizacao: clientes[i].location.state + ", " + clientes[i].location.country,
            dataCadastro: clientes[i].registered.date.split("T")[0]
        }

        const linhaTabela = document.createElement('tr');
        const nome = document.createElement('td');
        const genero = document.createElement('td');
        const idade = document.createElement('td');
        const localizacao = document.createElement('td');
        const dataCadastro = document.createElement('td');

        genero.className = 'center';
        idade.className = 'center';
        dataCadastro.className = 'center';
        linhaTabela.className = 'linhaTabelaCliente'

        linhaTabela.appendChild(nome);
        linhaTabela.appendChild(genero);
        linhaTabela.appendChild(idade);
        linhaTabela.appendChild(localizacao);
        linhaTabela.appendChild(dataCadastro);

        nome.innerHTML = cliente.nome;
        genero.innerHTML = cliente.genero;
        idade.innerHTML = cliente.idade;
        localizacao.innerHTML = cliente.localizacao;
        dataCadastro.innerHTML = cliente.dataCadastro;

        tBody.appendChild(linhaTabela);
    }
}

function buscar(listaClientes, textoPesquisado) {
    let listaFiltrada = []
    
    listaClientes.forEach(cliente => {
        let nomeCliente =  cliente.name.first + " " + cliente.name.last
        nomeCliente = nomeCliente.toLowerCase();
        textoPesquisado = textoPesquisado.toLowerCase();
  
        if(nomeCliente.includes(textoPesquisado)) {
            listaFiltrada.push(cliente);
        }
    });

    return listaFiltrada;
}