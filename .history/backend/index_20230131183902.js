const express = require('express');
const postRouter = require('./routes/posts.js');
const authRouter = require('./routes/auth.js');



const app = express();

app.use(express.json())

app.use('/api/v1/posts', postRouter)
app.use('/api/auth', authRouter)

app.listen(9000, () => {
    console.log('Server is connected')
})