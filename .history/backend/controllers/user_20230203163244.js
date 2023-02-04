require("dotenv").config();
const db = require('../db');

exports.getUsers = (req, res) => {
    db.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }