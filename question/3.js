/**
 * Created by vsharma on 10/1/16.
 */
// This is a mock database implementation with just a connect function
// db.connect will need to be called a total of 10 times before it successfully
var counter = 0;

var db = {

    connect: function(cb) {

        console.log('connection attempt', counter + 1);

        if (counter < 9) {

            counter++;

            return cb('db not ready yet');

        }
        return cb();
    }
};
// Try to connect, log a successful connection & exit
// If we fail to connect, log an error and return

//wrapping in a function
var x = function() {
    db.connect(function (err) {
        if (err) {
            x();
            return;
        }
        console.log('successfully connected!');
    });
}

x();
