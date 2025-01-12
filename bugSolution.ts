function printNumber(num: number): void {
  if (num < 0) {
    throw new Error('Error: Input must be a non-negative number. Please provide a valid input.');
  } else if (num === 0){
    console.log('The number is zero');
  }
  else {
    console.log(`The number is ${num}`);
  }
}

printNumber(-5); // Throws an error with improved message
printNumber(5); // Prints 5
printNumber(0); //Prints 'The number is zero'