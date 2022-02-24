const express = require('express');
const router = express.Router();
const Vagas = require('../models/vagas')


//Todos os registros
router.get('/', async (req, res) => {
    try {
        const vagas = await Vagas.find({});
        res.json(vagas);
    } catch (err) {
        res.json({ error: true, massage: err.massage });
    }
});

//Registros por id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const vagas = await Vagas.findById(id);
        res.json(vagas);
    } catch (err){
        res.json({ error: true, massage: err.massage });
    }
});

//inserir registros
router.post('/', async (req, res) => {
    try {
        const vagas = req.body;
        const response = await new Vagas(vagas).save();
        res.json(response);
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

//alterar registros
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const vagas = req.body;
        const vagaAtualizada = await Vagas.findByIdAndUpdate(id, vagas);
        res.json(vagaAtualizada);
    } catch (err) {
        res.json({ error: true, message: err.mensagem });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Vagas.findByIdAndRemove(id);
        res.json({ error: false })
    } catch (err) {
        res.json({ error: true, message: err.mensagem });
    }
});


module.exports = router;