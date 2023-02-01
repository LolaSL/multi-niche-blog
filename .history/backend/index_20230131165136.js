import express from 'express';
import postRouter from './routes/posts.js'
const app = express();

app.use(express.json())

app.get('/api/posts', postRouter)

app.listen(9000, () => {
    console.log('Server is connected to lo')
})