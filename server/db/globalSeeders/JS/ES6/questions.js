/* eslint-disable no-restricted-syntax,guard-for-in */
// noinspection JSNonASCIINames,NonAsciiCharacters

const jsES6Questions = [
  'Выберете варианты, характеризующие let и const:',
  'Укажите правильный синтаксис стрелочных функций:',
  'Выберете вариант с правильным синтаксисом шаблонной строки:',
  'Чему равен rest следующего выражения? <code><br>const [,,...rest] = [1,2,3,4,5,6]</code>',
  'Выберете верные варианты ответов характеризующие промисы',
  'Будет ли работать такой код? <code><br>var s = \'string\'; <br> var obj = { s } </code>',
  'Что будет выведено в консоль? <code><br>{   let i = 1; } <br> {   let i = 2; } <br> console.log(i);</code>',
  'Что будет выведено в консоль? <code><br>{   console.log(i + j);<br>   var i = 1;<br>   let j = 2; }</code>',
  'Что будет выведено в консоль?<code><br>const f = (i, j, ...k) => {   console.log(k); } <br>console.log(f(1,2,3,4));</code>',
  'Что будет выведено в консоль?<code><br>const f = () => {   return { x: 1, y: 2, a: 3, b: 4 }; }; <br>const { x: a, y: b } = f(); console.log(x, y);</code>',
];
module.exports = jsES6Questions;
