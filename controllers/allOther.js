const NotFoundError = require('../errors/NotFoundError');

module.exports.allOther = (req, res, next) => {
  next(new NotFoundError());
};
