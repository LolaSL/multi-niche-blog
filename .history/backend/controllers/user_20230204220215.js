require("dotenv").config();
const db = require('../db');

tUsers= async (req, res) => {
    try {
      const users = await db.query(
        "select * from users order by id asc;"
      );
      res.status(200).json({
        status: "success",
        data: {
        users: users.rows,
        },
      });
    } catch (err) {
      console.log(err);
    }
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

const deleteUser = async (req, res) => {
    try {
      const results = db.query("DELETE FROM users where id = $1", [
        req.params.id,
      ]);
      res.status(204).json({
        status: "sucess",
      });
    } catch (err) {
      console.log(err);
    }
  };



module.exports = {
    getUsers,
    getUserById,
    deleteUser,
}