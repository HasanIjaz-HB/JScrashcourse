class User {
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
    workforce.bookings.push(Worker);
    this.userbookings.push(Worker);
    Worker.workerbookedby.push(this);
  }
  printuserbooking() {
    console.log(this.name + " has booked the following workers:");
    this.userbookings.forEach(printName2);
  }
  usercomplain(Worker) {
    this.complaints.push(Worker);
    Worker.complaintlist.push(this);
  }
  printcomplaints() {
    console.log(
      this.name + " has filed complaints against the following workers:"
    );
    this.complaints.forEach(printName2);
  }
}

haris = new User("Haris", 35, "haris@xyz.com");
sam = new User("Sam", 34, "sam@xyz.com");

class Worker {
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
}

tyler = new Worker("Tyler", "Plumbing", 5);
langard = new Worker("Langard", "Electrician", 3);

class platform {
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
}

printName = (User) => console.log(User.name);
printName2 = (Worker) => console.log(Worker.name);

workforce = new platform("WORKFORCE");
sam.registeruser();
haris.registeruser();
tyler.registerworker();
langard.registerworker();
//workforce.printUserNames();
//workforce.printWorkerNames();

sam.bookworker(tyler);
sam.bookworker(langard);
sam.printuserbooking();
haris.bookworker(tyler);
haris.printuserbooking();
tyler.printworkersbookings();

sam.usercomplain(tyler);
haris.usercomplain(tyler);
tyler.printcomplaintsagainst();
