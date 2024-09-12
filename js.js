//Mudar página pelo button
const btnCadastrar = document.querySelector('.button-menu button');

function mudarpagina(){
    console.log('ativou');
    window.location.href = 'cadastrar.html';
}

btnCadastrar.addEventListener('click', mudarpagina);