module.exports = class Platform {
  constructor(name) {
    this.name = name;
    this.users = [];
    this.workers = [];
  }
  registerUser(user) {
    this.users.push(user);
  }
  registerWorker(worker) {
    this.workers.push(worker);
  }
  printUserNames() {
    console.log("The registered users on the platform are:");
    this.users.forEach(printName);
  }
  printWorkerNames() {
    console.log("The registered workers on the platform are:");
    this.workers.forEach(printName);
  }
}
