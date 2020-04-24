const { Router } = require('express');
const { renderHome, userRegister, userProfile, getProducts } = require('../controllers/home.controller');

const router = Router();

router.get('/', renderHome);

router.post('/register', userRegister);

router.get('/profile', userProfile);

router.get('/products', getProducts)

module.exports =  router;