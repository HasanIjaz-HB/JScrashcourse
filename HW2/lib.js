

const chalk = require("chalk");
const printName = (obj) => console.log(chalk.bgWhite.bold.black(obj.name)); // this variable defined as "global variable", it should be const in this case
const printClientName= (obj) => console.log(chalk.bgWhite.bold.black(obj.client.name))
const printWorkerName= (obj) => console.log(chalk.bgWhite.bold.black(obj.worker.name))

module.exports = {printName,printClientName,printWorkerName}