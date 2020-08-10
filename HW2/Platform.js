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
    // printName has to be imported to that file in order to work. We can keep this kind of functions in a file called 'lib' and import them from there
    this.users.forEach(printName);
  }
  printWorkerNames() {
    console.log("The registered workers on the platform are:");
    // printName has to be imported to that file in order to work. We can keep this kind of functions in a file called 'lib' and import them from there
    this.workers.forEach(printName);
  }
}
