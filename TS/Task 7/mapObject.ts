//7.  Напишите функцию, которая берет объект любой вложенности и преобразует ее в единую плоскую карту с разными уровнями, разделенными косой чертой ( `'/'`).

//Пример:

const obj = {
  a: {
    b: {
      c: 12,
      d: 'Hello World'
    },
    e: [1,2,3]
  }
};
//mapObject(demoData);
//// Outputs: {
//  'a/b/c': 12,
//  'a/b/d': 'Hello World',
//  'a/e': [1,2,3]
//}
type objValue = string | number | boolean | Record<string, any>

const mapObject = (obj: Record<string, objValue>, parentKey: string = '') => {
  let resultedObj = {}

  for (let key in obj) { // loop through obj
    let value = obj[key]
    let newKey = parentKey ? `${parentKey}/${key}` : key // create newkey

    if (Array.isArray(value)) { //  check if value is array
      resultedObj[newKey] = value
    } else if (typeof value === 'object') { // check if value is object
      Object.assign(resultedObj, mapObject(value, newKey)) // call recursive func for nesting objs and merge to resultedObj
    } else {
      resultedObj[newKey] = value
    }
  }
  
  return resultedObj
}
