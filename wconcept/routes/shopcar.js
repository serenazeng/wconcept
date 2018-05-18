var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoCt = mongodb.MongoClient; //创建客户端
var address = 'mongodb://localhost:27017'; //地址
var database = 'wcon';
/* GET home page. */
router.get('/', function(req, res, next) {
	// 兜库->返回给前端(send,write)
	mongoCt.connect(address, (err, client) => {
		if(err) {
			res.send('error index').status(500);
		} else {
			//链库
			var db = client.db(database); //库 db
			var hotgoods = db.collection('hotgoods'); //表
			console.log(req.query);
			// hotgoods.find({'product_id':req.query.id}).toArray(function (err,rese) {
			//     console.log(rese,111);
			// })
			hotgoods.find({
				'product_id': req.query.id
			}).toArray(function(err, res) {
				hotgoods.updateOne({
					'product_id': req.query.id
				}, {
					$set: {
						'number': (req.query.number - 0)
					}
				}, function(err, res) {
					if(err) {
						throw err;
					} else {
						console.log(res.result.nModified + " 条文档被更新");
					}

				});
			});
			res.end();

		}
	});
});

module.exports = router;