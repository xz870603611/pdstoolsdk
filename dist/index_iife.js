var pdstoolsdk = (function (exports) {
    'use strict';

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
        @param mobile 手机号码
        @returns 结果 Booleans
        */
        static isMobile(mobile) {
            return (/^1[1234567890]\d{9}$/.test(mobile));
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

    return exports;

}({}));
