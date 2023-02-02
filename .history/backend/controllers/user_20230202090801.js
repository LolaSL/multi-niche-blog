require("dotenv").config();
const db = require('../db');

exports.getUsers = async (req, res) => {
    try {
      const { rows } = await db.query('select id, name, email, created_at from users')
  
      return res.status(200).json({
        success: true,
        users: rows
      })
    } catch (error) {
      console.log(error.message)
    }
  }