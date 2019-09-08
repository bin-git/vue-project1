const Mock = require('mockjs');

const data = Mock.mock({
    "data|30": [{ //2条数据
        "name": "@cname", //中文名cname
        "userid": "@id",
        "phone": /^1[3568][1-9]\d{8}/, //电话
        "time": "@datetime",
        "text": "@cparagraph(1, 2)", // (1,2)表示10-20个字？
        'city': '@county(true)', // 随机生成城市
        'price': '@integer(100,2000)',
        "bool|1": true, //1/2几率生成布尔值
    }]
});
Mock.mock('/api/data', data);  //对url为/api/data的ajax请求进行拦截返回data假数据
Mock.mock('/api/data1', () => ({
    data,
}));