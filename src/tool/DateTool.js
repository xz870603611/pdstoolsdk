/*
Created by small peng on 2020/07/14
*/
import ConsoleTool from './ConsoleTool';

// 日期工具类
class DateTool {

    /*获取当前日期字符串
    @param {string} type 格式化样式 YYYY-MM-DD HH:mm:ss
    @returns {string} 结果*/
    static getDateFormatDate(type, isFinishShowTwelve) {
        return DateTool.getFormatDate(new Date(), type, isFinishShowTwelve);
    }

    /*获取当前时间的时间戳
    @returns {number} 结果*/
    static getTimestamp() {
        return new Date().getTime();
    }

    /*时间戳转日期字符串格式
    @param {number} myDate 时间戳
    @param {string} type 格式化样式 YYYY-MM-DD HH:mm:ss
    @returns {string} 结果*/
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
            'mm': myDate.getMinutes() > 0 ? myDate.getMinutes() : '0' + myDate.getMinutes(),
            'ss': myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds()
        };
        if (!type) {
            return dateObj;
        }
        return type.replace('YYYY', dateObj['YYYY']).replace('MM', dateObj['MM']).replace('DD', dateObj['DD']).replace('HH', dateObj['HH']).replace('mm', dateObj['mm']).replace('ss', dateObj['ss']);
    }

    /*日期字符串转时间戳
    @param {string} value
    @returns {number} 结果*/
    static getDateFormatTimestamp(value) {
        return new Date(value).getTime();
    }

    /**获取今天为周几
     @param {number} value 日期参数
     @returns {string} 结果*/
    static weekDay(value) {
        let weekList = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        return weekList[new Date(DateTool.wantDate(value)).getDay()];
    }

    /**格式化为时间戳
     @param {any} value 时间参数
     @returns {number} 结果
     */
    static wantDate(value) {
        if (!value) {
            ConsoleTool.error(`参数为空`);
            return null;
        }
        if (typeof value === 'string') {
            return DateTool.getDateFormatTimestamp(value);
        }
        if (typeof value === 'number') {
            if (('' + value).length < 13) {
                value += value + '000';
            }
            return value;
        }
        if (typeof value === 'object') {
            return value.getTime();
        }
        ConsoleTool.error(`参数格式不正确`);
        return null;
    }

    /**
     * 具体时间转为时间戳再换算成天，时，分，秒显示
     * @param {number} value  追评时间
     * @return {string}   结果
     */
    static aboutDay(value) {
        let useDay = value / 1000;
        //对差值进行换算，得到相应的单位
        let day = Math.floor(useDay / 86400);
        let hour = Math.floor(useDay % 86400 / 3600);
        let minute = Math.floor(useDay % 86400 % 3600 / 60);
        let second = Math.floor(useDay % 86400 % 3600 % 60);
        if (day) {
            return day + '天';
        } else if (hour) {
            return hour + '小时';
        } else if (minute) {
            return minute + '分钟';
        } else {
            return second + '秒';
        }
    }

    /*获取某日期到某日期还有多少天
    @param {any} startDate 开始时间
    @param {any} endDate   结果时间
    @returns {number} 结果*/
    static getDateDay(startDate, endDate) {
        return DateTool.aboutDay(DateTool.wantDate(endDate) - DateTool.wantDate(startDate));
    }

    /**获取某日期某天后的日期字符串
     @param {any} startDate 开始时间
     @param {number} day 多少天后
     @returns {string} 结果*/
    static getDateDayDate(startDate, day) {
        if (!day) {
            ConsoleTool.error('参数不完整');
        }
        let timestamp = +day * 24 * 60 * 60 * 1000;
        return DateTool.getTimestampFormatDate(
            (DateTool.wantDate(startDate) + timestamp),
            'YYYY-MM-DD HH:mm:ss'
        );
    }
}

export default DateTool;