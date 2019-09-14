// 引入mockjs
const Mock = require('mockjs');

// 设置延迟响应，模拟向后端请求数据
Mock.setup({
    timeout: 800, 
});
//拦截Url、这里跟router.js中的baseUrl一致
const apiUrl = 'http://localhost:36039'
//方法一
const dataList2 = Mock.mock({
    'list|11':[
        {
            name:'@cname()',
            id:'@id()'
        }
    ]
})

//方法二
// 获取 mock.Random 对象
// const Random = Mock.Random;

//mock一组数据源
// const dataList1 = function () {
//     let list = [];
//     for (let i = 0; i < 10; i++) {
//         let data = {};
//         data.name = Random.cname()
//         data.id = Random.id()
//         list.push(data)
//     }
//     return {
//         list
//     }
// }


// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(`${apiUrl}/data-list`, 'get', dataList2)
