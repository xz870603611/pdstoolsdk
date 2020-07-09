import ConsoleTool from "./ConsoleTool";

class ArrayTool {
    /*数组转字符串
    @param {array} value
    @param {string} 结果
    */
    static arrayJoin(value, joinString) {
        try {
            return value.join(joinString);
        } catch (e) {
            ConsoleTool.error(`您使用的参数不是有效的数组，您的参数为：${value}`);
            return '';
        }
    }

    /*数组排序方法
    @param AscSort 升序
    @param DescSort 降序*/
    //升序方法
    static AscSort(a, b) {
        return a - b;
    }
    //降序方法
    static DescSort(a, b) {
        return b - a;
    }

    /*数组排序
    @param {array} array 数组
    @param {string} type 排序方式
    @returns {array} 结果
    */
    static arraySort(array, type) {
        if (type === 'desc') {
            return array.sort(ArrayTool.DescSort);
        }
        return array.sort(ArrayTool.AscSort);
    }

    /*按对象参数排序方法
    @param CompareAscSort  升序
    @param CompareDescSort 降序*/
    // 对象升序
    static CompareAscSort(property) {
        return function(a, b) {
            let value1 = a[property];
            let value2 = b[property];
            return value1 - value2;
        }
    }
    // 对象降序
    static CompareDescSort(property) {
        return function (a, b) {
            let value1 = a[property];
            let value2 = b[property];
            return value2 - value1;
        }
    }

    /*按对象参数排序
    @param {array} array 数组
    @param {string} type 排序方式
    @param {string} key 排序字段
    @returns {array} 结果*/
    static objectSort(value, key, type) {
        if (!key) {
            ConsoleTool.error(`请填写排序字段key`);
            return value;
        }
        if (type === 'desc') {
            return value.sort(ArrayTool.CompareDescSort(key));
        }
        return value.sort(ArrayTool.CompareAscSort(key));
    }
}
export default ArrayTool;