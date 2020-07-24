module.exports = class Worker {
  constructor(name, field, experience) {
    this.name = name;
    this.field = field;
    this.experience = experience;
    this.bookings = [];
    this.complaintlist = [];
  }
  clientComplain(complaint) {
    this.complaintlist.push(complaint);
    complaint.client.complaints.push(complaint);
  }
  printBookings() {
    console.log(this.name + " was booked the following clients:");
    this.bookings.forEach(printClientName);
  }
  printComplaints() {
    console.log(
      this.name + " has complaints filed by the following clients:"
    );
    this.complaintlist.forEach(printClientName);
  }
}