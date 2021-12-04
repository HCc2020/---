// 引入封装好的jsonp
import jsonp from './jsonP.js'
// 假设这里为跨域请求当前城市的接口
export function getBedInfo() {
    // 接口地址
    let url = 'http://101.66.252.21:1001/api/lsd/bedDistributed'
    // 所需参数
    let datas = {}
    return jsonp(url, datas, {})
}