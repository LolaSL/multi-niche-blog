import{ Pool } from "pg";

const pool = new Pool();

exports = {
  query: (text, params) => pool.query(text, params),
};