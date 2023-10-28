const express = require('express')
const routes = require('./routes');

const app = express();

app.use(express.json()) // body parse to POSTs endpoints
app.use(routes);
app.listen(3000, () => console.log('🍋 Server is running!'));
