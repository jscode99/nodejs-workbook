// When importing a built-in module, the node prefix (node:) is optional. However, the node protocol has many benefits.
const path = require("node:path");
/**
 * Benefits:
 * 1) Makes it perfectly clear that the import is a Nodejs built-in module.
 * 2) Make the import identifier a valid absolute url.
 * 3) Avoid conflicts for future Nodejs built-in module.
 */

/**
 * path - Provides utilities to working with file and directory paths.
 */

// __dirname : directory name (current)
// __filename : name of the current file which we are in.

// ================================ basename =======================================================
console.log("Path Basename ====>", path.basename(__dirname)); // Rreturn the last portion of a path.

// ================================ extname ========================================================
console.log("Path Extension ====>", path.extname(__filename));
/**
 * - Return the extension of the path, from the last '.' to end of string in the last portion of the path.
 * - If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.
 */

// ================================ prase ============================================================
console.log("Path Parse ====>", path.parse(__filename));
/**
 * Returns an object from a path string - the opposite of format().
 * {
  root: 'D:\\',
  dir: 'D:\\Developer\\nodejs-workbook',
  base: 'pathModule.js',
  ext: '.js',
  name: 'pathModule'
}
 */

// ================================ format ============================================================
console.log("Path Format ===>", path.format(path.parse(__filename)));
// Returns a path string from an object - the opposite of parse().

// ================================ isAbsolute ========================================================
console.log("Path isAbsolute ====>", path.isAbsolute(__filename));
/**
 * Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.
 * If the given {path} is a zero-length string, false will be returned.
 * Is path relative or absolute.
 */

// ================================ join =============================================================
/**
 * path.join()
 * - Join all arguments together and normalize the resulting path. 
 */
console.log("Path Join example 1 ====>", path.join(__dirname + "/something.js")); // result - D:\Developer\nodejs-workbook\something.js
console.log(
  "path Join example 2 ====>",
  path.join("/folder1", "folder2", "index.html"),
); // result - \folder1\folder2\index.html
console.log(
  "path Join example 3 ====>",
  path.join("/folder1", "//folder2", "index.html"),
); // result - \folder1\folder2\index.html
console.log(
  "path Join example 4 ====>",
  path.join("/folder1", "//folder2", "../index.html"), // From folder2 jump one folder up and concat index.html
); // result - \folder1\index.html


// ================================ resolve =============================================================
/**
 * path.resolve()
 * - Starting from leftmost {from} parameter, resolves {to} to an absolute path.
 * - Path starts with a forward slash '\' to indicate that it is an absolute path.
 * - Paths returned is completely dependet on the arguments passed
 */

console.log(
  "Path resolve example 1 ===>",
  path.resolve("folder1", "folder2", "index.html"),
); // result - D:\Developer\nodejs-workbook\folder1\folder2\index.html
/** 
 * If the argument don't contain a '/', resolve will add an absolute path to the current folder and join the arguments.
*/
console.log(
  "Path resolve example 2 ===>",
  path.resolve("/folder1", "folder2", "index.html"),
); // result - D:\folder1\folder2\index.html
/**
 * If we specify a forward slash '/', resolve will return the absolute path from that forward slash.
 */
console.log(
  "Path resolve example 3 ===>",
  path.resolve("folder1", "/folder2", "index.html"),
); // result - D:\folder2\index.html
/** 
 * If a forward slash '/' occurs later in the sequence, resolve will consider that as the root and ignore the previous path.
*/
console.log(
  "Path resolve example 4 ===>",
  path.resolve("/folder1", "//folder2", "../index.html"),
); // result - D:\index.html
/**
 * As same as in the previous example, folder 2 will be the root but we go up one folder and hence the \index.html will be returned. 
 */
console.log(
  "Path resolve example 5 ===>",
  path.resolve(__dirname, "data.json"),
); // result - D:\Developer\nodejs-workbook\data.json
/**
 * Since __dirname is already an absolute path, we see that with "data.json" returned by the resolve method.
 */
