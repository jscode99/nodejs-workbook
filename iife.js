/** Immediately Invoked Function Expression -
 * - Each function gets its own private scope.
 * - Before a module's code is executed, nodejs will wrap it with a IIFE function wrapper
 *   that provides module scope.
 * - So each module has its own scope.
 * - To prevent conflicting variables or functions.
 * - Proper encapsulation and re-usability
 **/

(function () {
  const superHero = "Batman";
  console.log(superHero);
})();

(function () {
  const superHero = "Superman";
  console.log(superHero);
})();
