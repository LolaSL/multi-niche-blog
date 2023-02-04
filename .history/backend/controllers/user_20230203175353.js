require("dotenv").config();
const pool = require('../db');

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id)

   pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
       }
        res.status(200).json(results.rows)
    })
};

// const deleteUser = (req, res) => {
//     const id = parseInt(req.params.id)

//    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
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