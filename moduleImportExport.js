// const add = (a, b) => {
//   return a + b;
// }

// ========================== Pattern 1 ==============================================
// module.exports = add; // Exports a single function/variable.

// ========================== Pattern 2 ==============================================
/**
 * Instead of a module.exports in a seperate line, directly assign arrow function to module.exports
 *
 * Import pattern will remain the same as of the pattern 1.
 */

// module.exports = (a, b) => a + b;

// ========================== Pattern 3 ==============================================
/**
 * If multiple functions/variables needed to be exported.
 */

const add = (a, b) => a + b;

const substract = (a, b) => a - b;

module.exports = {
  add,
  substract,
};

// If key and value is same, we can give name itself as per ES2015 features.

// ========================== Pattern 4 ==============================================
// module.exports.add = (a, b) => a + b;
// module.exports.substract = (a, b) => a - b;
/**
 * Import pattern will remain the same as that of the pattern 3.
 */

// ========================== Pattern 5 ==============================================
// exports.add = (a, b) => a + b;
// exports.substract = (a, b) => a - b;
/**
 * As we saw in the IIFE wrapper, there is an export parameter which is a reference to the module.exports property.
 * 
 * Import pattern will remain the same as that of the pattern 3.
 * 
 * Note: Not an encouraged way of module export pattern.
 */