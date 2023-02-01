import express from 'express';
import postRoutes from './routes/posts'
const app = express();

app.use(express.json())

app.get('/api/v1/posts', postRouter)

app.listen(9000, () => {
    console.log('Server is connected')
})