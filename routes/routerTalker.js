const { Router } = require('express');
const { getAllTalkers, getTalkerById, verifyId, deleteById } = require('../services/fileManager');
const tokenValidation = require('../services/tokenValidation');
const talkerValidation = require('../services/talkerValidation');

const routerTalker = Router();

routerTalker.get('/talker', async (req, res) => {
    try {
        const talkers = await getAllTalkers();
        return res.status(200).json(talkers);
    } catch (error) {
        return error;
    }
});

routerTalker.get('/talker/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const talker = await getTalkerById(Number(id));
        if (talker) {
            return res.status(200).json(talker);
        }
        return res.status(404).json({
            message: 'Pessoa palestrante não encontrada',
        });
    } catch (error) {
        return error;
    }
});

routerTalker.post('/talker', tokenValidation, talkerValidation, async (req, res) => {
    try {
        const talker = req.body;
        const id = await verifyId(talker);
        return res.status(201).json([{ id, ...talker }]);
    } catch (error) {
        return error;
    }
});

routerTalker.put('/talker/:id', tokenValidation, talkerValidation, async (req, res) => {
    try {
        const { id } = req.params;
        return res.status(200).json([{ id }]);
    } catch (error) {
        return error;
    }
});

routerTalker.delete('/talker/:id', tokenValidation, async (req, res) => {
    try {
        const { id } = req.params;
        deleteById(id);
        return res.status(204).end();
    } catch (error) {
        return error;
    }
});

module.exports = routerTalker;