const express = require('express');
const router = express.Router();

const pages = require('../controllers/website/pages');

// const {validatePage} = require('../middleware');

const catchAsync = require('../utils/catchAsync');


router.route('/:centre')
    .get(catchAsync(pages.renderCentre));



module.exports = router;