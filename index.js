import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 8080

app.get('/', (req, res) => {
    return res.json({msg: "Hello from the server V2"})
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})