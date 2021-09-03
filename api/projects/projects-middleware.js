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
// `[POST] /api/projects`
  //- Returns the newly created project as the body of the response.
 // - If the request body is missing any of the required fields it responds with a status code 400.
//[ ] `[PUT] /api/projects/:id`
  //- Returns the updated project as the body of the response.
  //- If there is no project with the given `id` it responds with a status code 404.
  //- If the request body is missing any of the required fields it responds with a status code 400.
function validateProject (req, res, next) {
    const {name, description } = req.body
    console.log('h',name, description)    
    if(!name || !description || name.trim() || description.trim()){
        res.status(400).json({
            message: "Please provide name and description"
        })
    } else{
        req.name = name.trim()
        req.description = description.trim()
        next()
    }
}







module.exports = {
    validateProjectId,
    validateProject,
    logger
}