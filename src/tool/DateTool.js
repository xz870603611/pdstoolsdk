/*
Created by small peng on 2020/07/14
*/
// 日期工具类
class DateTool {
    /*当前时间转日期格式
    @param {string} type 格式化样式 YYYY-MM-DD HH:mm:ss
    @returns {object} 结果*/
    static getDateFormatDate(type, isFinishShowTwelve) {
        return DateTool.getFormatDate(new Date(), type, isFinishShowTwelve);
    }

    /*时间戳转日期格式
    @param {number} myDate 时间戳
    @param {string} type 格式化样式 YYYY-MM-DD HH:mm:ss
    @returns {number} 结果*/
    static getTimestampFormatDate(myDate, type, isFinishShowTwelve) {
        if (('' + myDate).length < 13) {
            myDate += myDate + '000';
        }
        return DateTool.getFormatDate(new Date(+myDate), type, isFinishShowTwelve);
    }

    /*格式化时间
    @param {object} myDate 日期格式
    @param {string} type 格式化样式 YYYY-MM-DD HH:mm:ss
    @param {boolean} isFinishShowTwelve是否使用12小时
    @returns {string} 结果*/

    static getFormatDate(myDate, type, isFinishShowTwelve) {
        let dateObj = {
            'YYYY': myDate.getFullYear(),
            'MM': myDate.getMonth() + 1,
            'DD': myDate.getDate(),
            'HH': isFinishShowTwelve && myDate.getHours() > 12 ? myDate.getHours() - 12 : myDate.getHours(),
            'mm': myDate.getMinutes(),
            'ss': myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds()
        };
        if (!type) {
            return dateObj;
        }
        return type.replace('YYYY', dateObj['YYYY']).
        replace('MM', dateObj['MM']).
        replace('DD', dateObj['DD']).
        replace('HH', dateObj['HH']).
        replace('mm', dateObj['mm']).
        replace('ss', dateObj['ss']);
    }
}
export default DateTool;