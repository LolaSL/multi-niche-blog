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


const  getUserById = async (req, res) => {

    console.log(req.params.id);
    try {

        const user = await db.query(
            "select * from users where id = $1",
            [req.params.id]
        );
        console.log(user);

        res.status(200).json({
            status: "succes",
            data: {
                user: user.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
};

exports.removeHotel = async (req, res) => {
    try {
      const results = db.query("DELETE FROM hotels where id = $1", [
        req.params.id,
      ]);
      res.status(204).json({
        status: "sucess",
      });
    } catch (err) {
      console.log(err);
    }
  };
// const deleteUser = (req, res) => {
//     const id = parseInt(req.params.id)

//     db.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//         if (error) {
//             throw error
//         }
//         res.status(200).send(`User deleted with ID: ${id}`)
//     })
// };


module.exports = {
    getUsers,
    getUserById,
    deleteUser,
}