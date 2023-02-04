require("dotenv").config();
const db = require('../db');

const getUsers = (req, res) => {
    db.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows)
    })
};

// const getUserById = (req, res) => {
//     const id = parseInt(req.params.id)
// req.params.user = user;
//    db.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
//         if (error) {
//             throw error;
//        }
//         res.status(200).json(results.rows)
//     })
// };
exports.getPlaceById = async (req, res) => {

    console.log(req.params.id);
    try {

      const place = await db.query(
        "select * from places where id = $1",
        [req.params.id]
      );
      console.log(place);
  
      res.status(200).json({
        status: "succes",
        data: {
          place: place.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
const deleteUser = (req, res) => {
    const id = parseInt(req.params.id)

   db.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`User deleted with ID: ${id}`)
    })
};


module.exports = {
    getUsers,
    getUserById,
    deleteUser,
}