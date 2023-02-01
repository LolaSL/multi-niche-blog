
import db from '../db';
import { hash } from 'bcryptjs'
import { sign } from ('jsonwebtoken');
// const { defaults } = require("pg");
const SECRET = process.env.SECRET;

export const  register = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const hashedPassword = await hash(password, 10)

    await db.query('insert into users(name, email, password) values ($1 , $2, $3)', [
      name,
      email,
      hashedPassword,
    ])

    return res.status(201).json({
      success: true,
      message: 'The registraion was successfull',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

export const  login = async (req, res) => {
  let user = req.user

  let payload = {
    id: user.id,
    email: user.email,
  }

  try {
    const token = await sign(payload, SECRET)
    console.log(token)
    return res.status(200).cookie('token', token, { httpOnly: true }).json({
      success: true,
      message: 'Logged in successfully',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}


export const  logout = async (req, res) => {
  try {
    return res.status(200).clearCookie('token', { httpOnly: true }).json({
      success: true,
      message: 'Logged out successfully',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

