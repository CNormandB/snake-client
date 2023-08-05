const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.0.70', // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("data", (data) => {
    console.log(data)
  });

  conn.on("connect", (data) => {
    conn.write('Name: Cas');
  })
  
  return conn;
};

module.exports = { connect }