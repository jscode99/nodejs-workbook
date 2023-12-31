/**
 * In Nodejs, both exports and module.exports are used to define "what a module will make available"
 * for another module when it is required (It is an object).
 *
 *
 *
 * 1) module.exports - If we assign a new value to module.exports it will
 * completely replace the existing object. (Official way to expose something from a module).
 *
 *
 *
 * 2) exports - Shorthand for module.exports. You cannot directly assign a new object to "exports"
 * and expect it to replace the entire "module.exports" object.
 *
 * - It's crucial to note that if you assign a new value directly to exports, it will break the
 * reference to module.exports and won't work as expected:
 */

// Understand it through the object reference in JS
const obj1 = {
  name: "Bruce Wayne",
};

const obj2 = obj1;
obj2.name = "Clark Kent";

console.log("Object reference in JS ====> ", obj1); // result - {name:"Clark Kent"}
/**
 * Here obj1 and obj2 have same reference in the memory (Shallow copy).
 */

exports.something = "Something";

exports = {
  something: "New something",
};

/**
 * ======================= Summary ===========================================
 * The reference will be lost when you assign a new object instead of attaching a property on the
 * exports object.
 */
