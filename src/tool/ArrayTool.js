import ConsoleTool from "./ConsoleTool";

class ArrayTool {
    /*数组转字符串
    @param {array} value
    @param {string} 结果
    */
    static join(value, joinString) {
        try {
            return value.join(joinString);
        } catch (e) {
            ConsoleTool.error(`您使用的参数不是有效的数组，您的参数为：${value}`);
            return '';
        }
    }
}
export default ArrayTool;