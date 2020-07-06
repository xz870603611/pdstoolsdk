(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.pdstoolsdk = {}));
}(this, (function (exports) { 'use strict';

    class ArrayTool {

    }

    class DateTool {

    }

    class NumberTool {

    }

    class ObjectTool {

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
            return typeof value === 'object' && value!== null ? !(Object.keys(value).length) : !value;
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
        static isPassWord(password, type) {
            switch (type) {
                case 1: return (/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/).test(password);
                case 2: return (/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/).test(password);
                case 3: return (/^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/).test(password);
                default: return (/^[0-9A-Za-z_]{6,}$/).test(password)
            }
        }


    }

    class UrlTool {

    }

    exports.ArrayTool = ArrayTool;
    exports.DateTool = DateTool;
    exports.NumberTool = NumberTool;
    exports.ObjectTool = ObjectTool;
    exports.StringTool = StringTool;
    exports.UrlTool = UrlTool;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
