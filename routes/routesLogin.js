const { Router } = require('express');

const routerLogin = Router();

routerLogin.post('/login', (req, res) => {
    // const info = req.body;
    const token = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    // res.status(200).json({ token: Math.random().toString(16).substring(2) });
    res.status(200).json({ token });
});

module.exports = routerLogin;