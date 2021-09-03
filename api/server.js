const express = require('express');
const server = express();

server.use(express.json())


// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js

server.use('/',(req,res)=> {
    res.send(`<h2>Lets Get Started</h2>`)
})
module.exports = server;
