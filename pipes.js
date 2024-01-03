/**
 * ================================ Pipes ===============================
 *
 * -) It takes a readable stream and connect it to a writable stream.
 *
 * -) It returns the destination stream which enables chaining.
 *    However, the condition is that the destination stream has to be
 *    readable, duplex or a transform stream.
 */

const fs = require("node:fs");
const zlib = require("node:zlib")
// "zlib" module provides the compression functionality implemented using gzip algo.
// It has a built-in transform stream, so we can chain it with the pipe.
const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./file.txt");
const writableStream = fs.createWriteStream("./file3.txt");

readableStream.pipe(writableStream);

// Moving from a readable stream to a transform stream to a writable stream. (Chaining in pipe)
readableStream.pipe(gzip).pipe(fs.WriteStream("./file3.txt.gz"))


