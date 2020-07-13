/*
Created by small peng on 2020/07/13
*/
// url工具类
import UrlPattern from "url-pattern";

class UrlTool {
    /*合成完整url
    @param {object} value 内容
    1、{string} baseUrl 基本地址
    2、{string} subUrl  相对地址
    3、{object} parameters 参数*/
    static urlFromPortion(value) {
        if (!value.params) {
            value.params = {};
        }
        let parameters = [];
        value.subUrl = value.subUrl ? value.subUrl : '/';
        let url = value.baseUrl + value.subUrl;
        for (const key in value.params) {
            if (!value.params.hasOwnProperty(key)) {
                continue;
            }
            if (value.params[key] !== undefined) {
                parameters.push(`${key}=${value.params[key]}`);
            }
        }
        if (parameters.length > 0) {
            console.log(parameters)
            url += '?' + parameters.join('&');
        }
        return url;
    }

    /*分析url并解析成对象结构
    @param {string} url 地址
    @param {boolean} options 分析配置
    @return {object} 结果 无效返回null*/

    static portionFromUrl(url, options) {
        options = {
            complete: false,
            ...options
        }
        try {
            let urlObj = null;
            try {
                urlObj = new URL(url);
            } catch (e) {
                return null;
            }
            console.log('urlObj')
            console.log(urlObj)
            if (urlObj) {
                let query = new UrlPattern(/^\??(.*)$/, ['query']).match(urlObj.search).query;
                console.log(query)
            }
        } catch (e) {
            console.log(e);
            return null;
        }
    }
}
export default UrlTool;