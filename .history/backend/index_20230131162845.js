import express from 'express';

const app = express();

app.use(express.json())

app.get('/api/v1/posts', postrouter
})

app.listen(9000, () => {
    console.log('Server is connected')
})