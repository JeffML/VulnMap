var chai = require('chai');
var should = chai.should();

describe("Test of tests", () => {
    it("test1", done => {
        Boolean(true).should.be.ok;
        done();
    });
});