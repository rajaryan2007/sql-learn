const db = require("../db/db")

async function getUsersWithPosts() {
    const getUsersWithPostsQuery =`
    SELECT users.id ,users.username,posts.title
    FROM users
    INNER JOIN posts ON users.id = posts.user_id
    `
    
    try {
        const res = await db.query(getUsersWithPostsQuery)
        return res.rows;
    } catch (error) {
        console.error(error);
        
    }

}

module.exports = {getUsersWithPosts}