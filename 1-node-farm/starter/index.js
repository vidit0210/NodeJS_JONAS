const fs = require("fs");
const http = require("http");

/*

Synchronous  Way Blocking Method
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is what we know about Avocado: ${textIn}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("Write Operation Successful");

*/

// Working in Asynchronous Mode...
// const textOut = fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// console.log("Reading File");

//Creating Server
const server = http.createServer((req, res) => {
  res.end("Hello from the server");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port on 8000");
});
