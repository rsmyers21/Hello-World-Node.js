const http = require("node:http");

const server = http.createServer((req, res) => {
    res.writeHead("200");
    res.end("Test");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});