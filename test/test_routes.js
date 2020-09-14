const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

const assert = chai.assert;
const expect = chai.expect;


//Integration tests
describe('routing', function () {

    var requester;

    before('open server request', function () {
        requester = chai.request(app).keepOpen();
    });

    after('close request', function () {
        requester.close();
    });

    describe('index', function () {
        it('/ should return status 200', function (done) {
            requester
                .get('/')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });

        it('should return a HTML page', function (done) {
            requester
                .get('/')
                .end((err, res) => {
                    expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
                    done();
                });
        });

        it('/null should return 404 error', function (done) {
            requester
                .get('/null')
                .end((err, res) => {
                    expect(res).to.have.status(404);
                    done();
                });
        });
    });

    describe('plants', function () {
        it('/plants should return status 200', function (done) {
            requester
                .get('/plants')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });

        it('should return a HTML page', function (done) {
            requester
                .get('/plants')
                .end((err, res) => {
                    expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
                    done();
                });
        });

        it('/null should return 404 error', function (done) {
            requester
                .get('/null')
                .end((err, res) => {
                    expect(res).to.have.status(404);
                    done();
                });
        });
    });

    describe('growing plants', function () {
        it('/growingplants should return status 200', function (done) {
            requester
                .get('/growingplants')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });

        it('should return a HTML page', function (done) {
            requester
                .get('/growingplants')
                .end((err, res) => {
                    expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
                    done();
                });
        });

        it('/null should return 404 error', function (done) {
            requester
                .get('/null')
                .end((err, res) => {
                    expect(res).to.have.status(404);
                    done();
                });
        });
    });
});