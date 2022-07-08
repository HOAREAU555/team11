const db = require('../requires/db');
const queries = require('../requires/sql')

const createTables =  (db) =>
  db.query(queries.CreateUsers); 
  db.query(queries.CreateCapteursEnsoleillement); 
  db.query(queries.CreateCapteursHumidite); 
  db.query(queries.CreateCapteursPluviometres); 
  db.query(queries.CreateCapteursTemperature); 


const up = {
  async load(fn)
  {
    await db.connect();
    await createTables(db);
    console.log("Migrate!");
    //process.exit()
  },
};

module.exports = Object.assign(() => {
  return up;
}, up);

