const chalk = require("chalk");
module.exports = class platform {
  constructor(name, users = [], workers = [], bookings = [], id) {
    this.name = name;
    this.users = users;
    this.workers = workers;
    this.bookings = this.bookings;
    this.id = id;
  }

  report() {
    console.log(
      chalk.blue.bgRed.bold(this.name),
      "platform contains",
      chalk.green(this.users.length),
      "users",
      "and number of workers are",
      this.workers.length
    );
  }
  //   printUserNames() {
  //     console.log("The registered users on the platform are:");
  //     this.users.forEach(printName);
  //   }
  //   printWorkerNames() {
  //     console.log("The registered workers on the platform are:");
  //     this.workers.forEach(printName2);
  //   }
  static create({ name, users, workers, bookings, id }) {
    return new platform(name, users, workers, bookings, id);
  }
};
