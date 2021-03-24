const mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
 host: 'localhost',
  user: 'root',
  password: 'ShifuL2020!',
  database: 'burgers_db',
  });
}

// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: 'ShifuL2020!',
//   database: 'burgers_db',
// });

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;