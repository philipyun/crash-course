// condition is a value in which we compare its state to some relative source of truth

let numbers = [12, 3, 2, 1, 99, 23, 7];

let number = Math.round(Math.random() * 20);

// introduce a condition where the number is greater than 10

if (number === 7 || number === 11) {
  // only 2 numbers be 7 or 11
  // its our lucky if we get 7 OR 11
  console.log("its our lucky day", number);
} else if (number > 10) {
  // 10 numbers can be greater than 10
  console.log("big boi number", number);
} else {
  // 10 numbers can be less than or equal to 10
  console.log("small boi number", number);
}

// recap conditions relate value to a true or false statement to introduce logical flow
// definition: boolean - either true or false

// logical operators

// operator: AND &&

// T && T = T
// T && F = F
// F && T = F
// F && F = F

// operator: OR ||

// T || T = T
// T || F = T
// F || T = T
// F || F = F

// order of conditionals matter, a lot
// we always want to put the strictest or the tighest constraint, first


// next up: loops, and when to use && vs ||