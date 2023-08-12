const rateLimit = require('express-rate-limit');
const NoRightsToTheOperation = require('../errors/NoRightsToTheOperation');

module.exports = rateLimit({
  windowMs: 15 * 60 * 2000,
  max: 1000,
  handler: function handlerError() {
    throw new NoRightsToTheOperation();
  },
});
