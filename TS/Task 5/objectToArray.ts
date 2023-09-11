//5. Написать обратный метод (см. задачу 4) objectToArray, который из объекта создаст массив. Пример:
//objectToArray({
//	name: 'developer',
//	age: 5,
//	skills: {
//		html: 4,
//		css: 5,
//		js: 5
//	}
//})
type Value = string | number | boolean | Record<string, any>
type ArrayItem = [string, Value]

const objectToArray = (obj: Record<string, Value>): Array<ArrayItem> => {
  let arr: Array<ArrayItem> = []

  for (const key in obj) {// loop though obj
    const value = obj[key]
    
    if (typeof value === 'object') {// check if value object
      arr.push([key, objectToArray(value)]) // push key and call recursive function 
    } else {
      arr.push([key, value])// add key and value to arr
    }
  }
  return arr;

}