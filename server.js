const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  // const batMan = {
  //   firstName: "Bruce",
  //   lastName: "Wayne",
  // };
  // res.writeHead(200, { "Content-Type": "application/json" });
  // res.end(
  //   JSON.stringify({
  //     data: batMan,
  //   }),
  // );
  res.writeHead(200, { "Content-Type": "text/html" });
  // res.end(`<h1>Batman's real name is ${batMan.firstName} ${batMan.lastName}!!</h1>`);
  const batManFilePath = __dirname + "/batman.html";
  // const batManFile = fs.readFileSync(batManFilePath, "utf-8");
  // res.end(batManFile);


  /**
   * ====================== Important Note ===================== 
   * readFileSync will read the entire file at once. Will store the content to a temporary
   * buffer which may lead to unnecessary use of memory. Instead we can rely on streams.
   */
  fs.createReadStream(batManFilePath).pipe(res);
});

server.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
