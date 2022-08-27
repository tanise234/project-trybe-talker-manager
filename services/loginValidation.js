const validateEmail = (req, res) => {
    const { email } = req.body;
    console.log('email', email);

    if (!email) {
        return res.status(400).json({
            message: 'O campo "email" é obrigatório',
          });
    }

    const format = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!format.test(email)) {
        return res.status(400).json({
            message: 'O "email" deve ter o formato "email@email.com"',
          });
    }
};

const validatePassword = (req, res) => {
    const { password } = req.body;
    if (!password) {
        return res.status(400).json({
            message: 'O campo "password" é obrigatório',
          });
    }
    if (password.length < 6) {
        return res.status(400).json({
            message: 'O "password" deve ter pelo menos 6 caracteres',
          });
    }
};

const loginValidation = (req, res, next) => {
    validateEmail(req, res);
    validatePassword(req, res);

    next();
};

module.exports = loginValidation;