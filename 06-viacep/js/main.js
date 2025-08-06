const cep = document.getElementById("cep");
const rua = document.getElementById("street");
const bairro = document.getElementById("neighborhood");
const estado = document.getElementById("state");
const cidade = document.getElementById("city");
const erroCep = document.getElementById("cepError");
const url = "https://viacep.com.br/ws/";

cep.addEventListener("blur", () => {
  const valorCep = cep.value.replace(/\D/g, "");
  if (valorCep.length !== 8) {
    erroCep.classList.remove("hidden");
    return;
  }
  fetch(`${url}${valorCep}/json/`)
    .then((res) => res.json())
    .then((dados) => {
      if (dados.erro) {
        erroCep.classList.remove("hidden");
        return;
      }
      rua.value = dados.logradouro || "";
      bairro.value = dados.bairro || "";
      estado.value = dados.uf || "";
      cidade.value = dados.localidade || "";
      erroCep.classList.add("hidden");
    })
    .catch(() => erroCep.classList.remove("hidden"));
});

cep.addEventListener("input", () => {
  rua.value = "";
  bairro.value = "";
  estado.value = "";
  cidade.value = "";
  erroCep.classList.add("hidden");
});
