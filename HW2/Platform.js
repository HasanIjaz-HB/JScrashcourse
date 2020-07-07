module.exports = class platform {
  constructor(name) {
    this.name = name;
    this.users = [];
    this.workers = [];
    this.bookings = [];
  }
  printUserNames() {
    console.log("The registered users on the platform are:");
    this.users.forEach(printName);
  }
  printWorkerNames() {
    console.log("The registered workers on the platform are:");
    this.workers.forEach(printName2);
  }
};
