/**
 * Created by vsharma on 10/1/16.
 */
var async = require('async')

module.exports = {

    remoteMathService: function (cb) {
        var one;
        var two;

        var self = this;
        async.parallel({
            one: function (cb) {
                self.callOneService(cb)
            },
            two: function (cb) {
                self.callTwoService(cb)
            }
        },
        function (err, result) {
            console.log(result)
            cb(undefined, result.one + result.two)
        });
    },

    callOneService: function (cb) {
        setTimeout(function () {
            return cb(undefined, 1);
        }, 1000);
    },
    callTwoService: function (cb) {
        setTimeout(function () {
            return cb(undefined, 2);
        }, 1500);
    }
}
