const fs = require("fs");
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is what we know about Avocado: ${textIn}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("Write Operation Successful");

// Working in Asynchronous Mode...
