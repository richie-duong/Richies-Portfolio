import express from 'express'
import cors from 'cors'
import {db, connectToDb} from './database.js'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/projects/', async (req, res) => {
    const query = await db.collection('family-feud').findOne({name: projects_list})
    res.json(query)
})

connectToDb(() => {
    console.log('Connected to MongoDB!')
    app.listen(8000, () => {
        console.log('Server is listening on port 8000.')
    })
})