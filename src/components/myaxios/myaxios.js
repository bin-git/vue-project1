import axios from 'axios'
var myaxios = {}
myaxios.install = function (Vue) {
    var axiosObj = axios.create({
        baseURL: 'http://localhost:36039'    //mock模拟接口
        // baseURL: 'https://www.easy-mock.com/mock/5d5b625dffa5af3e80503189/bin'
    })
    Vue.prototype.$http = axiosObj;
}
export default myaxios


//下方使用baseURL，目前easy-mock不稳定，所以使用mock.js模拟数据
// myaxios.install = function (Vue) {
//     var axiosObj = axios.create({
//         baseURL: 'https://www.easy-mock.com/mock/5d5b625dffa5af3e80503189/bin/'
//     })
//     Vue.prototype.$http = axiosObj;
// }


//第二种方法
// import Vue from 'vue'
// import axios from 'axios'

// const http = {
//     install(){
//         Vue.prototype.axios = axios;
//     }
// };

// export default http