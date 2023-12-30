/**
 * Module Caching : Loaded and Cached for sub-sequent loading.
 * 
 * Will remember the last module execution and caching it, so again for that particular module execution those cached one can be served for better performance.
 */

class ModuleCachingExample {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }

  setName(name) {
    this.name = name;
  }
}

module.exports = new ModuleCachingExample("Wonder Women");
/**
 * To avoid caching, we should change the module exports pattern.
 * 
 * module.exports = ModuleCachingExample;
 * 
 * const wonderWomen = new ModuleCachingExample("Wonder Women");
 * 
 * const superGirl = new ModuleCachingExample("SuperGirl");
 */