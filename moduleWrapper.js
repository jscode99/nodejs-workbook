/**
 * - IIFE that wraps every module contains "5" parameters.
 * 1. exports
 * 2. require
 * 3. module
 * 4. __filename
 * 5. __dirname
 *
 * - Parameters are injected into modules during execution by nodejs.
 * - Global looking variables which are dedicated to that particular module.
 */

// This is how it looks like under the hood ->

(function (exports, require, module, __filename, __dirname) {
  const myConstant = "This is my constant";
  console.log("Module Wrapper Constant ====> ",myConstant);
})();

/**
 * 1) __dirname : String which represents to the current directory/folder.
 *
 * 2) __filename : String which represents the file name of the current module.
 *
 * 3) require : Used to import a module by path
 *
 * 4) module : A reference object to the current module.
 */
