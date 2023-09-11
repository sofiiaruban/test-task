//2. Напишите функцию генератор chunkArray, которая возвращает итератор возвращающий части массива указанной длинны.
//
//Пример:
//const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);
//iterator.next() // { value: [1,2,3], done: false }
//iterator.next() // { value: [4,5,6], done: false }
//iterator.next() // { value: [7,8], done: false }
//iterator.next() // { value: undefined, done: true }

function* chunkArray(
  arr: number[],
  length: number
): Generator<number[], void, unknown> {
  let startIndex = 0
  let endIndex = length
  let arrLength = arr.length //prevents recalculating array length each time loop iteration 

  while (startIndex < arrLength) {// loop through the arr indexes
    yield arr.slice(startIndex, endIndex) //every yield slice arr from the start to the end index (the end index in not included)
    startIndex = endIndex //update the start index
    endIndex = startIndex + length // update the end index
  }
}