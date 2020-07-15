/*
Created by small peng on 2020/07/13
*/
// url工具类
import UrlPattern from 'url-pattern';


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
            if (urlObj) {
                const _getKV = (obj) => {
                  let queryMap = {};
                  if (obj) {
                      for (let key of obj.split('&')) {
                          let key_l = key.split('=');
                          if (key_l.length < 2) {
                              continue;
                          }
                          queryMap[key_l[0]] = key_l[1];
                      }
                  }
                  return queryMap;
                };
                let query = new UrlPattern(/^\??(.*)$/, ['query']).match(urlObj.search).query;
                let queryMap = _getKV(query);
                let hashObj = new UrlPattern(/^#?(([\w-]*(\/)?)+)?((\?)+(.*))?$/,
                    ['hashpath', '', '', 'hashsearch', '', '_hashsearch']).match(urlObj.hash);
                let hashMap = _getKV(hashObj._hashsearch);
                let data ={
                    host: urlObj.host,
                    href: urlObj.href,
                    pathname: urlObj.pathname,
                    protocol: urlObj.protocol,
                    query: queryMap,
                    hashpath: hashObj.hashpath,
                    hashquery: hashMap
                }
                if (options.complete) {
                    data = {
                        ...data,
                        origin: urlObj.origin,
                        hostname: urlObj.hostname,
                        port: urlObj.port,
                        search: urlObj.search,
                        username: urlObj.username,
                        password: urlObj.password,
                        hashsearch: urlObj.hashsearch,
                        hash: urlObj.hash
                    }
                }
                return data;
            }
        } catch (e) {
            throw e;
        }
    }
}
export default UrlTool;