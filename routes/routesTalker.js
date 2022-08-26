const { Router } = require('express');
const { getAllTalkers, getTalkerById } = require('../services/fileManager');

const routerTalker = Router();

routerTalker.get('/talker', async (req, res) => {
    const talkers = await getAllTalkers();
    return res.status(200).json(talkers);
});

routerTalker.get('/talker/:id', async (req, res) => {
    const { id } = req.params;
    const talker = await getTalkerById(Number(id));
    if (talker) {
        return res.status(200).json(talker);
    }
    return res.status(404).json({
        message: 'Pessoa palestrante não encontrada',
      });
});

module.exports = routerTalker;