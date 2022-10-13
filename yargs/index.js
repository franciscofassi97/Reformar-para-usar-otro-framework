const yargs = require('yargs');

const argumentos = process.argv.slice(2);
const parsear = yargs(argumentos).default({
  port: 8081,
  modo: "FORK",
}).alias({
  p: 'port',
  m: 'modo',
}).argv;

module.exports = parsear;