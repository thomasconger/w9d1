// Write a sum function that takes any number of args, using the arguments keyword

function sum1 () {
  arguments = Array.from(arguments)
  let sum = 0;
  arguments.forEach (el => {
    sum += el;
  })
  return sum;
}



// console.log(sum1(1,2,34,5,5))

function sum2 (...args) {
  let sum = 0;
  args.forEach (el => {
    sum += el;
  })
  return sum
}

// console.log(sum2(1,2,34))


//Rewrite myBind to accept calltime and bind time args

// call or apply


Function.prototype.myBind = function (context, ...bindArgs) {
  let that = this;
  return function (...callArgs) {
    return that.apply(context, bindArgs.concat(callArgs));
  }
}

// EXAMPLES, which above code passes

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true
