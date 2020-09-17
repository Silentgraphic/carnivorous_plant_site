const expect = require('chai').expect;
const rewire = require('rewire');

const growing_cps_controller = rewire('../../controllers/growing_cps_controller');

describe('growing plants controller', function () {
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
    describe('growing plants', function () {
        it('calling .growing_plants should return render function', function (done) {
            expect(growing_cps_controller.growing_plants).to.be.a('function');
            done();
        });
        it('calling growing_plants should render growing_cps', function () {
            var res = Res_object;
            growing_cps_controller.growing_plants(null, res);
            expect(res.template).to.be.equal('growing_cps');
        });
    });
    
    describe('enviroment', function () {
        it('calling .enviroment should return render function', function (done) {
            expect(growing_cps_controller.enviroment).to.be.a('function');
            done();
        });
        it('calling enviroment should render enviroment', function () {
            var res = Res_object;
            growing_cps_controller.enviroment(null, res);
            expect(res.template).to.be.equal('enviroment');
        });
    });

    describe('propagation', function () {
        it('calling .propagation should return render function', function (done) {
            expect(growing_cps_controller.propagation).to.be.a('function');
            done();
        });
        it('calling propagation should render propagation', function () {
            var res = Res_object;
            growing_cps_controller.propagation(null, res);
            expect(res.template).to.be.equal('propagation');
        });
    });
    
    describe('soils', function () {
        it('calling .soils should return render function', function (done) {
            expect(growing_cps_controller.soils).to.be.a('function');
            done();
        });
        it('calling soils should render soils', function () {
            var res = Res_object;
            growing_cps_controller.soils(null, res);
            expect(res.template).to.be.equal('soils');
        });
    });
    
    describe('water', function () {
        it('calling .water should return render function', function (done) {
            expect(growing_cps_controller.water).to.be.a('function');
            done();
        });
        it('calling water should render water', function () {
            var res = Res_object;
            growing_cps_controller.water(null, res);
            expect(res.template).to.be.equal('water');
        });
    });
    
    describe('light', function () {
        it('calling .light should return render function', function (done) {
            expect(growing_cps_controller.light).to.be.a('function');
            done();
        });
        it('calling light should render light', function () {
            var res = Res_object;
            growing_cps_controller.light(null, res);
            expect(res.template).to.be.equal('light');
        });
    });
    
    describe('feeding', function () {
        it('calling .feeding should return render function', function (done) {
            expect(growing_cps_controller.feeding).to.be.a('function');
            done();
        });
        it('calling feeding should render feeding', function () {
            var res = Res_object;
            growing_cps_controller.feeding(null, res);
            expect(res.template).to.be.equal('feeding');
        });
    });
    
    describe('pests', function () {
        it('calling .pests should return render function', function (done) {
            expect(growing_cps_controller.pests).to.be.a('function');
            done();
        });
        it('calling pests should render pests', function () {
            var res = Res_object;
            growing_cps_controller.pests(null, res);
            expect(res.template).to.be.equal('pests');
        });
    });
    
});