const { Router } = require('express');
const router = Router();

const ContactController = require('./app/controllers/ContactController');
const CategoriesController = require('./app/controllers/CategoryController');

router.post('/contacts', ContactController.store);
router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.put('/contacts/:id', ContactController.update);
router.delete('/contacts/:id', ContactController.delete);

router.get('/categories', CategoriesController.index);
router.post('/categories', CategoriesController.store);


module.exports = router;
