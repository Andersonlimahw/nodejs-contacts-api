require('express-async-errors');

const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json()) // body parse to POSTs, PUTs, PATCHs endpoints
app.use(routes);

// Error Handler (Middleware express) -> Manipulador de erros, recebe todos os erros não tratados, se fazendo desnecessário o uso do try catch
app.use((error, request, response, next) => {
  console.error('Error happens: error => ', error);
  response.status(500).json({
    error,
    request,
    code: 500,
    message: 'Error happens!'
  });
});
app.listen(3000, () => console.log('🍋 Server is running!'));
