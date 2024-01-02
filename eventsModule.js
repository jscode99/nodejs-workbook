/**
 * ======================== EVENTS MODULE ===================================
 * -) Allows us to work with events in Node.js
 * -) An event is an action or an occurrence that has happened in our application that we can respond to.
 * -) Using the events module, we can dispatch our own custom events and respond to those custom events in
 *    a non-blocking manner.
 */

const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("start-batmobile", (member) =>
  console.log(
    "Event Emitter example 1 ===>",
    `Batmobile has started the engine!`,
  ),
);

emitter.on("start-batmobile", (member) => {
  if (member) {
    console.log(
      "Event Emitter example 1 ===>",
      `Batmobile is on the way to pick ${member}.`,
    );
  }
});

emitter.emit("start-batmobile", "Wonder Woman");
