const Mock = require('mockjs') // 获取mock对象
const domain = 'http://localhost:36039' // 定义默认域名，跟axios中baseURL一致
const code = 200 // 返回的状态码

// 随机生成文章数据
let postData = Mock.mock({
  code,
  'list|8': [
    {
      ids: '@increment(0)',
      name: '@cname()',
      userid: '@id()',
      phone: '@natural(13000000000, 18999999999)',
      time: '@date()',
      text: '@cparagraph(1, 2)',
      city: '@county(true)',
      price: '@integer(100, 2000)',
      bol: '@boolean()',
      email: '@email()'
    }
  ]
})


// console.log(postData)

// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/user-list`, 'get', postData);

// post请求添加数据
Mock.mock(`${domain}/add-user`, 'post', (req)=>{
    console.log(JSON.parse(req.body))
    // req包含拦截请求所有信息，url、type、请求参数
    // 转换成对象类型，在头部添加一个数组元素、
    postData.list.unshift(JSON.parse(req.body))
    // console.log(postData.list)
    return postData.list;
});

// delete删除用户
Mock.mock(`${domain}/delete-user`, 'delete', (req)=>{
    // 思路：根据拦截到的请求id值，删除数据中对应id的user，重新返回回去
    //这里不知道为什么无法正常请求到，
    console.log(req)
});
