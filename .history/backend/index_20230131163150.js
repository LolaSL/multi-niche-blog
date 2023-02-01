import express from 'express';
import postsRouter from './routes'
const app = express();

app.use(express.json())

app.get('/api/v1/posts', postRouter)

app.listen(9000, () => {
    console.log('Server is connected')
})