const timer = process.argv.slice(2)
.filter(a => !isNaN(a)).filter(a => a > 0).sort((a, b) => a-b);

for (const interval of timer) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, interval * 1000);
}
