const express = require('express');
const { logger } = require('./projects/projects-middleware')
const projectsRouter = require('./projects/projects-router')
const server = express();

server.use(express.json())
server.use(logger)

// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js

server.use('/api/projects', projectsRouter)


server.use('/',(req,res)=> {
    res.send(`<h2>Lets Get Started</h2>`)
})
module.exports = server;
