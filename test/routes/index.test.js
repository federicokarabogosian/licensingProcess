'use stricts'

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

//var server = require('../../server');

chai.use(chaiHttp);
const url= 'http://localhost:3000';

describe('Index Route', function() {
  describe('GET Index', function() {
    it('Should get a response from index page', (done) => {
      chai.request(url)
      .get('/')
      .end( function(err,res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        done();
      })
    })
  })
})
