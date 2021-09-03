// Write your "projects" router here!
const express = require('express')
const { validateProjectId } = require('./projects-middleware')
// const {

// } = require('../projects/projects-middleware')

const Projects = require('./projects-model')

const router = express.Router()
router.get('/',(req, res)=> {
    Projects.get()
    .then(projects => {
        res.json(projects)
    }) 
    .catch(err => {
        res.status(500).json({
            message:"The Project could not be retrieved",
            err: err.stack,
            stack: err.stack,
        })
    
    })
       
})
    router.get('/:id', validateProjectId, (req, res)=> {
       res.json(req.project)
    })
    
    
    module.exports = router