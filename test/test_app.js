const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

const assert = chai.assert;
const expect = chai.expect;

describe('request', () => {
    it('should return status 200', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should return 404 error', (done) => {
        chai.request(app)
            .get('/null')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });
});