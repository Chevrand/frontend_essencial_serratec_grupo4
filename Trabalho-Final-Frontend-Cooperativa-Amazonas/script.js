var listaClientes = [];

window.onload = function () {
    fetchApiData();
}

function fetchApiData() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(response => response.results)
        .then(data => {
            listaClientes = data;
            data.forEach((pessoa) => {
                const divContainer = document.createElement('div');
                divContainer.className = 'col';
                divContainer.setAttribute("id", pessoa.login.uuid);
                divContainer.setAttribute("onclick", "mostrarFichaCliente(this)");
                divContainer.setAttribute("data-bs-toggle","modal");
                divContainer.setAttribute("data-bs-target","#exampleModalCenteredScrollable2");
                divContainer.innerHTML =
                    `
            <div class="card h-100 d-flex flex-column">
                <img src="${pessoa.picture.large}"
                class="card-img-top"
                alt= "imagem de pessoa capturada pela API"
                />
                <div class="card-body">
                    <h5 class="card-title">${pessoa.name.first + ' ' + pessoa.name.last} </h5>
                    <p> Fuso: ${pessoa.location.timezone.description}</p>
                </div>
                <a class="link" href="clientes.html" target="_blank">
                <button class="btn btn1">Clientes</button> </a>
            </div>
        
        `;
                document.getElementById('cardsAqui').appendChild(divContainer);
            });
        });
}

function mudaTema() {
    document.body.classList.toggle("dark");
    mudaTextoBotaoTema();
}

function mudaTextoBotaoTema() {
    var textoBotaoTema = document.getElementById("button-tema");
    if (textoBotaoTema.innerHTML === "Dark Mode") {
        textoBotaoTema.innerHTML = "Light Mode";
    } else {
        textoBotaoTema.innerHTML = "Dark Mode";
        // alert('cuidado com os bugs atraídos pela luz')
    }
}

function mostrarFichaCliente(clienteElement){
    console.log(clienteElement);
    let cliente = recuperarCliente(clienteElement.id);

    const imgModal = document.getElementsByClassName('imagem-modal')[0];
    const nomeModal = document.getElementsByClassName('nome-modal')[0];
    const fusoModal = document.getElementsByClassName('fuso-modal')[0];
    const dataCadastroModal = document.getElementsByClassName('data-cadastro-modal')[0];
    const emailModal = document.getElementsByClassName('email-modal')[0];
    const celularModal = document.getElementsByClassName('celular-modal')[0];
    const enderecoModal = document.getElementsByClassName('endereco-modal')[0];
    const paisModal = document.getElementsByClassName('pais-modal')[0];

    imgModal.src = cliente.picture.large;
    nomeModal.innerHTML = `${cliente.name.title} ${cliente.name.first} 
                                ${cliente.name.last}, ${cliente.dob.age} anos`;
    fusoModal.innerHTML = `${cliente.location.state}, ${cliente.location.country}`;
    dataCadastroModal.innerHTML = `Data de cadastro: ${ajustarData(cliente.registered.date)}`;
    emailModal.innerHTML = `Email: ${cliente.email}`;
    celularModal.innerHTML = `Celular: ${cliente.cell}`;
    enderecoModal.innerHTML = `Endereço: ${cliente.location.street.name}, nº ${cliente.location.street.number}`
    paisModal.innerHTML = `${cliente.location.city} - ${cliente.location.state}, ${cliente.location.country}`

    
}

function recuperarCliente(id) {
    let clienteFiltrado;
    
    listaClientes.forEach(cliente => {
        if(cliente.login.uuid == id) {
            clienteFiltrado = cliente;
        }
    });

    return clienteFiltrado;
}

function ajustarData(data) {
    let dataSemHora = data.split("T")[0].split("-");
    return `${dataSemHora[2]}/${dataSemHora[1]}/${dataSemHora[0]}`;
}