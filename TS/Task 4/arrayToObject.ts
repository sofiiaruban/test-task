//4. Напишите метод arrayToObject, который превращает массив в объект (использовать рекурсию). Пример:
//
//```
//var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];
//
//arrayToObject(arr)
//// Outputs: {
//	name: 'developer',
//	age: 5,
//	skills: {
//		html: 4,
//		css: 5,
//		js: 5
//	}
type ArrayEl = [string, any]

const arrayToObject = (arr:  Array<ArrayEl>): Record<string, any> => {
  let resultedObj: Record<string, any> = {}

  for (let [key, value] of arr) { // loop though arr
    if (Array.isArray(value)) { // check if value is array
      resultedObj[key] = arrayToObject(value) // if type of value is array call function again
    } else {
      resultedObj[key] = value
    }
  }
  return resultedObj;
}

