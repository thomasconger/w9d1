// Write a sum function that takes any number of args, using the arguments keyword

function sum1 () {
  arguments = Array.from(arguments)
  let sum = 0;
  arguments.forEach (el => {
    sum += el;
  })
  return sum;
}



console.log(sum1(1,2,34,5,5))

function sum2 (...args) {
  let sum = 0;
  args.forEach (el => {
    sum += el;
  })
  return sum
}

// console.log(sum2(1,2,34))
