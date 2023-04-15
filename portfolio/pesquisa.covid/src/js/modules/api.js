export async function consultaCep(value) {
    try {
      value = value.replace(/[^0-9]/, "");
      const url = `https://viacep.com.br/ws/${value}/json/`;
      const response = await fetch(url);
      const responseResult = await response.json();
      return responseResult;
    } catch (error) {
      console.log(error);
      alert("Erro ao consultar CEP na API!\nInforme um CEP válido.");
    }
  }
  
  export async function covidBrasilApi(value) {
    try {
      const url = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${value}`;
      const response = await fetch(url);
      const responseResult = await response.json();
      return responseResult;
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro ao consultar na Covid19 Brazil API!");
    }
  }