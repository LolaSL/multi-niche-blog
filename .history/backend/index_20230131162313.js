import express from 'express';

const app = express();

app.use(express.json())

app.get('/api/v1/test', (req, res) => {
    res.json("")
})

app.listen(9000, () => {
    console.log('Server is connected')
})