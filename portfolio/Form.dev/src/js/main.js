import Masks from './modules/mask.js';
import Validate from './modules/validate.js';

const Context = {
    nomeField: document.getElementById('nome'),
    cpfField: document.getElementById('cpf'),
    dt_nascField: document.getElementById('dt_nasc'),
    emailField: document.getElementById('email'),
    foneField: document.getElementById('fone'),
    cepField: document.getElementById('cep')
}

const Main = {
    submitButton: function (event) {
        event.preventDefault();
        if (!Main.validate()) {
            alert('Verifique novamente os campos e preencha-os com dados válidos!')
        } else {
            Validate.pesquisaCEP(Context.cepField.value);
            alert('Os dados foram cadastrados com sucesso!')
        }
    },
    formatError: function (field, err) {
        field.classList.toggle('errorInput', err);
    },
    validate: function () {
        for (const field in Context) {
            if (Validate[Context[field].id] != null) {
                if (Validate[Context[field].id](Context[field].value) != false) {
                    return false;
                }
            }
        }
        return true;
    },
    run: function () {
        for (const field in Context) {
            if (Validate[Context[field].id] == null) {
                Context[field].addEventListener('input', (event) => {
                    Context[field].value = Masks[Context[field].id](Context[field].value)
                })
            } else {
                Context[field].addEventListener('input', (event) => {
                    Context[field].value = Masks[Context[field].id](Context[field].value)
                    Main.formatError(Context[field], Validate[Context[field].id](Context[field].value))
                })
            }
        }
    }
}

window.cep_callback = Validate.cep_callback
Main.run()

export default Main;