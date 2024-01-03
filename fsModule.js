const fs = require("node:fs");

// ================ Synchronous file reading =============================
const fileContentSync = fs.readFileSync(__dirname + "/file.txt", {
  encoding: "utf8",
});
console.log("FS ReadFileSync Example ====>", fileContentSync);
/**
 * -) fs internally uses buffer.
 * -) readFileSync : Method is a synchronous way of reading a file.
 *                   JS engine will wait till the file content are read before moving
 *                   on to the next line (Blocks JS main thread and read data).
 *
 * -) Issues: If you have a lot of concurrent users and the file size is large they will
 *            be blocked for sometime as JS is single threaded and synchronous.
 *            -) Performance will be really poor.
 */

// ================ Async Synchronous file reading =============================
fs.readFile(__dirname + "/file.txt", "utf-8", (err, data) => {
  if (!err) {
    console.log("FS ReadFile Example ====>", data);
    return;
  }
  console.log("FS ReadFile Error Example ====>", err);
});

// ===================== Synchronous file writing ===============================
fs.writeFileSync(
  "./forBatman.txt",
  "Someone have tried to access the confidential information!!",
);

// ===================== Asynchronous file writing ===============================
fs.writeFile(
  "./forBatman.txt",
  " Someone have tried to access the confidential information!! 2",
  { flag: "a" }, // "a" is to append to the same file (Update file)
  (err) => {
    if (err) {
      console.log("Something went wrong!!");
    }
  },
);

// ===================== Readable and Writable Stream ===============================
const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  // highWaterMark: 2, If you want to see the chunks of data. Because the buffer streams use has a default size of 64 kilobytes.
});

const writableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunks) => {
  console.log("Readable stream chunks ====>", chunks);
  writableStream.write(chunks, (err) => {
    if (!err) {
      console.log("Streamed chunks successfully!!");
      return;
    }
    console.log("Something went wrong in streaming ===>", err);
  });
});
