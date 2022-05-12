window.onload = function () {
    carregarPagina();
}

function carregarPagina() {
    fetch('https://randomuser.me/api/?results=50')
        .then(dadosClientes => dadosClientes.json())
        .then(dadosClientes => dadosClientes.results)
        .then(dadosClientes => criarTabela(dadosClientes))        
}

function criarTabela (clientes) {
    for (i = 0; i < clientes.length; i++) {
        let cliente = {
            nome: clientes[i].name.first + " " + clientes[i].name.last,
            genero: clientes[i].gender.toLowerCase() == 'female' ? 'Feminino' : 'Masculino',
            idade: clientes[i].dob.age,
            localizacao: clientes[i].location.state + ", " + clientes[i].location.country,
            dataCadastro: clientes[i].registered.date.split("T")[0]
        }
        
        console.log(cliente);

        const tBody = document.querySelector('tbody');
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