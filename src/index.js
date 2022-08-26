const express = require('express');
const bodyParser = require('body-parser');
const routerTalker = require('../routes/routerTalker');
const routerLogin = require('../routes/routerLogin');

const app = express();
app.use(bodyParser.json());
app.use(routerTalker);
app.use(routerLogin);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
