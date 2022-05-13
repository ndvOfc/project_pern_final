/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-useless-escape */
/* eslint-disable no-restricted-syntax,guard-for-in,quote-props */
// noinspection JSNonASCIINames,NonAsciiCharacters

const NODEbasicAnswers = {
  'среда выполнения кода на JavaScript, которая позволяет транслировать вызовы на языке JavaScript в машинный код': [true, 1],
  'отдельный язык программирования': [false, 1],
  'фреймворк для JavaScript': [false, 1],

  'Всё перечисленное ': [true, 2],
  'Десктопные программы и веб-сайты': [false, 2],
  'Игры': [false, 2],
  'Веб-сайты': [false, 2],
  'Десктопные программы': [false, 2],

  'fs.off()': [false, 3],
  'fs.delete() ': [true, 3],
  'fs.empty()': [false, 3],
  'fs.unlink()': [false, 3],
  'fs.link()': [false, 3],

  'Это набор встроенных и создаваемых методов и значений ': [true, 4],
  'Это набор встроенных методов и значений': [false, 4],
  'Это различные блоки сайта': [false, 4],
  'Это отдельные HTML-страницы': [false, 4],

  'exports = {some: 23};': [false, 5],
  'exports.module = {some: 23};': [false, 5],
  'module.exports = {some: 23}; ': [true, 5],
  'module = {some: 23};': [false, 5],

  'C++': [false, 6],
  'JS8': [false, 6],
  'W8': [false, 6],
  'V8 ': [true, 6],
  'javascript': [false, 6],

  'start()': [false, 7],
  'event()': [false, 7],
  'invoke()': [false, 7],
  'util()': [false, 7],
  'emit() ': [true, 7],

  'server': [false, 8],
  'filesys': [false, 8],
  'images': [false, 8],
  'streaming': [false, 8],
  'events ': [true, 8],

  'window': [false, 9],
  'global ': [true, 9],
  'object': [false, 9],

  'многопоточный': [false, 10],
  'однопоточный ': [true, 10],

  'NODE_ENV=production PORT=3000 $ [runtime] [program_name] ': [true, 11],
  'MODULE_ENV = production PORT=3000 $ [runtime] [program_name]': [false, 11],
  'VARIABLES_ENV = production PORT=3000 $ [runtime] [program_name]': [false, 11],

  'node -v': [true, 12],
  'npm node -v': [false, 12],
  'version': [false, 12],
};

module.exports = NODEbasicAnswers;
