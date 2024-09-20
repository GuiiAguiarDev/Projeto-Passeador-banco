/*Cadastrando informações no banco */
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
    //Mesmo nao tendo o campo estou vinculando o meu salvamento no banco com o usuario que estou logado
    user:{
      uid: firebase.auth().currentUser.email
    } 
  };

db.collection("cachorro").add({
    client:client
});

db.collection('cachorro').onSnapshot(function(data){

  let list = document.querySelector('#tableClient>tbody');

  data.docs.map(function(val){
      list.innerHTML+=`<td>${val.data().client.nome}</td>`+`<td>${val.data().client.raca}</td>`+`<td>${val.data().client.cor}</td>`+`<td>${val.data().client.idade}</td>`+`<td>${val.data().client.user.uid}</td>`;
  
    
  })
  createClient(client);
  updatetable();
})

 
};


const createRow = (client, index) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>${client.nome}</td>
  <td>${client.raca}</td>
  <td>${client.cor}</td>
  <td>${client.idade}</td>
  <td>${client.user.uid}</td>

  <td>
 
  `;

  //Arruma depois aqui ou la em cima
  document.querySelector("#tableClient>tbody").appendChild(newRow);





















};


const updatetable = () => {
  const dbClient = readClient();
  //Depois que atualizar limpar tabela
  dbClient.forEach(createRow);
};




document.getElementById("salvar").addEventListener("click", saveClient);
/*Cadastrando informações no banco */

