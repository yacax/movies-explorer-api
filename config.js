const {
  NODE_ENV,
  PORT = 3000,
  MONGODB_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb',
  JWT_SECRET,
} = process.env;

const JWT_CONST = NODE_ENV === 'production' ? JWT_SECRET : 'JWT_SECRET';

const ERROR_MESSAGES = {
  NOT_FOUND: 'Запрашиваемый ресурс не найден.',
  BAD_REQUEST: 'Неверный запрос.',
  NOT_FOUND_ERROR: 'Ресурс не найден.',
  AUTHENTICATION_ERROR: 'Ошибка аутентификации',
  USER_ALREADY_EXISTS: 'Пользователь уже существует',
  NO_RIGHTS_TO_THE_OPERATION: 'Ошибка доступа',
};

const allowedCors = [
  'http://localhost:3000',
  'https://localhost:3000',
  'https://localhost:3001',
  'http://localhost:3001',
  'https://localhost:3002',
  'http://localhost:3002',
  'https://tarantino.nomoredomains.work',
  'https://api.tarantino.nomoredomains.work',
  'http://tarantino.nomoredomains.work',
  'http://api.tarantino.nomoredomains.work',
  'www.tarantino.nomoredomains.work',
  'www.api.tarantino.nomoredomains.work',
  'https://www.tarantino.nomoredomains.work',
  'https://www.api.tarantino.nomoredomains.work',
  'http://www.tarantino.nomoredomains.work',
  'http://www.api.tarantino.nomoredomains.work',
];

module.exports = {
  PORT,
  MONGODB_URL,
  JWT_CONST,
  ERROR_MESSAGES,
  allowedCors,
};
