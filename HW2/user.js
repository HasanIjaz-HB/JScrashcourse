const Lib = require("./lib")
module.exports = class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.reservations = [];
    this.complaints = [];
  }
  reserve(booking) {
    this.reservations.push(booking);
    booking.worker.bookings.push(booking);
  }
  printReservations() {
    console.log(this.name + " has booked the following workers:");
    this.reservations.forEach(Lib.printWorkerName);
  }
  // this method should be renamed as "printComplaints"
  printComplaintByClient() {
    console.log(
      this.name + " has filed complaints against the following workers:"
    );
    this.complaints.forEach(Lib.printWorkerName);
  }
}