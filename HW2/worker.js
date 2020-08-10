const Lib = require("./lib")
module.exports = class Worker {
  constructor(name, field, experience) {
    this.name = name;
    this.field = field;
    this.experience = experience;
    this.bookings = [];
    this.complaintlist = []; // should be renamed as complaints
  }


  // this method should be on Client model instead.
  // new Complaint should be created in this method
  // and renamed as complain
  clientComplain(complaint) {
    this.complaintlist.push(complaint);
    complaint.client.complaints.push(complaint);
  }
  printBookings() {
    console.log(this.name + " was booked the following clients:");
    // printClientName has to be imported to that file in order to work. We can keep this kind of functions in a file called 'lib' and import them from there
    this.bookings.forEach(Lib.printClientName);
  }
  printComplaints() {
    console.log(
      this.name + " has complaints filed by the following clients:"
    );
    // printWorkerName has to be imported to that file in order to work. We can keep this kind of functions in a file called 'lib' and import them from there
    this.complaintlist.forEach(Lib.printClientName);
  }
}