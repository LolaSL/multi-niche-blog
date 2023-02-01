import express from 'express';
import postRouter from './routes/posts.js';
import authRouter from './routes/posts.js';



const app = express();

app.use(express.json())

app.use('/api/posts', postRouter)
app.use('/api/auth', authRouter)

app.listen(9000, () => {
    console.log('Server is connected')
})