const mostrarResultados = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const formJSON = Object.fromEntries(data.entries());

    formJSON.complejo = data.getAll('complejo')
    console.log(formJSON);
}



function main (){
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', mostrarResultados)
}

main ();