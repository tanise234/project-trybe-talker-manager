const { Router } = require('express');
const loginValidation = require('../services/loginValidation');

const routerLogin = Router();

routerLogin.post('/login', loginValidation, (req, res) => {
    const token = Math.random().toString(36).substring(2, 10)
    + Math.random().toString(36).substring(2, 10);
    res.status(200).json({ token });
});

module.exports = routerLogin;