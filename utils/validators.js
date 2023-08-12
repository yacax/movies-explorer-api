const { celebrate, Joi } = require('celebrate');
const { ObjectId } = require('mongoose').Types;
const { regexPatterns } = require('./regexPatterns');

module.exports.validateBearerToken = celebrate({
  headers: Joi.object({
    authorization: Joi
      .string()
      .pattern(regexPatterns.token),
  }).unknown(),
});

module.exports.validateCreateUser = celebrate({
  body: Joi.object().keys({
    name: Joi
      .string()
      .min(2)
      .max(30)
      .allow('')
      .optional(),
    email: Joi
      .string()
      .required()
      .email(),
    password: Joi
      .string()
      .required()
      .min(8),
  }),
});

module.exports.validateLoginUser = celebrate({
  body: Joi
    .object()
    .keys({
      email: Joi
        .string()
        .required()
        .email(),
      password: Joi
        .string()
        .required()
        .min(8),
    }),
});

module.exports.validateUpdateUser = celebrate({
  body: Joi
    .object()
    .keys({
      name: Joi
        .string()
        .min(2)
        .max(30)
        .required(),
      email: Joi
        .string()
        .required()
        .email(),
    }),
});

module.exports.validateCreateMovie = celebrate({
  body: Joi
    .object()
    .keys({
      country: Joi
        .string()
        .required(),
      director: Joi
        .string()
        .required(),
      duration: Joi
        .number()
        .required(),
      year: Joi
        .number()
        .required(),
      description: Joi
        .string()
        .required(),
      image: Joi
        .string()
        .required()
        .pattern(regexPatterns.link),
      trailerLink: Joi
        .string()
        .required()
        .pattern(regexPatterns.link),
      thumbnail: Joi
        .string()
        .required()
        .pattern(regexPatterns.link),
      movieId: Joi
        .number()
        .required(),
      nameRU: Joi
        .string()
        .required(),
      nameEN: Joi
        .string()
        .required(),
    }),
});

module.exports.validateDeleteMovie = celebrate({
  params: Joi
    .object()
    .keys({
      _id: Joi
        .string()
        .required()
        .custom((value, helpers) => {
          if (!ObjectId.isValid(value)) {
            return helpers.error('Invalid movie id');
          }
          return value;
        }, 'custom validation'),
    }),
});
