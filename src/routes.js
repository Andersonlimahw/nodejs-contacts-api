const { Router } = require('express');
const router = Router();

const ContactController = require('./app/controllers/ContactController');

router.post('/contacts', ContactController.store);
router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.put('/contacts/:id', ContactController.update);
router.delete('/contacts/:id', ContactController.delete);


module.exports = router;
