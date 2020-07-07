var pdstoolsdk = (function (exports) {
    'use strict';

    class ConsoleTool {
        static error(value) {
            console.log(`%c${value}`,
                `font-weight:bold;color:#e42f46;font-size: 16px;
                text-shadow: 0 1px #808d93,-1px 0 #cdd2d5,-1px 2px #808d93,
                -2px 1px #cdd2d5,-2px 3px #808d93,-3px 2px #cdd2d5;`);
        }
    }

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

    class DateTool {

    }

    class NumberTool {

    }

    class ObjectTool {
        /*json对象转成json字符串
        @param {object} string
        @returns {string} 结果
        */
        static stringify(obj) {
            try {
                return JSON.stringify(obj);
            } catch (e) {
                ConsoleTool.error(`您使用的参数不是一个json对象，您的参数为：${obj}`);
                return '';
            }
        }
    }

    /*
    Created by small peng on 2020/05/09
    */

    /*字符串工具类*/
    class StringTool {
        /*
        校验是否为手机号码
        @param {string} mobile 手机号码
        @returns {boolean} 结果
        */
        static isMobile(mobile) {
            return (/^1[1234567890]\d{9}$/.test(mobile));
        }

        /*校验是否为电话码
        @param {string} phone 电话号码
        @returns {boolean} 结果
        */
        static isPhone(phone) {
            return (/(\(\d{3,4}\)|\d{3,4}-\d{7})|\d{7,14}/).test(phone);
        }

        /*校验是否为email
        @param {string} email 邮箱地址
        @returns {boolean} 结果*/
        static isEmail(email) {
            return (/^[0-9a-zA-Z_-]+@[0-9a-zA-Z_-]+(\.[0-9a-zA-Z_-]{2,3}){1,2}$/).test(email);
        }

        /*校验是否为空
        @param {ang} value 任何类型
        @returns {boolean} 结果*/
        static isEmpty(value) {
            return typeof value === 'object' && value !== null ? !(Object.keys(value).length) : !value;
        }

        /*校验是否为验证码
        @param {string} verifyCode 验证码
        @returns {boolean} 结果*/
        static isVerifyCode(verifycode) {
            return (/^[0-9]{4,8}$/).test(verifycode);
        }

        /*校验是否为密码
        @param {string} password 密码
        @param {number} type 强度
         1：强 字母+数字+特殊字符
         2：中 字母+数字、数字+特殊字符、数字+特殊字符
         3: 弱 纯数字，纯字母，纯特殊字符
         默认：数字，字母，下划线
        @returns {boolean} 结果
        */
        static isPassword(password, type) {
            switch (type) {
                case 1:
                    return (/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/).test(password);
                case 2:
                    return (/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/).test(password);
                case 3:
                    return (/^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/).test(password);
                default:
                    return (/^[0-9A-Za-z_]{6,}$/).test(password)
            }
        }

        /*通过asc码得到0-9 A-Z a-z的数值
        @param {string} ascChar
        @returns {number} 结果 A=0 B=1*/
        static numberFormASC(ascChar) {
            let asc = ascChar.charCodeAt(0);
            if (asc >= 48 && asc <= 57) {
                return asc - 48;
            } else if (asc >= 65 && asc <= 90) {
                return asc - 65;
            } else if (asc >= 97 && asc <= 122) {
                return asc - 97;
            }
            return asc;
        }

        /*清除所有空格
        @param {string} string
        @returns {string} 结果
        */
        static deleteSpace(string) {
            return string.replace(/\s+/g, '');
        }

        /*清除任意字符
        @param {string} content
        @param {string} deleteString
        @returns {string} 结果
        */
        static deleteString(content, deleteString) {
            if (!deleteString) {
                return content;
            }
            return content.replace(new RegExp("\\" + deleteString + "+", "g"), '');
        }

        /*获取html标签中的内容
        @param {string} label
        @returns {string} 结果
        */
        static getHtmlContent(label) {
            return label.replace(/<[^>]+>/g, '');
        }

        /*获取img引入地址
        @param {string} string
        @return {array} 结果
        */
        static getImgAddress(string) {
            let stringList = string.match(/<img.*?(?:>|\/>)/gi);
            let stringSrcList = [];
            if (!stringList) {
                return stringSrcList;
            }
            stringList.forEach(item => {
                let src = item.match(/src=[\'\"]?([^\'\"]*)[\'\"]?/i);
                //获取图片地址
                if (src[1]) {
                    stringSrcList.push(src[1]);
                }
            });
            return stringSrcList;
        }

        /*获取双标签及内容
        @param {string} html
        @param {string} label
        @return {array} 结果
        PS：只能获取一级目录相同标签包不行~
        */
        static getDoubleHtmlLabel(html, label) {
            let htmlList = html.match(
                new RegExp(`<${label}.*?(?:${label}>|${label}\/>)`, 'gi')
            );
            return htmlList ? htmlList : [];
        }

        /*获取单标签及内容
        @param {string} html
        @param {string} labelS
        @return {array} 结果
        */
        static getSingleHtmlLabel(html, label) {
            let htmlList = html.match(
                new RegExp(`(<${label}.*?(?:>|\/>)`, 'gi')
            );
            return htmlList ? htmlList : [];
        }

        /*json字符串转成json对象
        @param {string} string
        @returns {object} 结果
        */
        static parse(string) {
            try {
                return JSON.parse(string);
            } catch (e) {
                ConsoleTool.error(`您使用的参数不是一个json字符，您的参数为：${string}`);
                return [];
            }
        }

        /*字符串转数组
        @param {string} string
        @param {array} splitString
        */
        static split(string, splitString) {
            try {
                return string.split(splitString);
            } catch (e) {
                ConsoleTool.error(`您使用的参数不是有效的字符串，您的参数为：${string}`);
                return [];
            }
        }
    }

    class UrlTool {

    }

    exports.ArrayTool = ArrayTool;
    exports.ConsoleTool = ConsoleTool;
    exports.DateTool = DateTool;
    exports.NumberTool = NumberTool;
    exports.ObjectTool = ObjectTool;
    exports.StringTool = StringTool;
    exports.UrlTool = UrlTool;

    return exports;

}({}));
