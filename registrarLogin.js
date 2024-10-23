//Cadastrar Usuario
function cadastrar() {

  const usuario = document.getElementById("criacaoUsuario").value;
  const senha = document.getElementById("criacaoSenha").value;
  const senha1 = document.getElementById("criacaoSenhaConfirmacao").value;

  //Pegando as in
  const tipo = document.querySelector("input[name='tipo']:checked").value;

  if (senha === senha1 && tipo === "cliente") {
    firebase
      .auth()
      .createUserWithEmailAndPassword(usuario, senha)
      .then(() => {
        window.location.href = "login.html";
      })
      .catch((error) => {
        alert(getErrorMessage(error));
      });

    db.collection("Users").add({
      client:
      usuario,
      senha,
      senha1,
      tipo,
    });
  } else {
    console.log("erro");
    window.location.href = "www.google.com.br";
  }
}
