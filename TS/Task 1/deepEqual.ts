//1. Напишите функцию deepEqual для проверки двух обьектов на идентичность.
// Пример:
  //deepEqual({name: 'test'}, {name: 'test'}) // output true
  //deepEqual({name: 'test'}, {name: 'test1'}) // output false
  //deepEqual({name: 'test', data: {value: 1}}, {name: 'test', data: {value: 2}}) // output false
  //deepEqual({name: 'test'}, {name: 'test', age: 10}) // false

                                   // Varian 1
//if we know that there are no nested objects 
// const deepEqual = (obj1: Object, obj2: Object) => {
  // return JSON.stringify(obj1) === JSON.stringify(obj2) ? true : false;
// }
                                  // Variant 2
// nested objects with recursive 

const deepEqual = (obj1: Object, obj2: Object): boolean => {
  const obj1Entries = Object.entries(obj1) // convert the objs to the arrays of [key, value]
  const obj2Entries = Object.entries(obj2)
  const obj1EntriesLength = obj1Entries.length // prevent recalculating array length each time loop iteration
  const obj2EntriesLength = obj2Entries.length

  if (obj1EntriesLength !== obj2EntriesLength) {
    //check if the length is not equal
    return false
  }

  for (let i = 0; i < obj1EntriesLength; i++) {
    // loop through the obj1Entries
    const [key1, value1] = obj1Entries[i] // use destructuring assignment to get key value pairs
    const [key2, value2] = obj2Entries[i]

    if (key1 !== key2) {
      //check if key not equal
      return false
    }
    if (typeof value1 === 'object' && typeof value2 === 'object') {
      // check if the values are objects
      if (!deepEqual(value1, value2)) {
        // call the recursive function to know if both objects are equal or not
        return false
      }
    } else {
      //check if values are not equal
      if (value1 !== value2) {
        return false
      }
    }
  }

  return true
}

