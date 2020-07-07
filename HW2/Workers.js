module.exports = class Worker {
  constructor(name, category, experience) {
    this.name = name;
    this.category = category;
    this.email = experience;
    this.workerbookedby = [];
    this.complaintlist = [];
  }
  registerworker() {
    workforce.workers.push(this);
  }
  printworkersbookings() {
    console.log(this.name + " was booked the following users:");
    this.workerbookedby.forEach(printName);
  }
  printcomplaintsagainst() {
    console.log(this.name + " has complaints filed by the following users:");
    this.complaintlist.forEach(printName);
  }
};
