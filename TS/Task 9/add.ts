//9.  Напишите функцию `add`, которая бы работала следующим образом `add(1)(2)(7)...(n)`. Количество последовательных визовов неограничено.

//Пример:


//Number(add(1)(2)); // == 3
//Number(add(1)(2)(5)); // == 8
//Number(add(1)(2)(-3)(4)); //  == 4
//Number(add(1)(2)(3)(4)(-5)); // == 5

const add = (num: number) => {
  let sum = num

  const internalAdd = (nexNum: number) => { // create the inner function repeatedly adding num to the sum 
    sum += nexNum // add the new num to the sum
    return internalAdd // return the inner function to alow chaining calls for getting the sum
  }

  internalAdd.valueOf = function () { //call the valueOf to get the sum 
    return sum 
  }
  
  return  internalAdd 
}