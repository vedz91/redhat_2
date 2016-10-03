var assert = require ('assert'),
    q1 = require('../question/1.js'),
    q2 = require('../question/2.js');


describe('Question 1', function() {
    it('when doThing returns no error', function(done) {

        q1.foo(function(err, res){
            console.log('Done!. err=', err, ' : res = ', res);
            assert.equal(err, null);
            assert.equal(res, "result")
            done()
        });

    });

    it('when doThing returns error', function(done) {

        q1.error = "error";
        q1.result = null;
        q1.foo(function(err, res){
            console.log('Done!. err=', err, ' : res = ', res);
            assert.equal(err, 'error');
            assert.equal(res, null)
            done()
        });

    });
});


describe('Question 2', function () {
    it('should return correct answer',function (done) {
        q2.remoteMathService(function(err, answer) {
            if (err) console.log("error ", err);
            if (answer !== 3) {
                console.log("wrong answer", answer);
            } else {
                console.log("correct");
            }
            assert.equal(err,null)
            assert.equal(answer,3)
            done()
        });
    })
})