/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-useless-escape */
/* eslint-disable no-restricted-syntax,guard-for-in,quote-props */
// noinspection JSNonASCIINames,NonAsciiCharacters

const jsES6Answers = {
  'let и const имеют блочную видимость': [1, true],
  'let и const переменные не могут быть изменены': [1, false],
  'свойство let и const объектов могут быть изменены': [1, true],
  'let сохраняет последнее значение последний итерации цикла': [1, false],
  'function func () => { //code}': [2, false],
  'const func = () => { //code}': [2, true],
  'const func () => { //code}': [2, false],
  'func () => { //code}': [2, false],
  '\`Value of str:${str}\`': [3, true],
  '\'Value of str:${str}\'': [3, false],
  '\"Value of str:${str}\"': [3, false],
  '[3]': [4, false],
  '[2,3,4,5,6]': [4, false],
  '[1,2,3,4,5,6]': [4, false],
  '[3,4,5,6]': [4, true],
  'Промисы имеют два состояния — fulfilled  и rejected': [5, false],
  'Promise.race возвращает только первый успешно завершенный промис': [5, true],
  'Promise.all возвращает весь результат до ошибки': [5, false],
  'Если выкинуть ошибку через throw внутри промиса, то это действие будет аналогично вызову rejected': [5, true],
  'Будет работать только в  ES6+': [6, true],
  'Нет, не будет работать': [6, false],
  'Будет работать только в ES5': [6, false],
  'Да, будет работать во всех версиях ES': [6, false],
  '1': [7, false],
  'ReferenceError: i is not defined': [7, true],
  '2': [7, false],
  'SyntaxError: Identifier "i" has already been declared': [7, false],
  '3': [8, false],
  'ReferenceError: Cannot access "j" before initialization': [8, true],
  '1 2': [8, false],
  'NaN': [8, false],
  'undefined': [9, false],
  '[3,4]': [9, true],
  'SyntaxError': [9, false],
  '3 ': [9, false],
  'ReferenceError': [10, true],
  '1 2 3 4': [10, false],
  '1 2 ': [10, false],
  '3 4': [10, false],
};

module.exports = jsES6Answers;
