fetch(`https://randomuser.me/api/?results=5`).then(dados => {
    return dados.json();
}).then(data =>{
    console.log(data.results);
})

function atribuirCampos(data){
    const primeiroUsuario =  document.querySelector(`#primeiro`);
}