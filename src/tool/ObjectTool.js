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
}
export default ObjectTool;