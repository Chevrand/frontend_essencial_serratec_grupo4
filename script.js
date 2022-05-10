window.onload = function () {
    fetchApiData();
}

function fetchApiData() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            const divContainer = document.createElement('div');
            divContainer.className = 'row row-cols-12 row-cols-sm-12 row-cols-md-6 g-lg-6 container-fluid';
            for (i = 0; i < 5; i++) {
                const divColunas = document.createElement('div');
                divColunas.className = 'col';
                const divHeightCard = document.createElement('div');
                divHeightCard.className = 'card h-100 d-flex flex-column';
                const img = document.createElement('img');
                img.className = 'card-img-top';
                const divCardBody = document.createElement('div');
                divCardBody.className = 'card-body';
                const nameTitle = document.createElement('h5');
                nameTitle.className = 'card-title';
                const timeZoneDescription = document.createElement('p');
                // const phone = document.createElement('p');
                // const endereco = document.createElement('p');
                const link = document.createElement('a');
                link.className = 'link';
                link.href = 'clientes.html';
                link.setAttribute('target', '_blank');
                const botaoEnviar = document.createElement('button');
                botaoEnviar.className = 'btn btn1';

                img.src = data.results[i].picture.large;
                nameTitle.innerHTML = `Nome: ` + data.results[i].name.first + " " + data.results[i].name.last;
                timeZoneDescription.innerHTML = `Fuso: ` + data.results[i].location.timezone.description;
                botaoEnviar.innerHTML = `Enviar `;
                // botaoEnviar.innerHTML = `Enviar`;
                // phone.innerHTML = `Telefone: ` + data.results[i].phone;
                // endereco.innerHTML = `Cidade: ` + data.results[i].location.city + ', Estado: ' + data.results[i].location.state + ', País: ' + data.results[i].location.country;

                
                divContainer.appendChild(divColunas);
                divColunas.appendChild(divHeightCard);
                divHeightCard.appendChild(img);
                divHeightCard.appendChild(divCardBody);
                divCardBody.appendChild(nameTitle);
                divCardBody.appendChild(timeZoneDescription);
                divHeightCard.appendChild(link);
                link.appendChild(botaoEnviar);
                // divCardBody.appendChild(phone);
                // divCardBody.appendChild(endereco);


            }
            document.getElementById('cardsAqui').appendChild(divContainer);
            
        })
}