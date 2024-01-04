require("./iife"); // To understand IIFE which works under the hood of the modules in nodejs.
require("./moduleWrapper"); // To understand the 5 parameters in the module.

// ======================= To understand Module Caching ===============================
const moduleCaching = require("./moduleCaching");
moduleCaching.getName(); // result : Wonder Women (Default name given in the module)
moduleCaching.setName("Supergirl");
moduleCaching.getName(); // result : Supergirl

const newModuleCaching = require("./moduleCaching");
newModuleCaching.getName(); // result : Supergirl (Instead of wonder women we get supergirl due to module caching)
// =====================================================================================

// ======================== Module Import-Export Patterns ==============================
// const add = require('./moduleImportExport'); Pattern 1 & 2
const math = require("./moduleImportExport"); // Pattern 3
console.log("Import-Export Pattern add ======>", math.add(10, 20));
console.log("Import-Export Pattern substract ======>", math.substract(20, 10));

// ======================== export vs module.exports ====================================
require("./exportVsModuleExport");

// ============== JSON ===================================================
const jsonData = require("./data"); // require will parse the JSON into Js object
console.log("JSON Data ====> ", jsonData);

// ============== Built-In Module: path ===================================
require("./pathModule");

// ============== Callback pattern or style ===============================
require("./callbackPattern");

// ============== Built-In Module: events =================================
require("./eventsModule");

// ============= Built-In Module: events extended (Custom) =================
const CustomMessageToMembers = require("./customEventEmitter");

const memberFn = new CustomMessageToMembers();

memberFn.on("pickMember", (member) => {
  if (member === "Princess Diana" && member !== "Superman") {
    console.log(
      "Custom Event Emitter example ====>",
      `Ask ${member} about Kryptonite!`,
    );
  } else {
    console.log(
      "Custom Event Emitter example ====>",
      `Hey ${member}!, Wassup buddy ??`,
    );
  }
});

memberFn.on("displayMembers", (members) => {
  console.log(
    "Custom Event Emitter example ====>",
    `There are ${members} member present in the batmobile.`,
  );
});

memberFn.pickMember("Princess Diana");
memberFn.pickMember("Superman");
memberFn.displayMember();

// =========== Character Set & Encoding ====================
require("./characterSetAndEncoding");

// =========== Streams & Buffer ============================
require("./streamsAndBuffers");

// =========== Async Javascript =============================
require("./asynchronousJS");

// =========== Built-In Module: fs ==========================
require("./fsModule");
require("./pipes");

// =========== Built-In Module: fs Promise  =================
require("./fsPromiseModule");

// =========== Built-In Module: HTTP ========================
require('./httpWorks') // How HTTP works and why we need it.