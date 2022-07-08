const db = require('../requires/db')
const a = require('../requires/config')
const func = require('../requires/functions')
const queries = require('../requires/sql')

const getByCapteur = async (request, response) => {
    const table = request.params.table
    const order = request.params.order
    db.query(`SELECT * FROM ${table} ORDER BY dateCreation ${order}`, (error, results) => {
        if (error)
          response.status(400).json(error)
        else
          response.status(200).send(results.rows)
    })
}
const InsertByCapteur = async (request, response) => {
    const { table, nom, valeur, unite } = request.body
    var id = func.guid();
    var date = func.getDate();
    db.query(`INSERT INTO ${table} (id, nom, valeur, unite, dateCreation) VALUES ('${id}', '${nom}', '${valeur}', '${unite}', '${date}')`, (error, results) => {
        if (error)
          response.status(400).json(error)
        else
          response.status(200).send(results)
    })
}

const CreateCapteur = async (request, response) => {
  const name = request.params.name
  db.query(queries.CreateCapteur, [name], (error, results) => {
      if (error)
        response.status(400).json(error)
      else
        response.status(200).send(results)
  })
}


module.exports = {getByCapteur, InsertByCapteur, CreateCapteur }