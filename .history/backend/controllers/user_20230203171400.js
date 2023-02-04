require("dotenv").config();
const db = require('../db');

const getUsers = (req, res) => {
    db.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
};

const getUserById = (req, res) => {
    // const id = JSON.parse(req.params.id)

    // db.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    //     if (error) {
    //         throw error
    //     }
    //     res.status(200).json(results.rows)
    // })

    userRouter.get('/:id', checkAuthentication, async (req, res) => {
        const id = req.params.id;
        try {
            const user = await userInstance.getById(id);
            if (!user) return res.status(404).send("User doesn't exist")
            req.params.user = user;
            return res.status(200).json(user);
        } catch (err) {
            res.status(400).send(err);
        }
    
    });
};

const deleteUser = (req, res) => {
    const id = JSON.parse(req.params.id)

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