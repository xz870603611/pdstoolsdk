/*
Created by small peng on 2020/07/13
*/
import ConsoleTool from './ConsoleTool';
import DataTool from './DataTool';
// 缓存工具类
class CacheTool {
    /*设置缓存内容
    @param {string} key 储存的缓存名
    @param {any} value 储存的缓存内容
    @returns 结果*/
    static setCache(key, value) {
        if (key) {
            window.sessionStorage.setItem(`${key}`, JSON.stringify(value));
            return DataTool.formatData({
                message: '设置成功',
                data: {
                    key: key,
                    value: value
                }
            })
        }
        ConsoleTool.error('设置失败，请检测是否缺少设置参数');
        return null;
    }

    /*获取缓存内容
    @param {string} key 获取的参数名
    @return {any}*/
    static getCache(key) {
        if (window.sessionStorage.getItem(`${key}`)) {
            return JSON.parse(window.sessionStorage.getItem(`${key}`));
        }
        ConsoleTool.error(`获取失败，请检测是否缺少查找内容参数`);
        return null;
    }

    /*删除缓存内容
    @param {string} key 删除的参数名
    @returns 结果*/
    static delCache(key) {
        if (key) {
            window.sessionStorage.removeItem(`${key}`);
            return DataTool.formatData({
                message: '删除成功',
                data: {
                    key: key
                }
            })
        }
        ConsoleTool.error(`删除失败，请检测是否缺少删除内容参数`);
        return null;
    }
}
export default CacheTool;