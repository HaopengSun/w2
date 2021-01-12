const net = require('net');

const conn = net.createConnection({ 
  host: '2.tcp.ngrok.io', // change to IP address of computer or ngrok host if tunneling
  port: 14521 // or change to the ngrok port if tunneling
});

conn.on('connect', () => {
  conn.write('Hello from client!');
});

client.setEncoding('utf8');
conn.on('data', (data) => {
  console.log('Server says: ', data);
});

conn.setEncoding('utf8'); // interpret data as text