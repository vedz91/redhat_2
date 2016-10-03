/**
 * Created by vsharma on 10/1/16.
 */
// doThing() defined elsewhere

module.exports = {
    error : null,
    result: "result",

    doThing: function(cb){
        cb(this.error, this. result)
    },

    foo: function(callback) {
        this.doThing(function(err, res) {
            if (err) return callback(err);
            callback(null, res);
        });
    }
}