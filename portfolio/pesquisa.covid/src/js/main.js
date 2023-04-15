import mascara from "./modules/mask.js";
import { consultaCep, covidBrasilApi } from "./modules/api.js";

const button = document.querySelector("#button");
const cepInput = document.querySelector("#cep");

button.addEventListener("click", (e) => {
  e.preventDefault();
  Promise.all([consultaCep(cepInput.value)]).then((dataCep) => {
    dataCep = Object.values(dataCep[0]);
    let uf = dataCep[5];
    let city = dataCep[4];

    if (uf != undefined) { 
        Promise.all([covidBrasilApi(uf)]).then((dataCovid) => {
        preencherResultados(dataCovid);
      });
    } else {
      alert("CEP incorreto!\nInsira um CEP válido.");
    }
  });
});

cepInput.addEventListener("input", (e) => {
  e.target.value = mascara.cep(e.target.value);
});

function preencherResultados(data) {
  data = data[0];
  document.querySelector("#span_estado").innerHTML = data.state;
  // document.querySelector("#span_cidade").innerHTML = data.city;
  document.querySelector("#span_casos").innerHTML = data.cases;
  document.querySelector("#span_mortes").innerHTML = data.deaths;
  document.querySelector("#span_atualizacao").innerHTML = formatarDate(
    data.datetime
  );
}

function formatarDate(value) {
  const date = new Date(value);
  let day = date.getDate();
  let month = date.getMonth() +1 ;
  let year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
