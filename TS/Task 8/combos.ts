//8. Напишите функцию `combos`, которая принимает положительное целое число `num` и возвращает массив массивов положительных целых чисел, где сумма каждого массива равна  `num`.  Массивы не должны повторяться.
//
//Пример:
//combos(3);
//// Output: 
//[
//  [ 3 ],
//  [ 1, 1, 1 ],
//  [ 1, 2 ] 
//]
//
//combos(10); 
//// Output: 
//[ 
//  [ 10 ],
//  [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
//  [ 1, 1, 1, 1, 1, 1, 1, 1, 2 ],
//  [ 1, 1, 1, 1, 1, 1, 1, 3 ],
//  [ 1, 1, 1, 1, 1, 1, 4 ],
//  [ 1, 1, 1, 1, 1, 5 ],
//  [ 1, 1, 1, 1, 6 ],
//  [ 1, 1, 1, 7 ],
//  [ 1, 1, 8 ],
//  [ 1, 9 ],
//  [ 1, 1, 1, 1, 1, 1, 2, 2 ],
//  [ 1, 1, 1, 1, 1, 2, 3 ],
//  [ 1, 1, 1, 1, 2, 4 ],
//  [ 1, 1, 1, 1, 2, 2, 2 ],
//  [ 1, 1, 1, 1, 3, 3 ],
//  [ 1, 1, 1, 2, 5 ],
//  [ 1, 1, 1, 2, 2, 3 ],
//  [ 1, 1, 1, 3, 4 ],
//  [ 1, 1, 2, 6 ],
//  [ 1, 1, 2, 2, 4 ],
//  [ 1, 1, 2, 2, 2, 2 ],
//  [ 1, 1, 2, 3, 3 ],
//  [ 1, 1, 3, 5 ],
//  [ 1, 1, 4, 4 ],
//  [ 1, 2, 7 ],
//  [ 1, 2, 2, 5 ],
//  [ 1, 2, 2, 2, 3 ],
//  [ 1, 2, 3, 4 ],
//  [ 1, 3, 6 ],
//  [ 1, 3, 3, 3 ],
//  [ 1, 4, 5 ],
//  [ 2, 8 ],
//  [ 2, 2, 6 ],
//  [ 2, 2, 2, 4 ],
//  [ 2, 2, 2, 2, 2 ],
//  [ 2, 2, 3, 3 ],
//  [ 2, 3, 5 ],
//  [ 2, 4, 4 ],
//  [ 3, 7 ],
//  [ 3, 3, 4 ],
//  [ 4, 6 ],
//  [ 5, 5 ]
//]
const combos = (num: number): number[][] => {
  const startNum = 1;
  let resultedArr = findCombinations([], num, startNum)

  return resultedArr;
}

const findCombinations = (
  currentCombo: number[],
  remainingSum: number,
  start: number
): number[][] => { 
  const results: number[][] = []

  if (remainingSum === 0) { // check if there is no remaining sum 
  results.push([...currentCombo]) // if not left remaining sum  push combination to the results

  return results
  }

  for (let i = start; i <= remainingSum; i++) {
    currentCombo.push(i) // add current num
    let subResults = findCombinations(currentCombo, remainingSum - i, i)//call recursive func
    results.push(...subResults)//add results
    currentCombo.pop()// delete current num for finding new combination 
  }

  return results;
}