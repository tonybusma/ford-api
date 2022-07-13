const expect = require("chai").expect;
const request = require("request");
describe('Teste da API Ford', function() {
    describe('Status e conteudo', function() {
     it('Conteudo', function(done) {
        request("http://localhost:3000", function(err, res, body) { 
        var test = "route / does not exists!";
        expect(test).to.be.a("String");   
        done();
      });
     });
    it('Status', function(done) {
     request("http://localhost:3000", function(err, res, body) { 
     expect(res.statusCode).to.equal(404);   
      done();
   });
   });
  
    });
   });