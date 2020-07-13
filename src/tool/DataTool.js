/*
Created by small peng on 2020/07/13
*/
// 返回参数工具类
class DataTool {
    /*返回参数
    @param {object} 返回参数
    @param errorCode 状态码
    @param data 数据
    @param message 提示
    @returns {object} 结果*/
    static formatData(params) {
        return {
            errorCode: 0,
            data: params.data,
            message: params.message ? params.message : '请求成功',
            ...params
        };
    }
}
export default DataTool;