const path = require('path');
const migrate = require('migrate');
const migrationsDirectory = path.resolve(__dirname, './');
require('dotenv').config();

var stateStore;
const [command] = process.argv.slice(2);

new Promise((resolve, reject) => {
  if (command == 'up')
    stateStore = require('./postgres-up.js') 
  else if (command == 'down')
    stateStore = require('./postgres-down.js')
  else {
    console.log('Please run: npm run migrate up|down');
    process.exit()
  }
  migrate.load(
  {
      stateStore,
      migrationsDirectory
    },
    (err, set) => {
      if (err) {
        reject(err);
      }

      if (typeof set[command] !== 'function')
        reject(new Error('Command is not a function'));

      set[command]((err) => {
        if (err) reject(err);
        resolve();
      });
    });
})