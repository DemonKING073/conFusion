const express = require('express')

const promoRouter = express.Router()

promoRouter.use(express.json())

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
})

.get((req, res, next) => {
    res.end('This provide all promotions for you')
})

.post((req, res, next) => {
    res.end(`This is create promotion with name: ${req.body.name} and details: ${req.body.description}`)
})

.put((req, res, next) => {
    res.statusCode = 403
    res.end('PUT operation not suppported')
})

.delete((req, res, next) => {
    res.end('Deleting all the promotions!')
})

promoRouter.route('/:promoId')
.get((req, res, next) => {
    res.end(`This provide details of promotions ${req.params.promoId}`)
})

.post((req, res, next) => {
    res.statusCode = 403
    res.end(`POST operation not supported on promo/promoId/${req.params.promoId}`)
})

.put((req, res, next) => {
    res.end(`Will update the promotions ${req.params.promoId} with name ${req.body.name} and details ${req.body.description}`)
})

.delete((req, res, next) => {
    res.end(`Will delete the promotion ${req.params.promoId}`)
})


module.exports = promoRouter