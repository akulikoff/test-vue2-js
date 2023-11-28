/**
Реализовать функцию, которая принимает любой тип данных, и преобразовывать тип boolean (при его наличии) в числовое значение.
В качестве параметров могут быть объекты любого уровня вложенности, массивы, строки, числа и т.д.
Т.е. пример
*/

function convertBooleanToNumber(obj) {
  // Проверяем, является ли переданный аргумент объектом
  if (typeof obj === "object" && obj !== null) {
    // Если объект - это массив, проходимся по каждому элементу
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        obj[i] = convertBooleanToNumber(obj[i]) // Рекурсивно вызываем функцию для каждого элемента массива
      }
      return obj
    } else {
      // Если объект - это простой объект, проходимся по всем его свойствам
      for (let key in obj) {
        obj[key] = convertBooleanToNumber(obj[key]) // Рекурсивно вызываем функцию для каждого свойства объекта
      }
      return obj
    }
  } else if (typeof obj === "boolean") {
    return obj ? 1 : 0 // Преобразуем булево значение в числовое (true -> 1, false -> 0)
  } else {
    return obj // Если переданный аргумент не объект и не булево значение, возвращаем его без изменений
  }
}

// Пример использования
// const data = {
//   a: true,
//   b: {
//     c: false,
//     d: {
//       e: true,
//     },
//   },
//   f: [true, false, true],
// }

console.log(
  convertBooleanToNumber({
    date1: {
      date1_1: 1,
      date1_2: [
        {
          date2_1: false,
          date2_2: "str1",
        },
        {
          date2_3: true,
          date2_4: "str2",
        },
        {
          date2_5: false,
          date2_6: "str1",
        },
      ],
      date1_3: false,
      date1_4: {
        date3_1: true,
        date3_2: false,
        date3_3: "str1",
        date3_4: 123,
      },
      date1_5: "true",
    },
  })
)
