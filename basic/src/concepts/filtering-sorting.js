const db = require("../db/db")

async function getUserWhere(condition) {
    const getUserQuery =`
    SELECT * FROM users
    WHERE ${condition}
    `
    try {
        const res = await db.query(getUserQuery)
        return res.rows;
    } catch (error) {
        console.error(error);
        
    }
}

async function getSortedUsers(column, order = "ASC") {
  

  const q = `SELECT * FROM users ORDER BY ${column} ${order}`;

  try {
    const result = await db.query(q);
    return result.rows;
  } catch (err) {
    console.error(err);
  }
}

async function getPagintedUsers(limit,offset) {
    const q = `
     SELECT * FROM users 
     LIMIT $1 OFFSET $2
    `
    try {
        const result = await db.query(q,[limit,offset])
        return result.rows;        
    } catch (error) {
        console.error(error);
        
    }

}


module.exports = {
    getUserWhere,
    getSortedUsers,
    getPagintedUsers
} 
