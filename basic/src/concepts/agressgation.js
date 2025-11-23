const db = require('../db/db')


async function constPostsByUser() {
    const countPostsByUserQuery =`
    SELECT users.username,COUNT(posts.id) as post_count
    FROM users
    LEFT JOIN posts ON users.id = posts.user_id
    GROUP BY users.id, users.username
    `;

    try {
        const res = await db.query(countPostsByUserQuery)
        return res.rows
    } catch (error) {
        
    }
}

const avgPost = async () => {
    try {
        const avargepostsPerUserQuery =`
        SELECT AVG(post_count) as average_posts
        FROM(
        SELECT COUNT(posts.id) as post_count
        FROM users
        LEFT JOIN posts ON users.id = posts.user_id
        GROUP BY users.id

        ) as user_per_counts
        `
    } catch (error) {
        console.log(error);
    }
}

module.exports ={
    constPostsByUser,
    avgPost
}