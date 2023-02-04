require("dotenv").config();
const db = require('../db');

const getUsers = (request, response) => {
    db.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }