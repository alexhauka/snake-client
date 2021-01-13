const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541,
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: AMH');
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};




// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)

module.exports = connect;