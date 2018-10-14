'use stricts'

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

//var server = require('../../server');

chai.use(chaiHttp);
const url= 'http://localhost:3000';

describe('Track Route', function() {
  describe('POST Track', function() {
    before(function() {
      console.log("POST Track before, Create test Movie if not exist");
      console.log("POST Track before, delete test Track if exist");
    });
    it('Should create a valid track to an existing movie', (done) => {
      chai.request(url)
      .post('/track')
      .send({name:"Now we are free",startTime:5000,endTime:9000,movieId:"5bc24229183d66268496f8a8"})
      .end( function(err,res) {
        expect(res).to.have.status(200);
        done();
      });
    });
    it('Should not create a duplicated track', (done) => {
      chai.request(url)
      .post('/track')
      .send({name:"Now we are free",startTime:5000,endTime:9000,movieId:"5bc24229183d66268496f8a8"})
      .end( function(err,res) {
        expect(res).to.have.status(400);
        done();
      });
    });
    it('Should not create a track without name', (done) => {
      chai.request(url)
      .post('/track')
      .send({startTime:10000,endTime:12000,movieId:"5bc24229183d66268496f8a8"})
      .end( function(err,res) {
        expect(res).to.have.status(400);
        expect(res.text).to.contain('The track must have a name');
        done();
      });
    });
    it('Should not create a track without an existing movie', (done) => {
      chai.request(url)
      .post('/track')
      .send({name:"The Emperor Is Dead",startTime:5000,endTime:9000,movieId:"5bc24229183d66268496f8aa"})
      .end( function(err,res) {
        expect(res).to.have.status(400);
        expect(res.text).to.contain('The track must be associated with a movie');
        done();
      });
    });
    it('Should not create a track without start time', (done) => {
      chai.request(url)
      .post('/track')
      .send({name:"Strength and Honor",endTime:2000,movieId:"5bc24229183d66268496f8a8"})
      .end( function(err,res) {
        expect(res).to.have.status(400);
        expect(res.text).to.contain('The track must have a start time');
        done();
      });
    });
    it('Should not create a track without end time', (done) => {
      chai.request(url)
      .post('/track')
      .send({name:"Honor Him",startTime:1000,movieId:"5bc24229183d66268496f8a8"})
      .end( function(err,res) {
        expect(res).to.have.status(400);
        expect(res.text).to.contain('The track must have a end time');
        done();
      });
    });
    it('Should not create a track with end time minor that start time', (done) => {
      chai.request(url)
      .post('/track')
      .send({name:"Am I Not Merciful?",startTime:3000,endTime:2000,movieId:"5bc24229183d66268496f8a8"})
      .end( function(err,res) {
        expect(res).to.have.status(400);
        done();
      });
    });
  });
});
