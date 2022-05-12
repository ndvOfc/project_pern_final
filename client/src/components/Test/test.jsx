/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* es6+	Выберете варианты, характеризующие let и const:	let и const переменные не могут быть изменены	1	false
es6+	Выберете варианты, характеризующие let и const:	свойство let и const объектов могут быть изменены	1	true
es6+	Выберете варианты, характеризующие let и const:	let и const имеют блочную видимость	1	true
es6+	Выберете варианты, характеризующие let и const:	let сохраняет последнее значение последний итерации цикла	1	false */

const f = () => {
  return { x: 1, y: 2, a: 3, b: 4 };
};
const { x: a, y: b } = f();
console.log(x, y);
