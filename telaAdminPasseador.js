//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
/*Conexão e if de usuario */
const firebaseConfig = {
  apiKey: "AIzaSyA_XT84Ebukm9-Y5cjtuEJEztdg5qW_-Cg",
  authDomain: "agoravai-218c6.firebaseapp.com",
  projectId: "agoravai-218c6",
  storageBucket: "agoravai-218c6.appspot.com",
  messagingSenderId: "975390263643",
  appId: "1:975390263643:web:48584a10445fd54007727e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

/*Só usuario logados que podem ter acesso a determinadas paginas, como nao estou logado
  não tenho acesso e sou direcionado para a pagina de login */
firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    window.location.href = "login.html";
  }
  firebaseUser = user;
  const usuarioFirebase = user.email;
  usuarioLogado = document.querySelector(".nomeUsuarioLogado");
  usuarioLogado.innerHTML = usuarioFirebase;
});
/*Só usuario logados que podem ter acesso a determinadas paginas */

/*Conexão e if de usuario */
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------

/*Cadastrando informações no banco */

("use strict");
const readClient = () => getLocalStorage();

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage = (db_client) =>
  localStorage.setItem("db_client", JSON.stringify(db_client));

const tabelinha = (tableClient) => {
  const tab = document.getElementById("tableClient");

  tableClient.forEach((tableClient) => {
    const tr = document.createElement("tr");
    tr.classList.add(tableClient.type);

    const nome = document.createElement("td");
    nome.innerHTML = tableClient.nome;
    tr.appendChild(nome);

    const raca = document.createElement("td");
    raca.innerHTML = tableClient.raca;
    tr.appendChild(raca);

    const cor = document.createElement("td");
    cor.innerHTML = tableClient.cor;
    tr.appendChild(cor);

    const idade = document.createElement("td");
    idade.innerHTML = tableClient.idade;
    tr.appendChild(idade);

    const user = document.createElement("td");
    user.innerHTML = tableClient.user.uid;
    tr.appendChild(user);

    const selecionado = document.createElement("td");
    selecionado.innerHTML = `
    <input
                class="teste"
                  type="radio"
                  id="passeador"
                  name="escolha"
                  value="${
                    tableClient.uid +
                    tableClient.raca +
                    " " +
                    tableClient.cor +
                    " " +
                    tableClient.idade +
                    " " +
                    tableClient.nome +
                    tableClient.user.uid
                  }"
                />
Selecionado


             
              
             
          `;
    tr.appendChild(selecionado);

    tab.appendChild(tr);
    document.querySelector("#tableClient>tbody").appendChild(tr);
  });
};

addEventListener("load", (event) => {
  db.collection("cachorro")
    .get()
    .then((snapshot) => {
      const tableClient = snapshot.docs.map((doc) => ({
        ...doc.data().client,
        uid: doc.id, //Aqui estou pegando o id gerado automatico pelo fire e as infos daqui
      }));

      tabelinha(tableClient);

      let varios = document.querySelectorAll(".teste");

      varios.forEach(function (data) {
        data.addEventListener("click", function () {
          ativarCadastroHoraData();

          console.log(data.value);

          db.collection("cachorro")
            .get()
            .then((snapshot) => {
              const tableClient = snapshot.docs.map((doc) => ({
                ...doc.data().client,
                uid: doc.id, //Aqui estou pegando o id gerado automatico pelo fire e as infos daqui
              }));
            });
        });
      });
    });
});
const ativarCadastroHoraData = () => {};

/*Fazer logout quando estiver logado depois de fazer login */

function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.href = "login.html";
    })
    .catch(() => {
      alert("Erro ao fazer logout");
    });
}

/*Fazer logout quando estiver logado depois de fazer login */

/*
Jeito de fazer função com for para pegar em todos os radios os selects e etc



 let varios = document.querySelectorAll('.teste');

      varios.forEach(function(data){
        data.addEventListener('click',function(){
            ativarCadastroHoraData();
        })
      })




            trazer o dado que quer
           console.log(tableClient[1].nome);



*/ 