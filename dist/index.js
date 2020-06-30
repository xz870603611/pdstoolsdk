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
        @param mobile 手机号码
        @return 结果 Booleans
        */
        static isMobile(mobile) {
            console.log(mobile);
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

    Object.defineProperty(exports, '__esModule', { value: true });

})));
