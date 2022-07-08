const db = require('../requires/db');
const queries = require('../requires/sql')

const dropTables = async (db) => 
  db.query(queries.DropUsers);
  db.query(queries.DropCE);
  db.query(queries.DropCH);
  db.query(queries.DropCP);
  db.query(queries.DropCT);

const down = 
{
  async load(fn)
  {
    await db.connect();
    await dropTables(db);
    console.log("Down!");
    //process.exit()
  },
};

module.exports = Object.assign(() => {
  return down;
}, down);
