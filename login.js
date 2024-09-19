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

function login() {
  showLoading();

  firebase
    .auth()
    .signInWithEmailAndPassword(
      document.getElementById("usuario").value,
      document.getElementById("senha").value
    )
    .then((response) => {
      hideLoading();
      window.location.href = "cadastrar.html";
    })
    .catch((error) => {
      hideLoading();
      alert(error.code);
    });
}

function getErrorMessage(error) {
  if (error.code == "auth/user-not-found") {
    return "usuario não encontrado";
  }
  if (error.code == "auth/wrong-password") {
    return "Senha inválida";
  }
  return error.message;
}

//Recuperar senha
function recoverPassword() {
  showLoading();
  firebase
    .auth()
    .sendPasswordResetEmail(document.getElementById("usuario").value)
    .then(() => {
      hideLoading();
      alert("Email enviado com sucesso");
    })
    .catch((error) => {
      hideLoading();
      alert(getErrorMessage(error));
    });
}
