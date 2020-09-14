var expect = require('chai').expect;
const express = require('express');
const app = express();

const index_controller = require('../../controllers/index_controller');


describe('index controller', function () {
    describe('index', function () {
        it('calling index.index should return render function', function (done) {
            var res = index_controller.index;
            expect(res).to.be.a('function');
            done();
        });
    });

});