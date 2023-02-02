require("dotenv").config();
const db = require('../db');

exports.getUsers = async (req, res) => {
    try {
      const { rows } = await db.query('SELECT * FROM users ORDER BY id ASC');
  
      return res.status(200).json({
        success: true,
        users: rows
      })
    } catch (error) {
      console.log(error.message)
    }
}
  
exports.getUserById = async (req, res) => {

    //   const { id } = params.id;req.params.id
    // let text = 'SELECT * FROM users WHERE id = $1;';
    // let inputs = [data];
  try {

  // console.log(params.id)
        // const result = await db.query(text, inputs);
      const { rows } = await db.query('SELECT * FROM user WHERE id = $1');
        // return result.rows[0];
        return res.status(200).json({
          success: true,
          users: rows.rows[0],
          // id: id
        })
    } catch (error) {
        console.log(error.message)
    }
}
