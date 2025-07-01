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
});