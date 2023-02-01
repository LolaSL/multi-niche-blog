import express from 'express';

const app = express();

app.use(express.json())

app.get('/api/v1/posts', (req, res) => {
    res.json("Test goes.")
})

app.listen(9000, () => {
    console.log('Server is connected')
})