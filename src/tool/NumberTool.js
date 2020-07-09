/*
Created by small peng on 2020/07/09
*/

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

    /*单位转换
    @param {number} number 数字
    @param {number} length 去整长度
    @returns {number} 结果
    */
    static deleteNumber(number, length) {
        return +number / length;
    }

    /*分转元，保留2位小数
    @param {number} number 数字
    @param {boolean} type 是否保留2位小数
    @returns {string number} 结果
    */
    static formatPrice(number, type) {
        if (type) {
            return NumberTool.fixDigits(NumberTool.deleteNumber(number, 100), 2);
        }
        return NumberTool.deleteNumber(number, 100);
    }
}

export default NumberTool;