const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'b'){
    process.stdout.write('\x07');
  }
  if (!isNaN(key)){
    beep(key);
  }
  // process.stdout.write(key);
});

console.log('type for beep:');

const beep = (interval) => {
  console.log('setting timer for ' + interval + ' seconds...');
  setTimeout(() => {
    process.stdout.write('\x07');
  }, interval * 1000);
}