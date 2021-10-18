const express = require('express')

const leaderRouter = express.Router()

leaderRouter.use(express.json())

leaderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
})

.get((req, res, next) => {
    res.end('This provide all leaders for you')
})

.post((req, res, next) => {
    res.end(`This is create leader with name: ${req.body.name} and details: ${req.body.description}`)
})

.put((req, res, next) => {
    res.statusCode = 403
    res.end('PUT operation not suppported')
})

.delete((req, res, next) => {
    res.end('Deleting all the leaders!')
})

leaderRouter.route('/:leaderId')
.get((req, res, next) => {
    res.end(`This provide details of leader ${req.params.leaderId}`)
})

.post((req, res, next) => {
    res.statusCode = 403
    res.end(`POST operation not supported on leader/leaderId${req.params.leaderId}`)
})

.put((req, res, next) => {
    res.end(`Will update the leader ${req.params.leaderId} with name ${req.body.name} and details ${req.body.description}`)
})

.delete((req, res, next) => {
    res.end(`Will delete the leader ${req.params.leaderId}`)
})


module.exports = leaderRouter