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
    var accountKey = process.env.AUTOSHUN_ACCOUNT_KEY;
    if (!accountKey) {
        const config = require('/etc/VulnMap/config');
        accountKey = config.AutoShun && config.AutoShun.accountKey
    }

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
            return useCached();
        }
    })
}

const getGeoIp = function(ip) {
    return new Promise((resolve, reject) => {
        var access_key = process.env.GEO_IP_ACCESS_KEY
        if (!access_key) {
            const config = require('/etc/VulnMap/config');
            access_key = config.geoIp && config.geoIp.accessKey;
        }

        if (!access_key) {
            reject(new Error("no geo ip accessKey"))
        } else {
            const url = `http://api.ipstack.com/${ip}?access_key=${access_key}&format=1`;
            fetch(url)
                .then(res => res.json())
                .then(geo => resolve(geo))
                .catch(e => reject(e))
        }
    });
}

exports.getShunList = getShunList
exports.getGeoIp = getGeoIp