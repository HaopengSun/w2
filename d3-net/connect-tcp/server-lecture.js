const net = require('net');
let number = 0;
const users = [];

const server = net.createServer();

server.on('connection', (client) => {
  client.setEncoding('utf8');
  number++;
  console.log('New client connected!', number);
  client.write('Hello there!');
  
  users.push(client);

  client.on('data', (data) => {
    console.log(data);
    for (let user of users){
      user.write(data);
    }
  })

  client.on('end', () => {
    user.splice(users.indexOf(client), 1)
  })

});

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});