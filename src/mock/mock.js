const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const domain = 'http://localhost:36039' // 定义默认域名，跟axios中baseURL一致
const code = 200 // 返回的状态码

// 随机生成文章数据
const postData = req => {

  console.log(req) // 请求体，用于获取参数

  let posts = [] // 用于存放文章数据的数组

  for (let i = 0; i < 10; i++) {
    let post = {
      name: Random.cname(),
      userid: Random.id(),
      phone: Random.natural(13000000000,18999999999),
      time: Random.date(),
      text: Random.cparagraph(1, 2),
      city: Random.county(true),
      price: Random.integer(100, 2000),
      bol:Random.boolean(),
      email: Random.email()
    }
    posts.push(post)
  }

  // 返回状态码和文章数据posts
  return {
    code,
    posts
  }
}

// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/posts`, 'get', postData);