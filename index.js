require('dotenv').config()

const { PORT } = require('./config')
const express = require('express')

const server = express()

server.use(express.json())

server.listen(PORT || 5000,()=> {
    console.log(`Server listening on`, PORT || 5000)
})