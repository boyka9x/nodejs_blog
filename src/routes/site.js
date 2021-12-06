const express = require('express');
const router = express.Router();

const newController = require('../app/controllers/SiteController');


router.get('/search', newController.search);
router.get('/', newController.index);


module.exports = router;