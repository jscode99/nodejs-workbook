/**
 * =============================== WHAT? ==================================
 * -) libuv is a cross platform open source library written in C language.
 *
 * =============================== WHY? ===================================
 * -) Handles "asynchronous" non-blocking operations in Node.js.
 *
 * =============================== HOW? ===================================
 * -) Using very important features like "Thread Pool" and "Event Loop".
 */

/**
 * ================================ Thread Pool =================================
 *
 * console.log("First line");
 *
 * fs.readFile("./file.txt","utf-8",(err, data) => {
 * console.log("File contents");
 * })
 *
 * console.log("Last line")
 *
 * result :- First line
 *           Last line
 *           File contents
 *
 * -) Main Thread
 *          : "Hey libuv, I need to read file contents but that is a time consuming task.
 *            I don't want to block further code from being executed during this time.
 *            Can I offload this task to you"?
 *
 * -) libuv
 *         : "Sure, main thread. Unlike you, who is single threaded, I have a pool of threads
 *            that I can use to run some of these time consuming tasks. When the task is done,
 *            the file contents are retrieved and the associated callback function can be run."
 */


/**
 * ================================ Thread Pool Experiment =================================
 *
 */

const crypto = require("node:crypto");

// Synchronous method for Password-Based Key Derivation Function 2
const start = Date.now();
crypto.pbkdf2Sync("password", "somesalt", 100000, 64, "sha512"); // Hash : 173ms
crypto.pbkdf2Sync("password", "somesalt", 100000, 64, "sha512"); // Hash : 333ms difference is also double - 160ms
crypto.pbkdf2Sync("password", "somesalt", 100000, 64, "sha512"); // Hash : 488ms difference is also double - 155ms
console.log("Hash sync :", Date.now() - start);

/**
 * Experiment - 1:- Every method in node.js that has the "sync" suffix always runs on the main thread and is blocking.
 */




// Asynchronous method
const asyncStart = Date.now();
const MAX_CALL = 4;
// For one call hashing time : 255ms
// For two calls hashing time : 256ms
// Almost the same, two of them are running in different thread pools (parallel)

for (let i = 0; i < MAX_CALL; i++) {
  crypto.pbkdf2("password", "someNewSalt", 100000, 64, "sha512", (err, key) => {
    console.log(
      `Hash async : key - ${key.toString("hex")} Time : ${
        Date.now() - asyncStart
      }`,
    );
  });
}

/**
 * Experiment - 2:- A few async methods like fs.readFile and crypto.pbkdf2 run on a separate thread in libuv's thread pool.
 *                 They do run synchronously in their own thread but as far as the main thread is concerned, it appears as if
 *                 the method is running asynchronously.
 */




/**
 * ================================ Thread Pool Size =================================
 * -) Libuv's thread pool has 4 threads in total (default).
 * 
 * -) Increasing the thread pool size can potentially improve the performance of CPU-bound tasks that are offloaded to the 
 *    thread pool, allowing them to run concurrently. However, it's important to note that increasing the thread pool size 
 *    also increases the overall system resource usage.
 */


// Experiment to increase the number of threads in thread pool.
// process.env.UV_THREADPOOL_SIZE = 6; // Current system has only 4 CPU cores, so I'm not increasing the number of threads.