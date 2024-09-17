function validFields() {
  const usuarioValid = isUsuarioValid();
  document.getElementById("recover-password-button").disabled = !usuarioValid;

  const passSenha = isPasswordValid();
  document.getElementById("login-button").disabled =
    !usuarioValid || !passSenha;

  console.log("oi");

}

function isUsuarioValid() {
  const usu = document.getElementById("usuario").value;
  if (!usu) {
    return false;
  }
  return true;
}

function isPasswordValid() {
  const passWord = document.getElementById("senha").value;
  if (!passWord) {
    return false;
  }
  return true;
}

function login(){
    const auth = firebase.auth().signInWithEmailAndPassword(document.getElementById('usuario').value ,document.getElementById('senha').value).then(response =>{
        console.log("sucesso", response);
        window.location.href = "cadastrar.html";
    }).catch(error =>{
        console.log("Error",error)
    });
}


