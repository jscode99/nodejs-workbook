/**
 * - At the time Nodejs was created, there was no built-in module system in JS.
 * 
 * - Nodejs defaulted to CommonJS as its module system.
 * 
 * - As of ES2015, javascript does have a standardized module system as part of the language itself.
 * 
 * - That module system is called EcmaScript Modules or ES Modules or ESM for short.
 */

const add = (a, b) => a + b;

// export default add; // For single export

const subtract = (a, b) => a - b;

export default {
  add,
  subtract
}

/**
 * ES Modules is the ECMAScript standard for modules.
 * 
 * It was introduced with ES2015.
 * 
 * Nodejs 14 and above support ES Modules.
 * 
 * Instead of module.exports, we use the export keyword.
 * 
 * The export can be default or named.
 * 
 * Import the exported variables or functions using the "import" keyword.
 */