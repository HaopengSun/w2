const net = require('net');
const name = 'HPS';
const stdin = process.stdin;

const client = net.createConnection({
    host: '135.23.222.131',
    port: 3001
});

client.setEncoding('utf8');
stdin.setEncoding('utf8');

client.on('data', (data) => {
  console.log('data has come!')
  console.log(data);
})

client.write('it is me ' + name);

stdin.on('data', (input) => {
  client.write(name + ': ' + input);
})