/**
 * ================================= Asynchronous Javascript ================================
 * -) Javascript is a synchronous, blocking and single-threaded language.
 * 
 * Problem with this model :-
 *          let response = fetchDataFromDB('endpoint');
 *          displayDataFromDB(response);
 * 
 *          -) fetchDataFromDB('endpoint') could take 1 second or even more.
 * 
 *          -) During that time, we can't run any further code.
 * 
 *          -) If it is simply proceeds to the next line without waiting, we have an error because
 *             data is not what we expect it to be.
 * 
 * Solution:-
 *          -) Web browser and Nodejs define functions and APIs that allow us to register functions
 *             that should not be executed synchronously, and should instead be invoked async when 
 *             some kind of event occurs.
 * 
 *          -) EG:- That could be passage of time (setTimeout or setInterval), the user's interaction
 *             with mouse (addEventListener), data being read from a file system or the arrival of data
 *             over the network (callbacks,Promises,async-await)
 * 
 *          -) You can let your code do several things at the same time without stopping or blocking the
 *             main thread.
 * 
 * ================================= Summary =========================================================
 * 
 * -) JS is synchronous, blocking and single-threaded language.
 * 
 * -) This nature however is not beneficial for writing apps.
 * 
 * -) We want non-blocking async behaviour which is made possible by a browser for FE and Node.js for BE
 * 
 * -) This style of programming where we don't block the main JS thread is fundamental to Nodejs and is at the
 *    heart of how some of the built-in module code is written.
 */