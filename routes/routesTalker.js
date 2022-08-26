const { Router } = require('express');
const { getAllTalkers } = require('../services/fileManager');
// const talkers = require('../src/talker.json');

const routerTalker = Router();

routerTalker.get('/talker', async (req, res) => {
    const talkers = await getAllTalkers();
    return res.status(200).json(talkers);
});

// routerTalker.get('/talker/:id', (req, res) => res.status(200).json(talkers));

module.exports = routerTalker;