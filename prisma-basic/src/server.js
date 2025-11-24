import "dotenv/config";
import express from "express";
import authorRoutes from './routes/author.Routes.js';
const app = express ()
app.use(express.json());

const PORT = process.env.PORT || 3000

app.use('/api/author',authorRoutes)


app.listen(PORT ,()=> console.log(`Server is now running at Port ${PORT}`));

