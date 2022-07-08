 const ChangePass = 'UPDATE Users SET password = $1 WHERE id = $2'
 const UpdateUser = 'UPDATE Users SET firstname = $1, lastname = $2 WHERE id = $5'
 const InsertUser = 'INSERT INTO Users (id, email, password, firstname, lastname) VALUES ($1, $2, $3, $4, $5)'
 const LoginUser = 'SELECT * FROM Users WHERE email = $1 and password = $2'
 const GetUserById = 'SELECT * FROM Users WHERE id = $1'
 const GetUserByEmail = 'SELECT * FROM Users WHERE email = $1'
 const GetAllUser = "SELECT * FROM Users";

// Migrations 
 const CreateUsers = 'CREATE TABLE IF NOT EXISTS Users (id uuid PRIMARY KEY, email text UNIQUE, password text, firstname text, lastname text)'
 const DropUsers = 'DROP TABLE IF EXISTS Users CASCADE'

// queries
 const GetByCapteur = 'SELECT * FROM $1 ORDER BY $2'
 const InsertByCapteur = `INSERT INTO $1 (id, nom, valeur, unite, dateCreation) VALUES ($2, $3, $4, $5, $6)`
 const CreateCapteur = 'CREATE TABLE IF NOT EXISTS $1 (ID uuid PRIMARY KEY, NOM text, VALEUR text, UNITE text, dateCreation timestamp)'
 
//Capteurs
 const CreateCapteursHumidite  = 'CREATE TABLE IF NOT EXISTS Capteurs_Humidite (ID uuid PRIMARY KEY, NOM text, VALEUR text, UNITE text, dateCreation timestamp)'
 const CreateCapteursTemperature = 'CREATE TABLE IF NOT EXISTS Capteurs_Temperature (ID uuid PRIMARY KEY, NOM text, VALEUR text, UNITE text, dateCreation timestamp)'
 const CreateCapteursEnsoleillement = 'CREATE TABLE IF NOT EXISTS Capteurs_Ensoleillement (ID uuid PRIMARY KEY, NOM text, VALEUR text, UNITE text, dateCreation timestamp)'
 const CreateCapteursPluviometres = 'CREATE TABLE IF NOT EXISTS Capteurs_Pluie (ID uuid PRIMARY KEY, NOM text, VALEUR text, UNITE text, dateCreation timestamp)'

 const DropCH = 'DROP TABLE IF EXISTS Capteurs_Humidite CASCADE'
 const DropCT = 'DROP TABLE IF EXISTS Capteurs_Temperature CASCADE'
 const DropCE = 'DROP TABLE IF EXISTS Capteurs_Ensoleillement CASCADE'
 const DropCP = 'DROP TABLE IF EXISTS Capteurs_Pluie CASCADE'

 module.exports = { ChangePass, UpdateUser, InsertByCapteur, InsertUser, LoginUser, GetUserByEmail, GetUserById, GetAllUser, GetByCapteur, 
    CreateCapteursEnsoleillement, CreateCapteursHumidite, CreateCapteursPluviometres, CreateCapteursTemperature, CreateUsers, DropCE, DropCH, DropCP, DropCT, DropUsers,
    CreateCapteur }
