const { rawListeners } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

rl.question(`what the sum of ${num1} and ${num2}? \n`, (userInput) => {
  if (userInput.trim() == answer){
    rl.close();
  } else {
    rl.setPrompt('You answer ${userInput} is incorrect and try again!\n');
    // prompt() starts a new line for use to input
    rl.prompt();
    // when user input sth, this line event will be called
    // it is acutally a loop to deal with user's wrong answer
    rl.on('line', (userInput) => {
      if (userInput.trim() == answer){
        rl.close();
      } else {
        rl.setPrompt(`You answer ${userInput} is incorrect and try again!\n`);
        rl.prompt();
      }
    })
  }
});

rl.on('close', () => {
  console.log('Your answer is correct!!');
})

// The 'line' event is emitted
// whenever the input stream receives an end-of-line input (\n, \r, or \r\n). 
// rl.on('line', (input) => {
//   console.log(`Received: ${input}`);
// });