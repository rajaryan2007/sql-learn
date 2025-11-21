const { Pool } = require("pg");

//create a new pool instance to manage database connection
// -> POSGRE -> :// -> [user] -> [password] -> host:post -> [database]

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function query(text, params) {
  const start = Date.now();

  try {
    const result = await pool.query(text, params);

    //excute the time
    const duration = Date.now() - start;

    console.log(`Excuted query:,${{ text, duration, rows: result.rowsCount }}`);

    return result;
  } catch (e) {
    console.log(e);

    throw e;
  }
}

module.exports = { query };
