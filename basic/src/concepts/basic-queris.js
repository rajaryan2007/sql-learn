const db = require("../db/db");

async function createUsersTable() {
  const createTableQuery = `
   CREATE TABLE IF NOT EXISTS users(
   id SERIAL PRIMARY KEY,
   username VARCHAR(50) UNIQUE NOT NULL,
   email VARCHAR(255) UNIQUE NOT NULL,
   crated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
   
   )`;

  try {
    await db.query(createTableQuery);
    console.log("Users table created sucessfully");
  } catch (error) {
    console.error("Error while creating user table", error);
  }
}

async function insertUser(username, email) {
  const insertUserQuery = `INSERT INTO users (username,email)
  VALUES($1,$2)
  RETURNING *
  `;
  try {
    const res = await db.query(insertUserQuery, [username, email]);
    console.log("user inserted successfully", res.rows[0]);
    return res.rows[0];
  } catch (error) {
    console.error("error while creating user table", error);
  }
}

async function FetchgetAllUser() {
  const getAllUserFromUsertable = "SELECT * FROM users";

  try {
    const res = await db.query(getAllUserFromUsertable);
    console.log("Fetched all users");
    return res.rows;
  } catch (error) {
    console.error(error);
  }
}

async function updateUserEmail(username, newEmail) {
  const updateUserQuery = `
   UPDATE users
   SET email = $2
   WHERE username = $1
   RETURNING *
   `;
  try {
    const res = await db.query(updateUserQuery, [username, newEmail]);
    if (res.rows.length > 0) {
      console.log("user UPDATED sucessfully ", res.rows[0]);
      return res.rows[0];
    } else {
      console.log("No user found with given username");
      return null;
    }
  } catch (error) {}
}

async function deleteInfo(username) {
  const deletedQuery = `
  DELETE FROM users
  WHERE username = $1
  RETURNING *
  `;
  try {
    const res = await db.query(deletedQuery, [username]);
    if (res.rows.length > 0) {
      console.log("User successfully", res.rows[0]);
      return res.rows[0];
    } else {
      console.log("not user found with given username");
      return null;
    }
  } catch (error) {
    console.error("Error while creating users table", error);
  }
}

module.exports = {
  createUsersTable,
  insertUser,
  FetchgetAllUser,
  updateUserEmail,
  deleteInfo,
};
