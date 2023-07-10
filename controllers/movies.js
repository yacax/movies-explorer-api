const Movie = require('../models/movie');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const NoRightsToTheOperation = require('../errors/NoRightsToTheOperation');

module.exports.getMovies = (req, res, next) => {
  const userId = req.user._id;
  Movie.find({ owner: userId })
    .then((movies) => res.send({ data: movies }))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const owner = req.user._id;
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    createdAt,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner,
    movieId,
    nameRU,
    nameEN,
    createdAt,
  })
    .then((movie) => res.status(201).send({ data: movie }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequestError());
      }
      return next(err);
    });
};

module.exports.deleteMovie = (req, res, next) => {
  const { _id: movieMongoId } = req.params;
  const { _id: userId } = req.user;
  Movie.findById(movieMongoId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError();
      }
      if (movie.owner.toString() !== userId) {
        throw new NoRightsToTheOperation();
      }
      return Movie.deleteOne();
    })
    .then((movie) => {
      res.send({ data: movie });
    })
    .catch(next);
};
