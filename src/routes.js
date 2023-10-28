const { Router } = require('express');
const router = Router();

const ContactController = require('./app/controllers/ContactController');

router.get('/contacts', (request, response) => {
  response.send({ message: '🍋 Hello World!' });
})


module.exports = router;
