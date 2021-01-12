var connection = require("../config/connection.js");

var orm = {
    // The last variable cb represents the anonymous function being passed from server.js
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (tableName, colName, burgerName, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableName, colName, burgerName], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (tableName, colName, burgerName, isDevoured, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [tableName, colName, burgerName, isDevoured, cb], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },



};

module.exports = orm;
