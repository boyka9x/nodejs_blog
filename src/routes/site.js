const express = require('express');
const router = express.Router();

const newController = require('../app/controllers/SiteController');


router.use('/search', newController.search);
router.use('/', newController.index);


module.exports = router;