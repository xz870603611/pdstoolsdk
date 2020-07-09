/*
Created by small peng on 2020/07/09
*/
import ConsoleTool from "./ConsoleTool";
/*数字工具类*/
class NumberTool {
    /*小数保留位数
    @param {number} number 数字
    @param {number} length 保留位数
    @returns {string} 结果
    */
    static fixDigits(number, length) {
        return (+number).toFixed(length);
    }

    /*单位转换增加
    @param {number} number 数字
    @param {number} length 去除长度
    @returns {number} 结果
    */
    static formatUnitIncrease(number, length) {
        return +number * length;
    }

    /*单位转换删除
    @param {number} number 数字
    @param {number} length 增加长度
    @returns {number} 结果
    */
    static formatUnitDelete(number, length) {
        return  1 / length * +number;
    }
    
    /*分转元，保留2位小数
    @param {number} number 数字
    @param {boolean} type 是否保留2位小数
    @returns {string number} 结果
    */
    static formatPrice(number, type) {
        if (type) {
            return NumberTool.fixDigits(NumberTool.formatUnitDelete(number, 100), 2);
        }
        return NumberTool.formatUnitDelete(number, 100);
    }
}

export default NumberTool;