



/*Validações do email */
function onChangeEmail() {
  toggleButtonsDisable();
  toggleEmailErrors();
}

/*Validações do password */
function onChangePassword() {
  toggleButtonsDisable();
  togglePasswordErrors();
}

function isEmailValid() {
  const email = document.getElementById("email").value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

/*----------------------------- */

/*essas funcoes umas depende da outra */

/*Função de mostrar as mensagens de erro  relacionada ao  campo e-mail, no caso as labels que coloquei no meu form as duas
que são Email é obrigatório e Email invalido, lembrando que está ligado com meu css tbm, pois eu coloquei um display none lá para sumir
eae aqui no caso vou programar para mostrar */
function toggleEmailErrors() {
  /*mostrar a menssagem de campo vazio, email obrigatorio */
  const email = document.getElementById("email").value;
  if (!email) {
    document.getElementById("email-required-error").style.display = "block";
  } else {
    document.getElementById("email-required-error").style.display = "none";
  }

  /*mostrar a menssagem de email invalido no caso no formato*/
  if (validateEmail(email)) {
    document.getElementById("email-invalid-error").style.display = "none";
  } else {
    document.getElementById("email-invalid-error").style.display = "block";
  }
}

/*Função para alterar entre as duas mensagens como tenho duas tive que fazer essa função tambem */
function toggleButtonsDisable() {
  //validação do email está assim se o campo fica vazio vc nao consegue recuperar senha,
  // e se o email estiver errado vc tambem nao consegue
  const emailValid = isEmailValid();
  document.getElementById("recover-password-button").disabled = !emailValid;

  //botão entrar vai ficar desabilitado s e agente nao tiver um login ou uma senha ou seja tem que ter os dois
  const passwordValid = isPasswordValid();
  document.getElementById("login-button").disabled =
    !emailValid || !passwordValid;
}
/*essas funcoes umas depende da outra */

/*----------------------------- */

/*Função de motrar erro na tela, relacionado ao formulario do campo senha */

function togglePasswordErrors() {
  const password = document.getElementById("password").value;
  if (!password) {
    document.getElementById("password-required-error").style.display = "block";
  } else {
    document.getElementById("password-required-error").style.display = "none";
  }
}

/*Função de motrar erro na tela, relacionado ao formulario do campo senha */

function isPasswordValid() {
  const password = document.getElementById("password").value;
  if (!password) {
    return false;
  }
  return true;
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function login() {
  showLoading();

  firebase
    .auth()
    .signInWithEmailAndPassword(
      document.getElementById("email").value,
      document.getElementById("password").value
    )
    .then((response) => {
      hideLoading();
      window.location.href = "cadastrar.html";
    
    })
    .catch((error) => {
      hideLoading();
      console.log("error", error);
      alert(getErrorMessage(error));
    });
}

function getErrorMessage(error) {
  if (error.code == "auth/invalid-credential") {
    return "Usuário ou senha inválida";
  }

  return error.message;
}

//Recuperar senha
function recoverPassword() {
  showLoading();
  firebase
    .auth()
    .sendPasswordResetEmail(document.getElementById("email").value)
    .then(() => {
      hideLoading();
      alert("Email enviado com sucesso");
    })
    .catch((error) => {
      hideLoading();
      alert(getErrorMessage(error));
    });
}

/*Fazer logout quando estiver logado depois de fazer login */

function logout(){
  firebase.auth().signOut().then(()=>{
    window.location.href = 'login.html';}).catch(() =>{
      alert('Erro ao fazer logout');
    
  })
}


/*Fazer logout quando estiver logado depois de fazer login */




