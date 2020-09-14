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
        it('calling index.index should return render function', function (done) {
            expect(index_controller.index).to.be.a('function');
            done();
        });
        it('calling index should render index', function () {
            var res = Res_object;
            index_controller.index(null, res);
            expect(res.template).to.be.equal('index');
        });
    });
    describe('about', function () {
        it('calling index.about should return render function', function (done) {
            var res = index_controller.index;
            expect(res).to.be.a('function');
            done();
        });
        it('calling about should render about', function () {
            var res = Res_object;
            index_controller.about(null, res);
            expect(res.template).to.be.equal('about');
        });
    });

});