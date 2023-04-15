export default class Covid {

  container = document.getElementById('container');

  liError = `<ul><li class="error">Cep inválido</li></ul>`;

  findState(uf) {
    return fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`);
  }

  async returnResults(uf) {
    try {
      const stateResponse = await this.findState(uf);
      const data = await stateResponse.json();
      if (data.error) {
        this.container.innerHTML = this.liError;
      } else {
        this.render(data.state, data.uf, data.cases, data.deaths, data.suspects);
      }
    } catch (err) {
      this.container.innerHTML = 'Erro';
    }
  }

  render(state, uf, cases, deaths, suspects) {
    let ul = document.createElement('ul');
    ul.id = 'states';
    this.container.appendChild(ul);

    let li = document.createElement('li');
    li.innerHTML = `<li>
    <div class="title">
    <h2>${state}</h2>
    <p>${uf}</p>
    </div>
    <h3>Casos: ${cases}</h3>
    <h3>Mortes: ${deaths}</h3>
    <h3>Suspeitos: ${suspects}</h3>
    </li>`;

    ul.appendChild(li);

  }
}