const MongoClient = require('mongodb').MongoClient;//创建客户端
const url = 'mongodb://localhost:27017';//地址

const dbName = 'wcon';//要操作的库名

MongoClient.connect(url,function (err,client) {//连接客户端
    const db=client.db(dbName);//连接数据库
    const collection = db.collection('hotgoods');//连接要操作的集合名字




    // collection.updateOne({'p':'1020'},{$set:{'sl':1}},function (err,res) {
    //     if (err) throw err;
    //     console.log(res.result.nModified + " 文档更新");
    // });

    // collection.find({}).toArray(function (err,resluts) {
    //     console.log(resluts);
    // })

    // collection.deleteMany({});

    // collection.insertMany([
    //     {"product_id": "341184", "image_url2": "http://img01.wconceptimg.cn/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/w/i/wimg_450792615_3664659.jpg","image_url1":"http://img01.wconceptimg.cn/media/catalog/product/w/i/wimg_450792615_3664660.jpg", "image_url0":"http://img01.wconceptimg.cn/media/catalog/product/w/i/wimg_450792615_3664659.jpg","image_url3":"http://img01.wconceptimg.cn/media/catalog/product/w/i/wimg_450792615_3664662.jpg","brand_name": "HACKESCH", "name": "纯色飘带女士雪纺衬衫_白色", "final_price": "¥ 1,204"},
    //
    //     {"product_id": "356966", "image_url0": "http://img01.wconceptimg.cn/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/t/p/tp1012_01_1.jpg", "brand_name": "ANDERSSON BELL", "name": "[知名博主水妖vv 原款] 情侣款香味绿箭口香糖宽松连帽卫衣_白色","image_url1":"http://img01.wconceptimg.cn/media/catalog/product/t/p/tp1012_03_1.jpg","image_url2":"http://img01.wconceptimg.cn/media/catalog/product/t/p/tp1012_02_1.jpg","image_url3":"http://img01.wconceptimg.cn/media/catalog/product/t/p/tp1012_03_1.jpg",  "final_price": "¥ 571"},
    //
    //     {"product_id": "306004", "image_url0": "http://img01.wconceptimg.cn/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/3/2/329snk.jpg","brand_name": "HOWL", "name": "[知名博主小章鱼大丸纸原款]高领宽松落肩纯色男女同款针织衫_棕色", "final_price": "¥ 983"},
    //
    //     {"product_id": "314968", "image_url0": "http://img01.wconceptimg.cn/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/w/i/wimg_450805128_3738852.jpg", "brand_name": "MONTS", "name": "半高领柔肤蕾丝微喇长袖女士衬衫_白色", "final_price": "¥ 1,093"},
    //
    //     {"product_id": "318579", "image_url0": "http://img01.wconceptimg.cn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/i/wimg_450805129_3738926.jpg", "brand_name": "DOUGH", "name": "[时尚博主晚晚学姐原款]方头圆形粗高跟拼色真皮后拉链短靴_黑色+淡黄色", "final_price": "¥ 1,270"},
    //
    //     {"product_id": "315782", "image_url0": "http://img01.wconceptimg.cn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/i/wimg_450801063_3720825.jpg", "brand_name": "SALONDEJU", "name": "方头拼接鞋面圆形粗高跟绒面短靴_藏青色", "final_price": "¥ 1,306"},
    //
    //     {"product_id": "76280", "image_url0": "http://img01.wconceptimg.cn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/i/wimg_450787102_3921977.jpg", "brand_name": "RACHEL COX", "name": "［周子瑜;申惠晶 明星原款］搭扣装饰松紧带拼接低跟牛皮短靴_黑色/酒红色/白色", "final_price": "¥ 1,299"},
    //
    //     {"product_id": "314824", "image_url0": "http://img01.wconceptimg.cn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/2/1245_1.jpg", "brand_name": "MENODEMOSSO", "name": "[陈苍苍,Sonya,小章鱼大丸纸原款]方头方根拼色牛皮短靴_棕色+白色", "final_price": "¥ 1,956"},
    //
    //     {"product_id": "314977", "image_url0": "http://img01.wconceptimg.cn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/-/_-1_36_1.jpg","image_url1":"http://img01.wconceptimg.cn/media/wysiwyg/WechatIMG1384.jpeg","image_url2":"http://img01.wconceptimg.cn/media/catalog/product/6/5/65dh.jpg","image_url3":"http://img01.wconceptimg.cn/media/catalog/product/e/n/enor213.jpg", "brand_name": "MENODEMOSSO", "name": "[裴秀智,金素妍 明星原款] 鞋跟拼色方头粗高跟真皮短靴_黑色+红色", "final_price": "¥ 1,139"},
    //
    //     {"product_id": "356774", "image_url0": "http://img01.wconceptimg.cn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/S/i/Simg_LHOAFW17DJ1063PNK15122880457914.jpg.jpg", "brand_name": "TAGTRAUME", "name": "方头内侧拉链粗中跟短靴_棕色格纹", "final_price": "¥ 395"},
    //
    //
    //     {"product_id": "341184", "image_url0": "http://img01.wconceptimg.cn/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/w/i/wimg_450792615_3664659.jpg", "brand_name": "HACKESCH", "name": "纯色飘带女士雪纺衬衫_白色", "final_price": "¥ 1,204"},
    //
    //     {"product_id": "356966", "image_url0": "http://img01.wconceptimg.cn/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/3/2/329snk.jpg", "brand_name": "ANDERSSON BELL", "name": "[知名博主小章鱼大丸纸原款]高领宽松落肩纯色男女同款针织衫_棕色", "final_price": "¥ 571"},
    //
    //     {"product_id": "306004", "image_url0": "http://img01.wconceptimg.cn/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/t/p/tp1012_01_1.jpg", "brand_name": "HOWL", "name": "[知名博主水妖vv 原款] 情侣款香味绿箭口香糖宽松连帽卫衣_白色", "final_price": "¥ 983"},
    //
    //     {"product_id": "314968", "image_url0": "http://img01.wconceptimg.cn/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/w/i/wimg_450805128_3738852.jpg", "brand_name": "MONTS", "name": "半高领柔肤蕾丝微喇长袖女士衬衫_白色", "final_price": "¥ 1,093"},
    //
    //     {"product_id": "318579", "image_url0": "http://img01.wconceptimg.cn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/i/wimg_450805129_3738926.jpg", "brand_name": "DOUGH", "name": "[时尚博主晚晚学姐原款]方头圆形粗高跟拼色真皮后拉链短靴_黑色+淡黄色", "final_price": "¥ 1,270"},
    //
    //     {"product_id": "315782", "image_url0": "http://img01.wconceptimg.cn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/i/wimg_450801063_3720825.jpg", "brand_name": "SALONDEJU", "name": "方头拼接鞋面圆形粗高跟绒面短靴_藏青色", "final_price": "¥ 1,306"},
    //
    //     {"product_id": "76280", "image_url0": "http://img01.wconceptimg.cn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/i/wimg_450787102_3921977.jpg", "brand_name": "RACHEL COX", "name": "［周子瑜;申惠晶 明星原款］搭扣装饰松紧带拼接低跟牛皮短靴_黑色/酒红色/白色", "final_price": "¥ 1,299"},
    //
    //     {"product_id": "314824", "image_url0": "http://img01.wconceptimg.cn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/2/1245_1.jpg", "brand_name": "MENODEMOSSO", "name": "[陈苍苍,Sonya,小章鱼大丸纸原款]方头方根拼色牛皮短靴_棕色+白色", "final_price": "¥ 1,956"},
    //
    //     {"product_id": "356774", "image_url0": "http://img01.wconceptimg.cn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/S/i/Simg_LHOAFW17DJ1063PNK15122880457914.jpg.jpg", "brand_name": "TAGTRAUME", "name": "方头内侧拉链粗中跟短靴_棕色格纹", "final_price": "¥ 395"},
    //
    //     {"product_id": "314977", "image_url0": "http://img01.wconceptimg.cn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/-/_-1_36_1.jpg", "brand_name": "MENODEMOSSO", "name": "[裴秀智,金素妍 明星原款] 鞋跟拼色方头粗高跟真皮短靴_黑色+红色", "final_price": "¥ 1,139"}
    // ]);


});