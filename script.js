function fetchApiData(){
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            for (i = 0; i <5; i++){
                const div = document.createElement('div');
                const img = document.createElement('img')
                const f = document.createElement('p');
                const w = document.createElement('p');
                const c = document.createElement('p');
                const d = document.createElement('p');
                img.src = data.results[i].picture.large;
                f.innerHTML = `Nome Completo: ` + data.results[i].name.title + " " + data.results[i].name.first + " " + data.results[i].name.last;
                w.innerHTML = `e-mail: ` + data.results[i].email;
                c.innerHTML = `Telefone: ` + data.results[i].phone;
                d.innerHTML = `Cidade: ` + data.results[i].location.city + ', Estado: ' +data.results[i].location.state + ', País: ' + data.results[i].location.country;
                
                div.appendChild(img)
                div.appendChild(f);
                div.appendChild(w);
                div.appendChild(c);
                div.appendChild(d);
                document.body.appendChild(div);
                document.body.classList.add('card-body')
            }
            })
        }