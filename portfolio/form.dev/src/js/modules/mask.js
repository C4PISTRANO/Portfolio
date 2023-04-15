const Masks = {
    cpf: function (val) {
        return val
            .replace(/\D/g, '')
            .replace(/(^\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(\-\d{2})(\d+?$)/, '$1')
    },
    dt_nasc: function (val) {
        return val
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\/\d{4})(\d+?$)/, '$1')
    },
    fone: function (val) {
        return val
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d)(\d{3})\-(\d)(\d{4})/, '$1$2$3-$4')
            .replace(/(\-\d{4})(\d+?$)/, '$1')
    },
    cep: function (val) {
        return val
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(\-\d{3})(\d+?$)/, '$1')
    },
    nome: function (val) {
        return val
            .replace(/\b(\w)/g, s => s.toUpperCase());
    },
    email: function (val) {
        return val
        .replace(/(\.\.|^\.)/, '')
        .replace(/(\.@|@\.)/, '@');
    }
}

export default Masks;