const express = require('express')
const config = require('/etc/VulnMap/config')
const fs = require('fs')
const fetch = require('node-fetch')
const csvParse = require('csv').parse

const convertToArrays = (csv) => {
    return new Promise((resolve, reject) => {
        csvParse(csv, {
            comment: '#'
        }, function(err, data) {
            err ?
                reject(err) :
                resolve(data)
        })
    })
}

const getShunList = function() {
    const accountKey = config.AutoShun && config.AutoShun.accountKey

    return new Promise((resolve, reject) => {
        const useCached = () => {
            const csv = fs.readFileSync('./src/server/shunlist.csv').toString();
            return convertToArrays(csv)
        }

        if (accountKey) {
            fetch(`https://www.autoshun.org/download/?api_key=${accountKey}&format=csv`)
                .then(res => res.text())
                .then(body => {
                    if (body.length) {
                        return convertToArrays(body)
                    } else {
                        return useCached()
                    }
                })
                .then(json => resolve(json))
                .catch(e => reject(e))
        } else {
            useCached();
        }
    })
}

const router = express.Router()

router.get('/shunList', (req, res) => {
    getShunList()
        .then(json => res.send(json))
        .catch(e => {
            console.error(e);
            res.status(500).end()
        })
})

module.exports = router;