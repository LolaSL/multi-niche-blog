const express =require('express');
const postRouter from './routes/posts.js';
const authRouter from './routes/auth.js';



const app = express();

app.use(express.json())

app.use('/api/posts', postRouter)
app.use('/api/auth', authRouter)

app.listen(9000, () => {
    console.log('Server is connected')
})