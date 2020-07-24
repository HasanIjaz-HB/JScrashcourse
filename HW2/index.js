const User = require("./Users");
const Worker = require("./Workers");
const Platform = require("./Platform");
const Booking = require("./Booking")
const Complaint = require("./Complaint")
const Database = require("./database");
const chalk = require("chalk");

const haris = new User("Haris", 35, "haris@xyz.com");
const sam = new User("Sam", 34, "sam@xyz.com");
const tyler = new Worker("Tyler", "Plumbing", 5);
const langard = new Worker("Langard", "Electrician", 3);
printName = (obj) => console.log(chalk.bgWhite.bold.black(obj.name));
printClientName= (obj) => console.log(chalk.bgWhite.bold.black(obj.client.name))
printWorkerName= (obj) => console.log(chalk.bgWhite.bold.black(obj.worker.name))
const workForce = new Platform("WORKFORCE");
workForce.registerUser(sam);
workForce.registerUser(haris);
workForce.registerWorker(tyler);
workForce.registerWorker(langard);
//workForce.printUserNames();
//workForce.printWorkerNames();
const booking_1= new Booking(workForce,sam,tyler)
const booking_2= new Booking(workForce,sam,langard)
sam.reserve(booking_1)
sam.reserve(booking_2)
sam.printReservations();
const booking_3= new Booking(workForce,haris,tyler)
haris.reserve(booking_3);
haris.printReservations();
tyler.printBookings();
const complain_1 = new Complaint(sam, tyler, "The worker didn't perform well");
tyler.clientComplain(complain_1)
tyler.printComplaints()
sam.printComplaintByClient()

Database.save("users.json", sam);
Database.save("users.json", haris);

const usersdb = Database.load("users.json");

console.log(usersdb);
