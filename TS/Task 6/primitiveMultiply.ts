//6. Есть функция `primitiveMultiply`, которая умножает числа, но случайным образом может выбрасывать исключения типа: `NotificationException`, `ErrorException`. Задача написать функцию обертку которая будет повторять вычисление при исключении `NotificationException`, но прекращать работу при исключениях `ErrorException`
//Пример:

function NotificationException() {}
function ErrorException() {}

function primitiveMultiply(a:number, b:number): number {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if(rand > 0.85) {
    throw new ErrorException()
  } else {
    throw new NotificationException()
  }
}

function reliableMultiply(a:number, b:number): number {
    try {
      return primitiveMultiply(a, b) // run primitiveMultiply
    } catch (error) { 

      if (error instanceof NotificationException) { // check if error is NotificationException
        return primitiveMultiply(a, b)
      } else {
        throw error
      }
    }
}

console.log(reliableMultiply(8, 8));