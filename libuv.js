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
const syncStart = Date.now();
crypto.pbkdf2Sync("password", "somesalt", 100000, 64, "sha512"); // Hash : 173ms
crypto.pbkdf2Sync("password", "somesalt", 100000, 64, "sha512"); // Hash : 333ms difference is also double - 160ms
crypto.pbkdf2Sync("password", "somesalt", 100000, 64, "sha512"); // Hash : 488ms difference is also double - 155ms
console.log("Hash sync :", Date.now() - syncStart);

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





/**
 * ==================================== Network I/O Experiment =====================================
 *
 */

const https = require("node:https");

const networkAsyncStart = Date.now();
const MAX_NW_CALLS = 10; // Exceeds thread pool size but here scenerio is different.

for (let i = 0; i < MAX_NW_CALLS; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(
          `NW I/O Request: ${i + 1} took ${Date.now() - networkAsyncStart}`,
        );
      });
    })
    .end();
}
/**
 * -) Although both crypto.pbkdf2 and https.request are asynchronous, https.request method 
 *    does not seem to use the thread pool.
 * 
 * -) https.request does not seem to be affected by the number of CPU cores either.
 * 
 * -) https.request is a network I/O operation and not a CPU bound operation. It does not use the thread pool.
 * 
 * -) Libuv instead delegates the work to the operating system kernel and whenever possible, it will polll the kernel and
 *    see if the request has completed.
 * 
 */





/**
 * ============================================ SUMMARY ==============================================
 * 
 * -) In Node.js, async methods are handled by libuv.
 * 
 * -) They are handled in two different ways: 1) Native async mechanism 2) Thread Pool.
 * 
 * -) Whenever possible, Libuv will use native async mechanisms in the OS so as to avoid blocking the main thread.
 * 
 * -) Since this is part of the kernel, there is different mechanism for each OS. We have epoll for Linux, Kqueue for MacOS and
 *    IO Completion Port on Windows.
 * 
 * -) Relying on native async mechanisms makes Node scalable as the only limitation is the operating system kernel.
 *    EG:- A network I/O operation.
 * 
 * -) If there is no native async support and the task is file I/O or CPU intensive, libuv uses the thread pool to avoid blocking
 *    the main thread.
 * 
 * -) Although the thread pool preserves asynchronicity with respect to Node's main thread, it can still become a bottleneck if all
 *    threads are busy.
 */