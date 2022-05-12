window.onload = function () {
    fetchApiData();
}

function fetchApiData() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            data.results.forEach((pessoa) => {
                const divContainer = document.createElement('div');
                divContainer.className = 'col';
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
                    <p> Contato: ${pessoa.phone}</p> 
                    <p> Cidade: ${pessoa.location.city} </p>
                    <p> Estado: ${pessoa.location.state} </p>
                    <p> País: ${pessoa.location.country} </p>
                </div>
                <a class="link" href="clientes.html" target="_blank">
                <button class="btn btn1">Enviar</button> </a>
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