const chalk = require("chalk");
module.exports = class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.reservations = [];
    this.complaints = [];
  }
  reserve(Booking) {
    this.reservations.push(Booking);
    Booking.worker.bookings.push(Booking);
  }
  printReservations() {
    console.log(this.name + " has booked the following workers:");
    this.reservations.forEach(printWorkerName);
  }
  printComplaintByClient() {
    console.log(
      this.name + " has filed complaints against the following workers:"
    );
    this.complaints.forEach(printWorkerName);
  }
}