const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MOVE_LEFT_KEY, MSG_1_KEY, MSG_2_KEY, MSG_3_KEY } = require('./constants.js')
let connection;

const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
  };

const handleUserInput = function (key) {
    if (key === '\u0003') {
        process.exit();
    } else if (key === MOVE_UP_KEY) {
        connection.write("Move: up");
    } else if (key === MOVE_LEFT_KEY) {
        console.log("Move: left")
        connection.write("Move: left")
    } else if (key === MOVE_DOWN_KEY) {
        console.log("Move: down")
        connection.write("Move: down")
    } else if (key === MOVE_RIGHT_KEY) {
        console.log("Move: right")
        connection.write("Move: right")
    } else if (key === MSG_1_KEY) {
        connection.write("Say: Am snek");
    } else if (key === MSG_2_KEY) { 
        connection.write("Say: sneaky snek");
    } else if (key === MSG_3_KEY) { 
        connection.write("Say: SssSSSssSss");
    }
};

module.exports = { setupInput }