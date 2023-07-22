const router = require('express').Router();
const { allOther } = require('../controllers/allOther');

router.use('*', allOther);

module.exports = router;
