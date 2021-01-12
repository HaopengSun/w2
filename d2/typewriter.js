const sentence = "hello there from lighthouse labs\n";
let interval = 1;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, interval * 50);
  interval++;
}