const chalk = require("chalk");
module.exports = class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.userbookings = [];
    this.complaints = [];
  }
  registeruser() {
    workforce.users.push(this);
  }
  bookworker(Worker) {
    workforce.bookings.push(Worker.name);
    this.userbookings.push(Worker.name);
    Worker.workerbookedby.push(this.name);
  }
  printuserbooking() {
    console.log(this.name + " has booked the following workers:");
    this.userbookings.forEach(printName2);
  }
  usercomplain(Worker) {
    this.complaints.push(Worker.name);
    Worker.complaintlist.push(this.name);
  }
  printcomplaints() {
    console.log(
      this.name + " has filed complaints against the following workers:"
    );
    this.complaints.forEach(printName2);
  }
};
