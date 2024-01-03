/**
 * ========================================== Streams ================================================
 * -) A sequence of data that is being moved from one point to another over time.
 * 
 * -) Process streams of data in chunks as they arrive instead of waiting for the entire data to be
 *    available before processing.
 * 
 * -) Prevents unnecessary data downloads and memory usage.
 * 
 * Eg:- Watching a video on Youtube
 *      -) The data arrives in chunks and we watch in chunks while the rest of the data arrives over time.
 */

/**
 * ========================================== Buffers ================================================
 * -) Node.js cannot control the pace at which data arrives in the stream.
 * 
 * -) It can only decide when is the right time to send the data for processing.
 * 
 * -) If there is data already processed or too little data to process, Node puts the arriving data in 
 *    a "buffer".
 * 
 * -) It is an intentionally small area that node maintains in the runtime to process a stream of data.
 * 
 * Eg:- Streaming a video online
 *      -) SCENERIO 1:- If your internet connection is fast enough, the speed of the stream will be fast enough to instantly fill
 *         up the buffer and send it out for processing.
 *      -) That will repeat till the stream is finished.
 * 
 *      -) SCENERIO 2:- If you internet connection is slow, after processing the first chunk of data that arrived, the video player
 *         will display a loading spinner which indicates it is waiting for more data to arrive.
 * 
 *      -) Once the buffer is filled up and the data is processed, the video player shows the video.
 * 
 *      -) While the video is playing, more data will continue to arrive and wait in the buffer.
 */

const buffer = new Buffer.from("BatMan"); // Default character set is UTF-8

console.log("Buffer Example ====>",buffer, buffer.toJSON())
/**
 * buffer (contains raw binary data) ==> <Buffer 42 61 74 4d 61 6e> (Base 16 or hexadecimal notation of the numbers)
 * 
 * buffer.toJSON() ==> { type: 'Buffer', data: [ 66, 97, 116, 77, 97, 110 ] }
 */