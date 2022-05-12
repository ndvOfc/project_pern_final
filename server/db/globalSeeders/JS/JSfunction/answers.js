/* eslint-disable no-restricted-syntax,guard-for-in,quote-props */
// noinspection JSNonASCIINames,NonAsciiCharacters

const jsFunctionAnswersObject = {
  'Да': [true, 1],
  'Нет': [false, 1],
  'Функции, созданные как Function Declaration, нельзя передать в переменную': [false, 2],
  'Функции, созданные как Function Declaration, создаются интерпретатором до выполнения кода': [true, 2],
  'Разницы нет': [false, 2],
  '7': [false, 3],
  'NaN': [true, 3],
  'TypeError': [false, 3],
  'SyntaxError': [false, 3],
  '1, foo, undefined ': [true, 4],
  '1, foo, 3 ': [false, 4],
  '1, 2, 3': [false, 4],
  '1, foo, 2 ': [false, 4],
  'Facebook': [true, 5],
  'VK': [false, 5],
  'TypeError ': [false, 5],
  'SyntaxError ': [false, 5],

};

module.exports = jsFunctionAnswersObject;
