const readline = require("readline");
// readline.createInterface() is used for
// creating an instance of readline by configuring the readable and the writable streams. 
const rl = readline.createInterface({
  // The input key takes a readable stream like process.stdin 
  // or fs.createReadStream('file.txt')
  // and the output key takes a writable stream like process.stdout or process.stderr.
  input: process.stdin,
  output: process.stdout
});

// The rl.question() method displays the query by writing it to the output,
// waits for user input to be provided on input,
// then invokes the callback function passing the provided input as the first argument.
rl.question("What is your name ? ", function(name) {
    rl.question("Where do you live ? ", function(country) {
        console.log(`${name}, is a citizen of ${country}`);
        // Do remember to use rl.close() to close the transmitting
        // otherwise the process will be left in the idle state.
        rl.close();
    });
});

// The last part of the code uses rl.on() method to add an event listener
// to the close event which simply console.log to the output stream and exits the process.
rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});