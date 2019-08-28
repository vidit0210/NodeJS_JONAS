const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName == "/" || pathName == "/overview") {
    res.end("This is the Overview Page");
  } else if (pathName == "/product") {
    res.end("This is product");
  }
});
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening to port 3000");
});
