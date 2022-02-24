const mongoose = require('mongoose');

const Vagas = mongoose.model('Vagas', {
    titulo: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    }
})

module.exports = Vagas;