// add middlewares here related to projects
const Projects = require('./projects-model')

function logger(req, res, next){
    const timestamp = new Date().toLocaleString()
    const method = req.method
    const url = req.originalUrl
    console.log(`[${timestamp}] ${method} to ${url}`)
    next()
}

async function validateProjectId(req, res, next) {
    try {
        const project = await Projects.get(req.params.id)
        if(!project){
            res.status(404).json({
                message:"project not found",
            })
        } else{
           res.json(project)
        }
    } catch (err) {
        res.status(500).json({
            message:"Problem finding project",
        })
    }
    next()
}

function validateProject (req, res, next) {
    const {name, description } = req.body
    if(!name || !description){
        res.status(404).json({
            message: "Please provide name and description"
        })
    }
}







module.exports = {
    validateProjectId,
    validateProject,
    logger
}