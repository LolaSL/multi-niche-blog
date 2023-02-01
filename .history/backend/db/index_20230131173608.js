import  Pool from "pg";

const pool = new Pool({
  PORT=9000
PGUSER=postgres
PGHOST=localhost
PGPASSWORD=lolik1968
PGDATABASE=blog
PGPORT=5432 
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};