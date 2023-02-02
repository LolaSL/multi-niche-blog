require("dotenv").config();
const db = require('../db');

exports.getUsers = async (req, res) => {
    try {
      const { rows } = await db.query('SELECT * FROM users ORDER BY id ASC', []);
  
      return res.status(200).json({
        success: true,
        users: rows
      })
    } catch (error) {
      console.log(error.message)
    }
  }