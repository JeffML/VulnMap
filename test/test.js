var chai = require('chai');
var should = chai.should();
var services = require('../src/server/services')
var fetch = require('node-fetch')

describe("Test of tests", () => {
    it("test1", done => {
        Boolean(true).should.be.ok;
        done();
    });
});

describe("Unit tests", () => {
    it("getShunList", done => {
        services.getShunList()
            .then(list => {
                should.exist(list)
                list.should.have.lengthOf(500)
                done()
            }).catch(e => done(e))
    }).timeout(5000);

    it("getGeoIp", done => {
        services.getGeoIp("108.76.138.179")
            .then(geo => {
                should.exist(geo)
                geo.country_code.should.eql("US")
                geo.region_code.should.eql("MS")
                geo.city.should.eql("Biloxi")
                geo.zip.should.eql('39530')
                done()
            }).catch(e => done(e))
    }).timeout(10000);
});

describe("Service tests", () => {

    before(function() {
        if (process.env.TRAVIS) {
            this.skip();
        }
    })

    it("/shunList", done => {
        fetch('http://localhost:3000/service/shunList')
            .then(res => res.json())
            .then(list => {
                should.exist(list)
                list.should.have.lengthOf(500)
                done()
            }).catch(e => done(e))
    }).timeout(10000)

    it("/geoIp", done => {
        fetch('http://localhost:3000/service/geoIp?ip=108.76.138.179')
            .then(res => res.json())
            .then(geo => {
                should.exist(geo)
                geo.country_code.should.eql("US")
                geo.region_code.should.eql("MS")
                geo.city.should.eql("Biloxi")
                geo.zip.should.eql('39530')
                done()
            })
            .catch(e => done(e))
    })
})