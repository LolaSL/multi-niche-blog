require("dotenv").config();
const db = require('../db');

const createUser = (req, res) => {
    const {
        id,
        name,
        email
    } = request.body
  db.query('INSERT INTO users (id, name, email) VALUES ($1, $2, )', [name, email], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

const getUsers = (req, res) => {
    db.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id)

   db.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
       }
        res.status(200).json(results.rows)
    })
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