'use stricts'

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';

describe('Licensing Route', function() {
  describe('POST Licensing', function() {
    before(function() {
      console.log("POST Licensing before, Create test Track if not exist");
      console.log("POST Licensing before, Create test Song if not exist");
      console.log("POST Licensing before, delete test Licensing if exist");
    });
    it('Should create a valid licensing to an existing track and song', (done) => {
      chai.request(url)
      .post('/licensing')
      .send({status:"INITIAL", trackId:"5bc24229183d66268496f8a8", songId:"5bc24229183d66268496f8a8"})
      .end( function(err,res) {
        expect(res).to.have.status(200);
        done();
      });
    });
    it('Should not create a duplicated licensing', (done) => {
      chai.request(url)
      .post('/licensing')
      .send({status:"INITIAL", trackId:"5bc24229183d66268496f8a8", songId:"5bc24229183d66268496f8a8"})
      .end( function(err,res) {
        expect(res).to.have.status(400);
        done();
      });
    });
    it('Should not create a licensing without status', (done) => {
      chai.request(url)
      .post('/licensing')
      .send({trackId:"5bc24229183d66268496f8a8", songId:"5bc24229183d66268496f8a8"})
      .end( function(err,res) {
        expect(res).to.have.status(400);
        expect(res.text).to.contain('The licensing must have a status');
        done();
      });
    });
    it('Should not create a licensing without an existing track', (done) => {
      chai.request(url)
      .post('/licensing')
      .send({status:"INITIAL", trackId:"5bc24229183d66268496f8a8", songId:"5bc24229183d66268496aaaa"})
      .end( function(err,res) {
        expect(res).to.have.status(400);
        expect(res.text).to.contain('The licensing must be associated with a track');
        done();
      });
    });
    it('Should not create a licensing without an existing song', (done) => {
      chai.request(url)
      .post('/licensing')
      .send({status:"INITIAL", trackId:"5bc24229183d66268496f8a8", songId:"5bc24229183d66268496aaaa"})
      .end( function(err,res) {
        expect(res).to.have.status(400);
        expect(res.text).to.contain('The licensing must be associated with a song');
        done();
      });
    });
  });
});
