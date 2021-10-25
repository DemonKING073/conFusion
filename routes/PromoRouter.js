const express = require('express')

const promoRouter = express.Router()

const mongoose = require('mongoose')
const Promos = require('../models/promotions')

promoRouter.use(express.json())

promoRouter.route('/')
.get((req, res, next) => {
    Promos.find({})
        .then((promos) => {
            res.statusCode = 200
            res.setHeader('Content-Type','application/json')
            res.json(promos)
        }, (err) => next(err))
        .catch((err) => next(err))
})

.post((req, res, next) => {
    Promos.create(req.body)
        .then((promo) => {
            res.statusCode = 200
            res.setHeader('Content-Type','application/json')
            res.json(promo)
        },(err) => next(err))
        .catch((err) => next(err))
})

.put((req, res, next) => {
    res.statusCode = 403
    res.end('PUT operation not suppported on /promotions')
})

.delete((req, res, next) => {
    Promos.deleteMany()
        .then((resp) => {
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.json(resp)
        },(err) => next(err))
        .catch((err) => next(err))
})

promoRouter.route('/:promoId')
.get((req, res, next) => {
    Promos.findById(req.params.promoId)
        .then((promo) => {
            res.statusCode = 200
            res.setHeader('Content-Type','application/json')
            res.json(promo)
        },(err) => next(err))
        .catch((err) => next(err))
})

.post((req, res, next) => {
    res.statusCode = 403
    res.end(`POST operation not supported on promotions/${req.params.promoId}`)
})

.put((req, res, next) => {
    Promos.findByIdAndUpdate(req.params.promoId,{
        $set: req.body
    },{ new: true })
        .then((promo) => {
            res.statusCode = 200
            res.setHeader('Content-Type','application/json')
            res.json(promo)
        },(err) => next(err))
        .catch((err) => next(err))
})

.delete((req, res, next) => {
    Promos.findByIdAndRemove(req.params.promoId)
        .then((resp) => {
            res.statusCode = 200
            res.setHeader('Content-Type','application/json')
            res.json(resp)
        },(err) => next(err))
        .catch((err) => next(err))
})


module.exports = promoRouter