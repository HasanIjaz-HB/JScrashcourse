
const chalk = require("chalk");

const User = require("./user");
const Worker = require("./worker");
const Platform = require("./platform");
const Booking = require("./booking");
const Complaint = require("./complaint");
const Database = require("./database");
const Lib = require("./lib")

const haris = new User("Haris", 35, "haris@xyz.com");
const sam = new User("Sam", 34, "sam@xyz.com");
const tyler = new Worker("Tyler", "Plumbing", 5);
const langard = new Worker("Langard", "Electrician", 3);

const workForce = new Platform("WORKFORCE");
workForce.registerUser(sam);
workForce.registerUser(haris);
workForce.registerWorker(tyler);
workForce.registerWorker(langard);
//workForce.printUserNames();
//workForce.printWorkerNames();

const booking1= new Booking(workForce,sam,tyler)
const booking2= new Booking(workForce,sam,langard)

sam.reserve(booking1)
sam.reserve(booking2)
sam.printReservations();

const booking3= new Booking(workForce,haris,tyler)
haris.reserve(booking3);
haris.printReservations();
tyler.printBookings();
const complain1 = new Complaint(sam, tyler, "The worker didn't perform well");
tyler.clientComplain(complain1)
tyler.printComplaints()
sam.printComplaintByClient()

Database.save("users.json", {sam, haris});

const usersdb = Database.load("users.json");
console.log(usersdb);
