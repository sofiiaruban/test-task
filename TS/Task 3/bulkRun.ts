//3. Напишите функцию обертку, которая на вход принимает массив функций и их параметров, а возвращает массив результатов их выполнения. Количество аргументов исполняемой функции **не ограничено**!
//Пример:
//const f1 = (cb) => {cb(1)}
//const f2 = (a, cb) => {cb(a)}
//const f3 = (a, b, cb) => {setTimeout(() => cb([a, b]), 1000)}
//
//bulkRun(
//  [
//    [f1, []],
//    [f2, [2]], ! add missing comma
//    [f3, [3, 4]]
//  ]
//).then(console.log)
// // Output: [1, 2, [3, 4]]
type FunctionType<T> = (...args: any[]) => T

const bulkRun = <T>(funcsArray: Array<[FunctionType<T>, any[]]>): Promise<T[]> => {

  return Promise.all( // wait for all promises results
    funcsArray.map(([func, args]) => { //loop though funcs 
      
      return new Promise<T>((resolve, reject) => {// call for each funcs promise 

        if (typeof func === 'function') { // check if func is function
          func(...args, (result: T) => { // call each function
            resolve(result)
          })
        } else {
          reject(new Error('Error')) //show error if func is not function
        }
      })
    })
  )
}