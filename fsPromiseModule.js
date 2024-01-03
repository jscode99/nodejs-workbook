const fs = require("node:fs/promises");

// ======================= Promise method ======================================
fs.readFile("./file.txt", "utf-8")
  .then((fileContent) => console.log("Fs Promise Read File ====>", fileContent))
  .catch((err) => console.log("Fs Promise Read File Error====>", err));

// ======================= Asyn-Await method ======================================
async function readMyFile() {
  try {
    const fileContent = await fs.readFile("./file.txt", "utf8");
    console.log("Fs Async Await Read File ====>", fileContent);
  } catch (error) {
    console.log("Fs Async Await Read File Error====>", error);
  }
}

readMyFile();

/**
 * If performance is a main concern while working with file system, go with fs without promise support.
 */
