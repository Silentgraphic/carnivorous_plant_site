const expect = require('chai').expect;
const rewire = require('rewire');
const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);

const cp_plants_controller = rewire('../../controllers/cp_plants_controller');

describe('plants controller', function () {
    var Req_object;
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
        Req_object = {
            params: { plant_name: null },
        };
        //Remove sanitizer as it an external dependency that doesn't need testing
        cp_plants_controller.plants_info = cp_plants_controller.plants_info.splice(1);
        console.log(cp_plants_controller.plants_info);
    });
    describe('plants', function () {
        it('calling .plants_home should return render function', function (done) {
            expect(cp_plants_controller.plants_home).to.be.a('function');
            done();
        });

        it('calling .plants_home should render cp_plants_home', function () {
            var res = Res_object;
            cp_plants_controller.plants_home(null, res);
            expect(res.template).to.be.equal('cp_plants_home');
        });
    });
    describe('plants info', function () {
        describe('plants_info should be an array of callback functions', function () {
            it('calling .plants_info should return array of callbacks', function (done) {
                expect(cp_plants_controller.plants_info).to.be.an('array');
                done();
            });
            it('elements of the array are fucntions', function (done) {
                cp_plants_controller.plants_info.forEach(element => {
                    expect(element).to.be.a('function');
                });
                done();
            });
        });

        it("calling .plants_info without a plant name should result in an error", function (done) {
            expect(() => { cp_plants_controller.plants_info(null, Res_object); }).to.throw();
            done();
        });

        it('calling .plants_info should render plant_info_layout', function () {
            var res = Res_object;
            var req = Req_object;
            cp_plants_controller.plants_info(req, res);
            expect(res.template).to.be.equal('plant_info_layout');
        });
    });

});