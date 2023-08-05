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
    } else if (key === 'w') {
        console.log("Move: up")
        connection.write("Move: up");
    } else if (key === 'a') {
        console.log("Move: left")
        connection.write("Move: left")
    } else if (key === 's') {
        console.log("Move: down")
        connection.write("Move: down")
    } else if (key === 'd') {
        console.log("Move: right")
        connection.write("Move: right")
    } else if (key === 'x') {
        connection.write("Say: Am snek");
    } else if (key === 'y') { 
        connection.write("Say: sneaky snek");
    } else if (key === 'z') { 
        connection.write("Say: SssSSSssSss");
    }
};

module.exports = { setupInput }