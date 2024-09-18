function showLoading() {
  const div = document.createElement("div");
  div.classList.add("loading", "centralize");

  const p = document.createElement("p");
  p.innerHTML = "Carregando...";
  div.appendChild(p);
  document.body.appendChild(div);

  setTimeout(() =>hideLoading(), 2000);

}

function hideLoading() {
    const loadings = document.getElementsByClassName('loading');
    if(loadings.length){
        loadings[0].remove();
        window.location.href = "cadastrar.html";

    }

}
