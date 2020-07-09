const User = require("./models/user");
const Worker = require("./models/worker");
const Platform = require("./models/platform");
const UserService = require("./services/user-service");
const WorkerService = require("./services/worker-service");
const PlatformService = require("./services/platform-service");

console.log("Hello World!");
//console.log("Hello World!");

async function main() {
  const haris = new User("Haris", 35, "haris@xyz.com");
  const sam = new User("Sam", 34, "sam@xyz.com");
  const tyler = new Worker("Tyler", "Plumbing", 5);
  const langard = new Worker("Langard", "Electrician", 3);

  const workforce = new Platform("Workforce");

  sam.registeruser(workforce);
  haris.registeruser(workforce);
  tyler.registerworker(workforce);
  langard.registerworker(workforce);

  workforce.report();

  await UserService.add(sam);
  await UserService.add(haris);

  const user = await UserService.findAll();

  console.log(user[0].name);
  console.log(user[1].name);

  await UserService.del(1);

  const newuser = await UserService.findAll();

  console.log(newuser[0].name);
}

main();
