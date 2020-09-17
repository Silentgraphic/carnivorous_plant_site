const expect = require('chai').expect;
const rewire = require('rewire');


const index_controller = rewire('../../controllers/index_controller');

describe('index controller', function () {
    var Res_object;

    before(function () {
        Res_object = {
            template: null,
            options: null,
            render: function (template, options) {
                this.template = template;
                this.options = options;
            }
        };
    });
    describe('index', function () {
        it('calling .index should return render function', function (done) {
            expect(index_controller.index).to.be.a('function');
            done();
        });
        it('calling index should render index', function () {
            var res = Res_object;
            index_controller.index(null, res);
            expect(res.template).to.be.equal('index');
        });
        it('calling index should return a title', function () {
            var res = Res_object;
            index_controller.index(null, res);
            expect(res.options).to.be.not.undefined;
        });
    });
    describe('about', function () {
        it('calling .about should return render function', function (done) {
            expect(index_controller.about).to.be.a('function');
            done();
        });
        it('calling about should render about', function () {
            var res = Res_object;
            index_controller.about(null, res);
            expect(res.template).to.be.equal('about');
        });
    });

});