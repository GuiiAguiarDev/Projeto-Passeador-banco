"use strict";
const readClient = () => getLocalStorage();

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage = (db_client) =>
  localStorage.setItem("db_client", JSON.stringify(db_client));

const createClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};

//Cadastrar Usuario
function cadastrar() {
  const client = {
    usuario: document.getElementById("criacaoUsuario").value,
    senha: document.getElementById("criacaoSenha").value,
    senha1: document.getElementById("criacaoSenhaConfirmacao").value,

    //Pegando as in
    tipo: document.querySelector("input[name='tipo']:checked").value,
  };
  if (client.senha === client.senha1 && client.tipo === "cliente") {
    firebase
      .auth()
      .createUserWithEmailAndPassword(client.usuario, client.senha)
      .then(() => {
        window.location.href = "login.html";
      })
      .catch((error) => {
        alert(getErrorMessage(error));
      });

    db.collection("cachorro").add({
      client: client,
    });
  } else {
    console.log("erro");
    window.location.href = "www.google.com.br";
  }
}
