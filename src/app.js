const express = require('express');
const { userRouter, categoryRouter } = require('./routes');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/', userRouter);
app.use('/categories', categoryRouter);

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
