document.addEventListener("DOMContentLoaded", () => {
  const btnComecar = document.getElementById("btnComecar");
  const modal = document.getElementById("modalEscolha");
  const btnLogin = document.getElementById("btnLogin");
  const btnCadastro = document.getElementById("btnCadastro");
  const formLogin = document.getElementById("formLogin");

  btnComecar.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
  });

  btnLogin.addEventListener("click", () => {
    formLogin.classList.remove("hidden");
  });

  btnCadastro.addEventListener("click", () => {
    window.location.href = "cadastro.html";
  });

  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("emailLogin").value;
    const senha = document.getElementById("senhaLogin").value;

    alert(`Login simulado:\nEmail: ${email}\nSenha: ${senha}`);

    modal.classList.add("hidden");
    formLogin.classList.add("hidden");
  });

  async function carregarProdutos() {
    try {
      const resposta = await fetch("https://apisware.onrender.com/produto/todos");
      const produtos = await resposta.json();

      mostrarProdutos(produtos);
    } catch (erro) {
      console.error("Erro ao carregar produtos:", erro);
    }
  }

  function mostrarProdutos(produtos) {
    const container = document.getElementById("produtos");
    container.querySelectorAll("article.produto").forEach(el => el.remove());

    const primeiros10 = produtos.slice(0, 10);

    primeiros10.forEach(produto => {
      //const imgUrl = `https://apisware.onrender.com/produto/imagem/${produto.id}`; muito pesado fazer essa consulta para buscar no banco.

      const imgNome = produto.nome.replace(/\s/g, "").toLowerCase(); // remove espaços
      console.log("nome: " + imgNome);
      const imgUrl = `assets/${imgNome}.png`; //solução temporaria até pegar um DB maior

      const artigo = document.createElement("article");
      artigo.classList.add("produto");

      artigo.innerHTML = `
      <h3>${produto.nome}</h3>
      <img src="${imgUrl}" alt="${produto.nome}" />
      <p>${produto.descricao || "Sem descrição"}</p>
      <p><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>
    `;

      container.appendChild(artigo);
    });
  }

  carregarProdutos();
});
