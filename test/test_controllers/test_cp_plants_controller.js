const expect = require('chai').expect;
const rewire = require('rewire');
const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);

const cp_plants_controller = rewire('../../controllers/cp_plants_controller');

describe('plants controller', function () {
    //Setup a response object constructor
    function Res_object() {
        this.template = null,
            this.options = null,
            this.render = function (template, options) {
                this.template = template;
                this.options = options;
            };
    };

    //Setup a request object
    function Req_object() {
        this.params = { plant_name: null };
    };

    var Render_vars;

    before(function () {
        //Remove sanitizer as it an external dependency that doesn't need testing
        cp_plants_controller.plants_info = cp_plants_controller.plants_info.splice(1);

        //Setup variables for rendering
        Render_vars = {
            title: 'title',
            plant_text: 'text',
            images: ['/image/location1', '/image/location1']
        };
    });
    describe('plants', function () {
        it('calling .plants_home should return render function', function (done) {
            expect(cp_plants_controller.plants_home).to.be.a('function');
            done();
        });

        it('calling .plants_home should render cp_plants_home', function () {
            let res = new Res_object();
            cp_plants_controller.plants_home(null, res);
            expect(res.template).to.be.equal('cp_plants_home');
        });
    });
    describe('plants info', function () {
        describe('plants_info callback array', function () {
            it('calling .plants_info should return an array', function (done) {
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

        it("calling .plants_info without a request should result in an error", function (done) {
            expect(() => { cp_plants_controller.plants_info[1](null, new Res_object()); }).to.throw();
            done();
        });
        describe('Response object', function () {
            let res;
            let req;

            before(function () {
                cp_plants_controller.__set__("render_info", Render_vars);
            });

            beforeEach('set up res', function () {
                res = new Res_object();
                req = new Req_object();
            });

            afterEach(function () {
                res = null;
                req = null;
            });
            it('calling .plants_info should render plant_info_layout', function () {
                cp_plants_controller.plants_info[1](req, res);
                expect(res.template).to.be.equal('plant_info_layout');
            });

            it('.title should be a string', function () {
                cp_plants_controller.plants_info[1](req, res);
                expect(res.options.title).to.be.a('string');

            });

            it('.text should be a string', function () {
                cp_plants_controller.plants_info[1](req, res);
                expect(res.options.plant_text).to.be.a('string');
            });
            it('.images should be a array', function () {
                cp_plants_controller.plants_info[1](req, res);
                expect(res.options.plant_image).to.be.an('array');
            }
            );
        });
    });
    describe('plant_info_database_callback', function () {
        let plant_info_database_callback = cp_plants_controller.__get__("plants_info_database_callback");

        it('should throw database error if passed one', function () {
            expect(() => { plant_info_database_callback(new Error('Database error')); }).to.throw('Database error');
        });

        it('should throw error if handed no value', function () {
            expect(() => { plant_info_database_callback(null, null); }).to.throw('No plant named that');
        });

        it('should call set_render_info', function (done) {

            //Test for some reason always returns undefined if set as return value hence this awful code
            let test_var;

            function set_render_info(plant) {
                test_var = 'test';
            };

            plant_info_database_callback(null, 'test', set_render_info);

            expect(test_var).to.be.string('test');
            done();
        });
    });
});