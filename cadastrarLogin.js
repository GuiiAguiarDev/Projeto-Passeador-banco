//Cadastrar Usuario
function cadastrar(){
    const usuario = document.getElementById('criacaoUsuario').value;
    const senha = document.getElementById('criacaoSenha').value;
    const senha1 = document.getElementById('criacaoSenhaConfirmacao').value;

    if(senha === senha1){
        firebase.auth().createUserWithEmailAndPassword(usuario, senha).then(()=>{
            window.location.href = "login.html"
        }).catch(error =>{
            alert(getErrorMessage(error));
        })
    }else{
        console.log('erro');
    }
    

}









