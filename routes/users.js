const router = require('express').Router();
const {
  validateUpdateUser,
} = require('../utils/validators');

const {
  updateUser,
  getUser,
} = require('../controllers/user');

router.get('/me', getUser);
router.patch('/me', validateUpdateUser, updateUser);

module.exports = router;
