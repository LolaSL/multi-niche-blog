import express from 'express';
import postRouter from './routes/posts.js'
const app = express();

app.use(express.json())

app.get('/api/v1/posts', postRoutes)

app.listen(9000, () => {
    console.log('Server is connected')
})