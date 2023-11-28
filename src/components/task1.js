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

function copy(obj, paths) {
  const result = {}
  for (const path of paths) {
    let value = path.split(".").reduce((o, key) => o && key, obj)
    if (value !== undefined) {
      let target = result
      const keys = path.split(".")
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i]
        if (!target[key]) {
          target[key] = {}
        }
        target = target[key]
      }
      target[keys.length - 1] = value
    }
  }
  return result
}

const a = { b: { c: 3, d: [3, 4] }, a: 12 }
const b = copy(a, ["a.a", "b.c", "b.d.0", "b.c.e"])
console.log(b)
console.log(a)
