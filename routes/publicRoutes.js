const router = require('express').Router();
const { validateLoginUser, validateCreateUser } = require('../utils/validators');
const { login, createUser } = require('../controllers/user');

router.post('/signin', validateLoginUser, login);
router.post('/signup', validateCreateUser, createUser);

module.exports = router;
