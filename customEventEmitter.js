const EventEmitter = require("node:events");

class CustomMessageToMembers extends EventEmitter {
  constructor() {
    super();
    this.members = 0;
  }

  pickMember(member) {
    this.members++;
    this.emit("pickMember", member);
  }

  displayMember() {
    this.emit("displayMembers", this.members);
  }
}

module.exports = CustomMessageToMembers;
