/**
 * In Javascript, functions are first class object.
 * -) A function can be passed as an argument to a function.
 * -) A function can also be returned as valuues from other functions.
 */

const welcome = (name) => `Welcome ${name}!!`;

const welcomeMembers = (callbackFn) => {
  const members = "Justice League Members";
  return callbackFn(members);
};

console.log("Callback Example ===>", welcomeMembers(welcome));

/**
 * Any function that is passed as an argument to another function is called a "Callbacks function".
 *
 * Any function which accepts a function as an argument or return a function is called "Higher order functions."
 */

/**
 * Types of Callbacks
 * 1) Synchronous
 * 2) Asynchronous
 *
 * 1) Synchronous Callback : Function executes immediately when control goes inside the higher order function.
 *
 * Eg:- .sort((a,b)=>a-b), .map((a,i)=>a*i) etc.
 * 
 * 2) Asynchronous Callback : A callback that is often used to continue or resume code execution after an async operation has completed.
 * - Callback are used to deplay the execution of a function until a particular time or event has occurred.
 * - In Nodejs have an asynchronous nature to prevent blocking of execution.
 * Eg:- reading data from a file, fetching data from a database or handling a network request.
 *
 */
