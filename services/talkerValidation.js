const validateName = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({
            message: 'O campo "name" é obrigatório',
        });
    }
    if (name.length < 3) {
        return res.status(400).json({
            message: 'O "name" deve ter pelo menos 3 caracteres',
        });
    }
};

const validateAge = (req, res) => {
    const { age } = req.body;
    if (!age) {
        return res.status(400).json({
            message: 'O campo "age" é obrigatório',
        });
    }
    if (Number(age) < 18) {
        return res.status(400).json({
            message: 'A pessoa palestrante deve ser maior de idade',
        });
    }
};

const validateTalk = (req, res) => {
    const { talk } = req.body;
    if (!talk) {
        return res.status(400).json({
            message: 'O campo "talk" é obrigatório',
        });
    }
};

const validateWatchedAt = (req, res) => {
    const { talk: { watchedAt } } = req.body;
    if (!watchedAt) {
        return res.status(400).json({
            message: 'O campo "watchedAt" é obrigatório',
        });
    }
   const format = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    if (!format.test(watchedAt)) {
        return res.status(400).json({
            message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
          });
    }
};

const validateRate = (req, res) => {
    const { talk: { rate } } = req.body;
    if (!rate) {
        return res.status(400).json({
            message: 'O campo "rate" é obrigatório',
        });
    }
    if (Number(rate) < 1 || Number(rate) > 5 || !Number.isInteger(rate)) {
        return res.status(400).json({
            message: 'O campo "rate" deve ser um inteiro de 1 à 5',
        });
    }
};

const talkerValidation = (req, res, next) => {
    validateName(req, res);
    validateAge(req, res);
    validateTalk(req, res);
    validateWatchedAt(req, res);
    validateRate(req, res);

    next();
};

module.exports = talkerValidation;