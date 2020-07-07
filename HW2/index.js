const User = require("./Users");
const Worker = require("./Workers");
const platform = require("./Platform");
const Database = require("./database");

haris = new User("Haris", 35, "haris@xyz.com");
sam = new User("Sam", 34, "sam@xyz.com");

tyler = new Worker("Tyler", "Plumbing", 5);
langard = new Worker("Langard", "Electrician", 3);

printName = (name) => console.log(name);
printName2 = (name) => console.log(name);

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

Database.save("users.json", sam);
Database.save("users.json", haris);

const usersdb = Database.load("users.json");

console.log(usersdb);
