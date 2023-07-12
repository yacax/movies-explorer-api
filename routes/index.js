const router = require('express').Router();
const publicRoutes = require('./publicRoutes');
const userRouter = require('./users');
const moviesRouter = require('./movies');
const allOtherRouter = require('./allOthersRoutes');
const auth = require('../middlewares/auth');
const {
  validateBearerToken,
} = require('../utils/validators');

router.use('/', publicRoutes);
router.use(validateBearerToken, auth);
router.use('/users', userRouter);
router.use('/movies', moviesRouter);
router.use('*', allOtherRouter);

module.exports = router;
