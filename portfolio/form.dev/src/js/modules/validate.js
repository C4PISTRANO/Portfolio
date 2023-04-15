const Validate = {
    result: document.getElementById('endereco'),
    /*
        Baseado na explicação de José Carlos Macoratti
        Link: https://www.macoratti.net/alg_cpf.htm
        Acessado em: 23/04/2022
    */
    cpf: function (val) {
        let acpf = val.replace(/\D/g, '').split(/(?:)/u)
        let d1 = 0
        let d2 = 0

        if (acpf.length < 11) {
            return true
        }

        if (acpf.join('').replaceAll(acpf[0], '').length < 1) {
            return true
        }

        for (let i = 0; i < 9; i++) {
            d1 += acpf[i] * (10 - i)
        }

        d1 %= 11
        d1 = (d1 < 2) ? 0 : (11 - d1)
        d2 = d1 * 2

        if (acpf[9] != d1) {
            return true
        }

        for (let i = 0; i < 9; i++) {
            d2 += acpf[i] * (11 - i)
        }

        d2 %= 11
        d2 = (d2 < 2) ? 0 : (11 - d2)

        if (acpf[10] != d2) {
            return true
        }
        return false
    },
    dt_nasc: function (val) {
        let dt = val.match(/(?<days>\d{2})\/(?<month>\d{2})\/(?<year>\d{2,4})/)

        if (dt == null) {
            return true
        }

        let day = Number(dt.groups.days)
        let month = Number(dt.groups.month)
        let year = Number(dt.groups.year)


        if ((month < 1) || (month > 12)) {
            return true
        }

        let now = new Date().getFullYear();

        if ((year < 1900) || (year > now)) {
            return true
        }

        if ((day < 1) || (day > Validate.daysInMonth(month, year))) {
            return true
        }
        return false
    },
    nome: function (val) {
        let res = val.match(/(\S+)/gm)
        return res?.length < 2 | res == null
    },
    email: function (val) {
        // https://datatracker.ietf.org/doc/html/rfc2822#section-3.4.1
        const RFC2822 = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        return val.match(RFC2822) == null;
    },
    fone: function (val){
        const len = val.replace(/\D/g, '').length
        return (len != 10) && (len != 11)
    },
    cep: function (val){
        const validacep = /^[0-9]{8}$/;
        return !validacep.test(val.replace(/\D/g, ''))
    },
    daysInMonth: function (month, year) {
        return new Date(year, month, 0).getDate();
    },
    // https://viacep.com.br/exemplo/javascript/
    cep_callback: function (conteudo) {
        if (!("erro" in conteudo)) {
            Validate.result.innerText = ""
        }
        else {
            Validate.result.innerText = "Ocorreu um erro ou o CEP é inválido!";
            return true
        }
        return false;
    },
    pesquisaCEP: function (valor) {
        const cep = valor.replace(/\D/g, '');

        console.log(cep);
        if (cep != "") {
            const validacep = /^[0-9]{8}$/;

            if (validacep.test(cep)) {

                Validate.result.innerText = "Aguarde...";
                let script = document.createElement('script');

                script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=cep_callback';

                document.body.appendChild(script);

            }
            else {
                Validate.result.innerText = "CEP inválido!";
                return true
            }
        }
        else {
            Validate.result.innerText = "CEP inválido!";
            return true
        }
        return false
    }
}

export default Validate;