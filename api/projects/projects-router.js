// Write your "projects" router here!
const express = require('express')
const { validateProjectId, validateProject } = require('./projects-middleware')
// const {

// } = require('../projects/projects-middleware')

const Projects = require('./projects-model')

const router = express.Router()
router.get('/',(req, res, next)=> {
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
       // `[POST] /api/projects`
  //- Returns the newly created project as the body of the response.
 // - If the request body is missing any of the required fields it responds with a status code 400.
})
    router.get('/:id', validateProjectId, (req, res)=> {
       res.json(req.project)
    }) 
    
    router.post('/', validateProject, validateProjectId, (req, res, next)=> {
        const {name, description } = req.body
     console.log("stringy",name, description) 
    //    if(!name || !description){
             
    //          res.status(400).json({
    //           message: "Please provide name and description"
    //     })
    //      } else{ 
    //          Projects.insert({name, description})
    //          .then(({})=>{
    //              const project = Projects.get(id);
    //              console.log(project,name, description)
    //              return project.then(project =>{
    //                  res.status(201).json(project)
    //              })
    //          })
    //          .catch(err => {
    //              res.status(500).json({
    //             message: "There was an error while saving the project to the database",
    //             err: err.message,
    //             stack: err.stack,
    //          })
    //         })
    //    }
    }) 
    router.delete('/:id', async (req, res)=> {
        try{
            await Projects.remove(req.params.id)
            res.json(req.user)
          } catch(err){
            res.status(404).json({
                message:"Proj with specified Id not found"
            })
          }
    })
    module.exports = router