// for loop
// loops over a fixed iterator or a fixed range of numbers

// fixed 0 --> 10

// three parts to a for loop | fixed number range
// first: initial state, what number are we starting on?
// second: condition on when to stop
// third: how to move the loop forward

// start at 0, end at 19, incremenet by 1 after every loop
for (let x = 0; x < 20; x++) {
  // console.log(x);
}

// FIZZ BUZZ
// if a number is divisible by 2, print fizz
// if a number is divisible by 3, print buzz
// if a number is divisible by 2 AND 3, print fizzbuzz
// if its not divisible by either, dont print anything at all

// divisible operator, AKA modulus, %
// 6 % 2 = 0
// 6 % 3 = 0
// 6 % 4 = 2

// a number is divisible by 2, IF X mod 2 === 0;

function fizzbuzz(start, end) {
  for (let x = start; x < end; x++) {
    const divBy2 = x % 2 === 0;
    const divBy3 = x % 3 === 0;

    if (divBy2 && divBy3) {
      console.log(x, "fizzbuzz");
    } else if (divBy2) {
      console.log(x, "fizz");
    } else if (divBy3) {
      console.log(x, "buzz");
    }
  }
}

// fizzbuzz(0, 20);

// fixed iterator loops

let first20 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

function fizzbuzzArrayLen() {
  for (let x = 0; x < first20.length; x++) {
    const number = first20[x];
    const divBy2 = number % 2 === 0;
    const divBy3 = number % 3 === 0;

    if (divBy2 && divBy3) {
      console.log(number, "fizzbuzz");
    } else if (divBy2) {
      console.log(number, "fizz");
    } else if (divBy3) {
      console.log(number, "buzz");
    }
  }
}

function fizzbuzzIterator() {
  for (let currentNumber of first20) {
    const divBy2 = currentNumber % 2 === 0;
    const divBy3 = currentNumber % 3 === 0;

    if (divBy2 && divBy3) {
      console.log(currentNumber, "fizzbuzz");
    } else if (divBy2) {
      console.log(currentNumber, "fizz");
    } else if (divBy3) {
      console.log(currentNumber, "buzz");
    }
  }
}

function fizzbuzzForEach() {
  first20.forEach(currentNumber => {
    const divBy2 = currentNumber % 2 === 0;
    const divBy3 = currentNumber % 3 === 0;

    if (divBy2 && divBy3) {
      console.log(currentNumber, "fizzbuzz");
    } else if (divBy2) {
      console.log(currentNumber, "fizz");
    } else if (divBy3) {
      console.log(currentNumber, "buzz");
    }
  });
}

// fizzbuzz(0, 20);
// fizzbuzzIterator();
fizzbuzzForEach();

// when do i use each type of for loop

// first one, 3 states, aka the traditional for loop
// this is good for when you want to do a task a FIXED amounts of times 
// OR when you have no input data or iterator to work with
// ex, i want to roll a dice 6 times

// second one. iterating over the indexes of an array
// in JS you basically never want to do this

// third, iterating over the values in an array, for x in array;
// we use this, when we iterator over a real iterator, aka 
// an array like object, but not actually an array

// fourth, forEach loop, we basically use this 99% of the time

// javascript is a functional language
// which means, instead of writing traditional sequence code, we write asynchronous style code
// instead of looping over a body of code, you pass a body of code to a loop

// while / do while loops

function valorantOvertime() {
  let teamARoundWins = getRoundWinCount(1);
  let teamBRoundWins = getRoundWinCount(2);

  while (!drawVote && Math.abs(teamARoundWins - teamBRoundWins) !== 2 ) {
    keepPlaying();
  }
}

function keepPlaying() {
  let winningTeam = getWinningTeam();
  addWin(winningTeam);

}

// above gives a false assumption that you can draw after 12-12, which is false

// so this introduces do {} while(...) loop
// corrected code

function valorantOvertime() {
  let teamARoundWins = getRoundWinCount(1);
  let teamBRoundWins = getRoundWinCount(2);

  do {
    keepPlaying()
  } while (!drawVote && Math.abs(teamARoundWins - teamBRoundWins) !== 2 );
}

function keepPlaying() {
  let winningTeam = getWinningTeam();
  addWin(winningTeam);
}

