const express = require('express')

const dishRouter = express.Router()

dishRouter.use(express.json())

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
})

.get((req, res, next) => {
    res.end('This provide all dishes for you')
})

.post((req, res, next) => {
    res.end(`This is create dish ${req.body.name} with details: ${req.body.description}`)
})

.put((req, res, next) => {
    res.statusCode = 403
    res.end('PUT operation not suppported')
})

.delete((req, res, next) => {
    res.end('Deleting all the dishes!')
})

dishRouter.route('/:dishId')
.get((req, res, next) => {
    res.end(`This provide details of dish ${req.params.dishId}`)
})

.post((req, res, next) => {
    res.statusCode = 403
    res.end(`POST operation not supported on dishes/dishId${req.params.dishId}`)
})

.put((req, res, next) => {
    res.end(`Will update the dish ${req.params.dishId} with name ${req.body.name} and details ${req.body.description}`)
})

.delete((req, res, next) => {
    res.end(`Will delete the dish ${req.params.dishId}`)
})


module.exports = dishRouter