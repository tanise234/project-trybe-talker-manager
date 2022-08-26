const { Router } = require('express');
const talkers = require('../src/talker.json');

const routerTalker = Router();

routerTalker.get('/talker', (req, res) => res.status(200).json(talkers));

module.exports = routerTalker;