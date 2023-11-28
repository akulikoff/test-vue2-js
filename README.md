# slots

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### in file task1.js:
/**
Написать функцию, которая будет принимать объект и копировать из него только те свойства, которые прописаны в условиях. Изменение этих ключей в новом объекте не должны менять значения в старом. Пример вызова функции copy(obj, ['key1.key2.key3', 'key2.key1']).
Второй аргумент функции - это массив путей, по которым нужно выполнять копирование. Этот аргумент может отсутствовать в объекте, например:

a = {
b: null
}

a.b.c

Пример
const a = { b: { c: 3, d: [3, 4] }, a: 12 }
const b = copy(a, ['a.a', 'b.c', 'b.d.0', 'b.c.e'])
b = { b: { c: 3, d: [3] } }
*/

### in file task2.js:
/**
Реализовать функцию, которая принимает любой тип данных, и преобразовывать тип boolean (при его наличии) в числовое значение.
В качестве параметров могут быть объекты любого уровня вложенности, массивы, строки, числа и т.д.
Т.е. пример
*/

