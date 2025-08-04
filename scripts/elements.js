const botoes = document.querySelectorAll(".buttons-tab");
const paineisDeConteudo = document.querySelectorAll(".display");
const paineisParaAdicionar = document.querySelectorAll(".section-add");
const btnAdicionar = document.querySelectorAll(
  "#btn-add-jogos, #btn-add-filmes, #btn-add-series"
);
const btnCancelar = document.querySelectorAll(
  ".btn-cancell-jogos, .btn-cancell-filmes, .btn-cancell-series"
);

const corAtiva = "#5865F2";
const corInativa = "rgb(54, 57, 63)";

paineisParaAdicionar.forEach((painel) => (painel.style.display = "none"));

function removerAdicao(idContainerAdicionar) {
  btnCancelar.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      idContainerAdicionar.style.display = "none";
    });
  });
}

function buttonParaAdicionar() {
  btnAdicionar.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      const idDoFormulario = btn.dataset.formId;
      containerParaAdicionar(idDoFormulario);
    });
  });
}

function containerParaAdicionar(idDoPainelParaMostrar) {
  paineisParaAdicionar.forEach((painel) => {
    painel.style.display = "none";
  });
  const containerVisivel = document.getElementById(idDoPainelParaMostrar);

  removerAdicao(containerVisivel);

  containerVisivel.style.display = "flex";
}

function exibirPaineis(idDoPainelParaMostrar) {
  paineisDeConteudo.forEach((painel) => {
    painel.style.display = "none";
  });
  const painelVisivel = document.getElementById(idDoPainelParaMostrar);
  painelVisivel.style.display = "flex";
}

botoes.forEach((botaoClicado) => {
  botaoClicado.addEventListener("click", function (event) {
    botoes.forEach((btnCor) => {
      btnCor.style.background = corInativa;
    });
    botaoClicado.style.background = corAtiva;

    const abaSelecionada = botaoClicado.dataset.tab;

    exibirPaineis(abaSelecionada);

    let algumPainelAddVisivel = false;
    paineisParaAdicionar.forEach((painel) => {
      if (painel.style.display === "flex") {
        algumPainelAddVisivel = true;
      }
    });

    if (algumPainelAddVisivel) {
      const idDoPainelDeAdicionar = `add-${abaSelecionada}`;
      containerParaAdicionar(idDoPainelDeAdicionar);
    }
  });
});

buttonParaAdicionar();
