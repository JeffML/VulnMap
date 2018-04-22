const express = require('express')
const services = require('./services')

const getShunList = services.getShunList
const getGeoIp = services.getGeoIp

const router = express.Router()

router.get('/shunList', (req, res) => {
    getShunList()
        .then(json => res.send(json))
        .catch(e => {
            console.error(e);
            res.status(500).end()
        })
})

router.get('/geoIp', (req, res) => {
    getGeoIp(req.query.ip)
        .then(geo => res.send(geo))
})

module.exports = router;