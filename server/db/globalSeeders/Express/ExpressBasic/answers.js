/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-useless-escape */
/* eslint-disable no-restricted-syntax,guard-for-in,quote-props */
// noinspection JSNonASCIINames,NonAsciiCharacters

const ExpressbasicAnswers = {
  'res.locate()': [false, 1],
  'res.redirect()': [true, 1],
  'res.links()': [false, 1],

  'Изменяет заголовок HTTP Content-Type на тип MIME': [true, 2],
  'Добавляет в заголовки поле Type?': [false, 2],
  'Устанавливает значение в поле заголовка HTTP ответа. Чтобы установить сразу несколько полей, передайте объект в качестве параметра.': [false, 2],

  'app.use(function (err, req, res, next) { <br/>res.send(\'Hello\');<br/>});': [false, 3],
  'app.use(function (req, res, next) {<br/>res.send(\'Hello\');<br/>}': [false, 3],
  'app.get(\'/\', function (req, res) {<br/>res.send(\'Hello\');<br/>});': [true, 3],

  'Да': [true, 4],
  'Нет': [false, 4],

};

module.exports = ExpressbasicAnswers;
