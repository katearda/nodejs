require('dotenv').config()
const express = require('express')

const router = require('./modules')

// Express App
const app = express()
const mongoose = require('mongoose')

// Connect to DB
mongoose.connect(process.env.DB_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}!`)
    })
})
.catch((e) => {
    console.log(e)
})

// Middlewares
// To be able to access request body
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routers
app.use('/api/items', router.itemRouter)