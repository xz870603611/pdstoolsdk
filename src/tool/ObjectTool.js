import ConsoleTool from './ConsoleTool';

class ObjectTool {
    /*json对象转成json字符串
    @param {object} string
    @returns {string} 结果
    */
    static objectStringify(obj) {
        try {
            return JSON.stringify(obj);
        } catch (e) {
            ConsoleTool.error(`您使用的参数不是一个json对象，您的参数为：${obj}`);
            return '';
        }
    }

    /*删除对象参数为空的值 null undefined '' [] {}
    @param {object} obj 遍历的对象值
    @returns {object} 结果*/
    static deleteEmptyProperty(obj) {
        let object = obj;
        for (let i in object) {
            let value = object[i];
            if (!value) {
                delete object[i];
            } else if ({}.toString.call(value) === '[object Array]') {
                if (value.length === 0) {
                    delete object[i];
                }
            } else if ({}.toString.call(value) === '[object Object]') {
                if (Object.keys(value).length === 0) {
                    delete object[i];
                    continue;
                }
                this.deleteEmptyProperty(value);
            }
        }
        return object;
    }

    /*按对象参数按ascii码排序(升序)
    @param {object} obj 遍历的对象值
    @returns {object} 结果*/
    static sortAscii(obj) {
        let n = [];
        let arr = {}
        for (let k in obj) n.push(k);
        n.sort();
        for (let i = 0; i < n.length; i++) {
            let v = obj[n[i]];
            if (v) {
                if ({}.toString.call(v) === '[object Object]') {
                    v = this.sortAscii(v);
                }
            }
            arr[n[i]] = v;
        }
        return arr;
    }

}

export default ObjectTool;