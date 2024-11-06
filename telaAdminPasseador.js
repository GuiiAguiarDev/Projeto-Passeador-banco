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
                class="pegandoInformacoesRadio"
                  type="radio"
                  id="selecionadoRadio"
                  name="escolha"
                  value="${
                    tableClient.cor +
                    " " +
                    tableClient.idade +
                    " " +
                    tableClient.nome +
                    " " +
                    tableClient.raca +
                    " " +
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

function pegandoInformacoesRadioSelecionandoPet() {
  db.collection("cachorro")
    .get()
    .then((snapshot) => {
      const tableClient = snapshot.docs.map((doc) => ({
        ...doc.data().client,
        uid: doc.id, //Aqui estou pegando o id gerado automatico pelo fire e as infos daqui
      }));

      //Loga na página inicia com os dados
      tabelinha(tableClient);

      //Pegando as informações do radio quando eu clicar nele
      const informacoesRadio = document.querySelectorAll(
        ".pegandoInformacoesRadio"
      );

    informacoesRadio.forEach(function (data) {
        data.addEventListener("click", function () {
          //tras  ainformações do meu value do radio quando eu seleciono oq eu quero ou seja ele
          //tras as informações do que eu selecionei, vou deixar ocmentado
          // console.log(data.value);

          //transofrmando os dados que estão no value do radio quando eu seleciono o que eu quero
          //em array

          console.log(data);

          const array = data.value.split(" ");
          console.log(array);

          const nomeee = array[2];

          console.log(nomeee);

          const tabelaServico = (tableServ) => {
            const tab = document.getElementById("tableServ");

            //Como abaixo quero retornar apenas um item e nao todos, e sim só o que eu selecionei
            //eu vou tirar o forEach vou deixar ele comentado abaixo para eu lebrar como era 
            //quiser mostrar todos só descomentar ele, nao exquecer de descomentar o }) la no fim
            //tableServ.forEach((tableServ) => {
              const tr = document.createElement("tr");
              tr.classList.add(tableServ.type);

              const nome = document.createElement("td");
              nome.innerHTML = array[2];
              tr.appendChild(nome);

              const user = document.createElement("td");
              user.innerHTML = array[4];
              tr.appendChild(user);

              const raca = document.createElement("td");
              raca.innerHTML = array[3];
              tr.appendChild(raca);

              tab.appendChild(tr);
              document.querySelector("#tableServ>tbody").appendChild(tr);
              clearTable();
          //});
          };

          tabelaServico(tableClient);
        });
      });
    });
}

pegandoInformacoesRadioSelecionandoPet();



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

/*Quando eu clicar no radio e selecionar o pet

abrir um modal ou tabela para eu cadastrar o serviço*/

/*Quando eu clicar no radio e selecionar o pet

abrir um modal ou tabela para eu cadastrar o serviço*/

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



const clearTable = () => {
  const rows = document.querySelectorAll("#tableServ>tbody td");
  const del = document.querySelectorAll("#tableServ>tbody tr");

  if(rows.length >= 7){
    rows.forEach((row) => row.parentNode.removeChild(row));
    del.forEach((row) => row.parentNode.removeChild(row)); //
    console.log(rows);
    console.log(del);
  }

};

