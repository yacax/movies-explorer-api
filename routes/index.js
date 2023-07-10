const router = require('express').Router();
const publicRoutes = require('./publicRoutes');
const userRouter = require('./users');
const moviesRouter = require('./movies');
const auth = require('../middlewares/auth');
const {
  validateBearerToken,
} = require('../utils/validators');

router.use('/', publicRoutes);
router.use('/users', validateBearerToken, auth, userRouter);
router.use('/movies', validateBearerToken, auth, moviesRouter);

module.exports = router;
