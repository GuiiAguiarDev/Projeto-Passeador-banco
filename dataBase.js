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

const saveClient = () => {
 
  console.log("funcionou");
  const client = {
    nome: document.getElementById("nome").value,
    raca: document.getElementById("raca").value,

    cor: document.getElementById("cor").value,

    idade: document.getElementById("idade").value,
  };

db.collection("cachorro").add({
    client:client
});

  createClient(client);
};

document.getElementById("salvar").addEventListener("click", saveClient);
