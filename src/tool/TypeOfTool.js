/*
Created by small peng on 2020/09/03
*/
import ConsoleTool from './ConsoleTool';
// 判断是什么类型的参数
class TypeOfTool {
    static getType(obj){
        let type = typeof obj;
        if(type !== "object"){
            ConsoleTool.error(`参数类型为:${type}`);
            return type;
        }
        type = Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');
        ConsoleTool.error(`参数类型为:${type}`);
        return type;
    }
}
export default TypeOfTool;