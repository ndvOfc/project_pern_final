/* eslint-disable no-restricted-syntax,guard-for-in */
// noinspection JSNonASCIINames,NonAsciiCharacters

const jsFunctionQuestionsArray = [
  'Будет ли работать следующий код? <code><br>const foo = function sum(a, b) {<br>return a + b;<br>};<br>sum(1, 2);</code>',
  ' Какая разница между объялением функции (Function Declaration) и функциональным выражением (Function Expression)?',
  'Что будет выведено в консоль?<code><br>const numbers = [5,6,2,3,7];<br>const max = Math.max.call(null, numbers);<br>console.log(max);</code>',
  'Что будет выведено в консоль?<code><br>function* gen() {<br>yield 1;<br>yield 2;<br>yield 3;<br>}<br>const g = gen()<br>console.log(g.next().value);<br>console.log(g.return("foo").value);<br>console.log(g.next().value);</code>',
  'Что будет выведено в консоль?<code><br/>function App() {<br/>this.name = "Facebook";<br/>return "VK";<br/>}<br/>const entity = new App();<br/>console.log(entity.name);</code>',

];
module.exports = jsFunctionQuestionsArray;
