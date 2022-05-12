window.onload = function () {
    carregarPagina();
}

function carregarPagina() {
    fetch('https://randomuser.me/api/?results=5')
        .then(dadosClientes => dadosClientes.json())
        .then(dadosClientes => dadosClientes.results)
        .then(dadosClientes => construirCards(dadosClientes))
}

function construirCards(clientes) {
    console.log(clientes);
    const divContainer = document.createElement('div');
    divContainer.className = 'row row-cols-12 row-cols-sm-12 row-cols-md-6 g-lg-6 container-fluid';
    
    for (i = 0; i < 5; i++) {
    const divColunas = document.createElement('div');
    const divHeightCard = document.createElement('div');
    const img = document.createElement('img');
    const divCardBody = document.createElement('div');
    const nameTitle = document.createElement('h5');
    const timeZoneDescription = document.createElement('p');
    const phone = document.createElement('p');
    const endereco = document.createElement('p');
    const link = document.createElement('a');
    const botaoEnviar = document.createElement('button');

    // divColunas.className = 'col';
    divHeightCard.className = 'card h-100 w-100 d-flex flex-column';
    divCardBody.className = 'card-body';
    nameTitle.className = 'card-title';
    img.className = 'card-img-top';
    botaoEnviar.className = 'btn btn1';
    link.className = 'link';

    link.href = 'clientes.html';
    link.setAttribute('target', '_blank');
    
    
    img.src = clientes[i].picture.large;
    timeZoneDescription.innerHTML = clientes[i].location.timezone.description;
    nameTitle.innerHTML = clientes[i].name.first + " " + clientes[i].name.last;
    botaoEnviar.innerHTML = `Clientes `;
    // phone.innerHTML = `Telefone: ` + clientes[i].phone;
    // endereco.innerHTML = `Cidade: ` + clientes[i].location.city + ', Estado: ' + clientes[i].location.state + ', País: ' + clientes[i].location.country;

    divContainer.appendChild(divColunas);
    divColunas.appendChild(divHeightCard);
    divHeightCard.appendChild(img);
    divHeightCard.appendChild(divCardBody);
    divCardBody.appendChild(nameTitle);
    divCardBody.appendChild(timeZoneDescription);
    divCardBody.appendChild(phone);
    divCardBody.appendChild(endereco);
    divHeightCard.appendChild(link);
    link.appendChild(botaoEnviar);

    document.getElementById('cardsAqui').appendChild(divContainer);
    }
}