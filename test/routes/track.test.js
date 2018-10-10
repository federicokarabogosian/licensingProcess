'use stricts'

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

var server = require('../../server');

chai.use(chaiHttp);
const url= 'http://localhost:3000';

describe('Track Route', function() {
  describe('POST Track', function() {
    it('Should create a valid track to an existing movie')
    it('Should not create a duplicated track')
    it('Should not create a track without name')
    it('Should not create a track without an existing movie')
    it('Should not create a track without start time')
    it('Should not create a track without end time')
  })
})
