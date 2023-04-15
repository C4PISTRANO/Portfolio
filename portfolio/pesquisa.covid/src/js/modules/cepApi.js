export default class Cep {

  clearUl() {
    const container = document.getElementById('container');
    container.innerHTML = '';
  }

  async cepToState() {
    let cep = document.getElementById('cep').value;
  
    cep = cep.replace(/\D/g, '');
    let uf = await this.getState(cep);
    return uf;
  }

  async getState(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
      const stateResponse = await fetch(url, {mode: 'cors'});
      const data = await stateResponse.json();
      return data.uf.toLowerCase();

    } catch(err) {
      return 'CEP Inválido';
    }
  }
}

