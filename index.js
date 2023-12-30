require("./iife"); // To understand IIFE which works under the hood of the modules in nodejs.
require('./moduleWrapper'); // To understand the 5 parameters in the module.

// =================== To understand Module Caching ===============================
const moduleCaching = require("./moduleCaching");
moduleCaching.getName(); // result : Wonder Women (Default name given in the module)
moduleCaching.setName("Supergirl");
moduleCaching.getName(); // result : Supergirl

const newModuleCaching = require('./moduleCaching');
newModuleCaching.getName(); // result : Supergirl (Instead of wonder women we get supergirl due to module caching)
// =================================================================================


