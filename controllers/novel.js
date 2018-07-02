let mysql = require('mysql');
let config = require('../config/DBConfig');
let pool = mysql.createPool(config.mysql);
let SQL = require('../utils/db/SQL');
exports.getNovelByType = function (req, res) {
    let type = req.body.type;
    console.log(type);
    pool.getConnection(function (err, connection) {
        connection.query(SQL.NovelSql.queryByType,[type],function (err,result) {
            if(result){
                result = {
                    "data": result
                }
            }
            res.json(result);

            // 释放连接
            connection.release();
        });
    });
};

exports.getNovelType = function (req, res) {
    pool.getConnection(function (err, connection) {
        connection.query(SQL.NovelSql.queryNovelType,function (err, result) {

            res.json(result);
            connection.release();
        })
    })
};