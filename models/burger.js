var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burger", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers_name", cal, vals, function(res) {
            cb(res);
        });

    },
    update: function(objColVals, condition, cb) {
        orm.update("cats", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;