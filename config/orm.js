const connection = require("./connect.js");

const orm = {
  selectAll(table, cb) {
    let query = `SELECT * FROM ${table}`;
    connection.query(query, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne(table, cols, vals, cb) {
    let query = `INSERT INTO ${table}`;
    query += " (";
    query += cols.toString();
    query += ") ";
    query += "VALUES (?,?)";
    
console.log(query);
    connection.query(query, vals, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne(table, cols, condition, cb) {
    let query = `UPDATE ${table}`;
    query += " SET ";
    query += cols;
    query += " WHERE ";
    query += condition;
console.log(query);
    connection.query(query, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;