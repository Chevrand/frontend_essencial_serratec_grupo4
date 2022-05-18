window.onload = function () {
    fetchApiDataPatrick();
    fetchApiDataTheo();
    fetchApiDataSarah();
    fetchApiDataChevrand();
}

function fetchApiDataPatrick() {
    fetch('https://api.github.com/users/Patrick-Jabba')
        .then(response => response.json())
        .then(data => {
            // data.results.forEach((pessoa) => {
            const divContainer = document.createElement('div');
            divContainer.className = 'col';
            divContainer.innerHTML =
                `
            <div class="card h-100 d-flex flex-column turmaArrepio">
                <img src="${data.avatar_url}"
                class="card-img-top devProfiles"
                alt= "imagem de pessoa capturada pela API"
                />
                <img class="image-hover" src="assets/lobiboy200.png" alt="lobisomem desenhado">
                <div class="card-body">
                    <h5 class="card-title">${data.name} </h5>
                    <p> ${data.bio}</p>
                </div>
                <div class="favIcons">
                <a href="https://www.linkedin.com/in/patrick-monteiro-fischer-1316369b/" target="_blank">
                    <i class="fa-brands fa-linkedin fa-xl"></i>
                </a>
                <a href="https://github.com/Patrick-Jabba" target="_blank"><i
                        class="fa-brands fa-github fa-xl"></i></a>
            </div>
            </div>
        `;
            document.getElementById('cardsAqui').appendChild(divContainer);
            // });
        });
}

function fetchApiDataTheo() {
    fetch('https://api.github.com/users/theobitt')
        .then(response => response.json())
        .then(data => {
            // data.results.forEach((pessoa) => {
            const divContainer = document.createElement('div');
            divContainer.className = 'col';
            divContainer.innerHTML =
                `
            <div class="card h-100 d-flex flex-column turmaArrepio">
                <img src="${data.avatar_url}"
                class="card-img-top devProfiles"
                alt= "imagem de pessoa capturada pela API"
                />
                <img class="image-hover" src="assets/muminha200.png" alt="muminha">
                <div class="card-body">
                    <h5 class="card-title">${data.name} </h5>
                    <p> ${data.bio}</p>
                </div>
                <div class="favIcons">
                <a href="https://www.linkedin.com/in/theobittencourt/" target="_blank">
                    <i class="fa-brands fa-linkedin fa-xl"></i>
                </a>
                <a href="https://github.com/theobitt" target="_blank"><i class="fa-brands fa-github fa-xl"></i></a>
            </div>
            </div>
        `;
            document.getElementById('cardsAqui').appendChild(divContainer);
            // });
        });
}

function fetchApiDataSarah() {
    fetch('https://api.github.com/users/Sarah-Almeida-Ferreira')
        .then(response => response.json())
        .then(data => {
            // data.results.forEach((pessoa) => {
            const divContainer = document.createElement('div');
            divContainer.className = 'col';
            divContainer.innerHTML =
                `
            <div class="card h-100 d-flex flex-column turmaArrepio">
                <img src="${data.avatar_url}"
                class="card-img-top devProfiles"
                alt= "imagem de pessoa capturada pela API"
                />
                <img class="image-hover" src="assets/bruxinha200.png" alt="vampirinho">
                <div class="card-body">
                    <h5 class="card-title">${data.name} </h5>
                    <p> ${data.bio}</p>
                </div>

                <div class="favIcons">
                    <a href="https://www.linkedin.com/in/sarah-almeida-9161b9215" target="_blank">
                        <i class="fa-brands fa-linkedin fa-xl"></i>
                    </a>
                    <a href="https://github.com/Sarah-Almeida-Ferreira" target="_blank"><i
                            class="fa-brands fa-github fa-xl"></i></a>
                </div>

            </div>
        `;
            document.getElementById('cardsAqui').appendChild(divContainer);
            // });
        });
}

function fetchApiDataChevrand() {
    fetch('https://api.github.com/users/Chevrand')
        .then(response => response.json())
        .then(data => {
            // data.results.forEach((pessoa) => {
            const divContainer = document.createElement('div');
            divContainer.className = 'col';
            divContainer.innerHTML =
                `
            <div class="card h-100 d-flex flex-column turmaArrepio">
                <img src="${data.avatar_url}"
                class="card-img-top devProfiles"
                alt= "imagem de pessoa capturada pela API"
                />
                <img class="image-hover" src="assets/frank200.png" alt="frankstein desenhado">
                <div class="card-body">
                    <h5 class="card-title">${data.name} </h5>
                    <p> ${data.bio}</p>
                </div>

                <div class="favIcons">
                <a href="https://www.linkedin.com/in/wanderson-chevrand-da-costa-a878451a5" target="_blank">
                    <i class="fa-brands fa-linkedin fa-xl"></i>
                </a>
                <a href="https://github.com/Chevrand" target="_blank"><i class="fa-brands fa-github fa-xl"></i></a>
            </div>
                
            </div>
        `;
            document.getElementById('cardsAqui').appendChild(divContainer);
            // });
        });
}