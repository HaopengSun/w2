const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ']
const output = [...spinner, ...spinner, '\n'];
let intervel = 1;
for (const element of output){
  setTimeout(() => {
    process.stdout.write(element);
  }, 100 + intervel * 200);
  intervel++;
}
