'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var ConsoleTool = /*#__PURE__*/function () {
  function ConsoleTool() {
    _classCallCheck(this, ConsoleTool);
  }

  _createClass(ConsoleTool, null, [{
    key: "error",
    value: function error(value) {
      console.log("%c".concat(value), "font-weight:bold;color:#e42f46;font-size: 16px;\n                text-shadow: 0 1px #808d93,-1px 0 #cdd2d5,-1px 2px #808d93,\n                -2px 1px #cdd2d5,-2px 3px #808d93,-3px 2px #cdd2d5;");
    }
  }]);

  return ConsoleTool;
}();

var ArrayTool = /*#__PURE__*/function () {
  function ArrayTool() {
    _classCallCheck(this, ArrayTool);
  }

  _createClass(ArrayTool, null, [{
    key: "arrayJoin",

    /*数组转字符串
    @param {array} value
    @param {string} 结果
    */
    value: function arrayJoin(value, joinString) {
      try {
        return value.join(joinString);
      } catch (e) {
        ConsoleTool.error("\u60A8\u4F7F\u7528\u7684\u53C2\u6570\u4E0D\u662F\u6709\u6548\u7684\u6570\u7EC4\uFF0C\u60A8\u7684\u53C2\u6570\u4E3A\uFF1A".concat(value));
        return '';
      }
    }
    /*数组排序方法
    @param AscSort 升序
    @param DescSort 降序*/
    //升序方法

  }, {
    key: "AscSort",
    value: function AscSort(a, b) {
      return a - b;
    } //降序方法

  }, {
    key: "DescSort",
    value: function DescSort(a, b) {
      return b - a;
    }
    /*数组排序
    @param {array} array 数组
    @param {string} type 排序方式
    @returns {array} 结果
    */

  }, {
    key: "arraySort",
    value: function arraySort(array, type) {
      if (type === 'desc') {
        return array.sort(ArrayTool.DescSort);
      }

      return array.sort(ArrayTool.AscSort);
    }
    /*按对象参数排序方法
    @param CompareAscSort  升序
    @param CompareDescSort 降序*/
    // 对象升序

  }, {
    key: "CompareAscSort",
    value: function CompareAscSort(property) {
      return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
      };
    } // 对象降序

  }, {
    key: "CompareDescSort",
    value: function CompareDescSort(property) {
      return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
      };
    }
    /*按对象参数排序
    @param {array} array 数组
    @param {string} type 排序方式 升序 asc 降序 desc
    @param {string} key 排序字段
    @returns {array} 结果*/

  }, {
    key: "objectSort",
    value: function objectSort(value, key, type) {
      if (!key) {
        ConsoleTool.error("\u8BF7\u586B\u5199\u6392\u5E8F\u5B57\u6BB5key");
        return value;
      }

      if (type === 'desc') {
        return value.sort(ArrayTool.CompareDescSort(key));
      }

      if (type === 'asc') {
        return value.sort(ArrayTool.CompareAscSort(key));
      }

      return value;
    }
    /*向数组中增加序号
    @param {object} param 参数
    @param {array} data 内容
    @param {number} page 页码
    @param {string} key 新增加的key值
    @returns {array} 结果*/

  }, {
    key: "addkey",
    value: function addkey(params) {
      var data = [];

      if (params.data.length > 10) {
        params.data = params.data.slice((params.page - 1) * 10, 10 * params.page);
      }

      for (var i = 0; i < params.data.length; i++) {
        params.key = params.key ? params.key : 'key';
        data.push(_objectSpread2(_defineProperty({}, params.key, i + 1 + (params.page - 1) * 10), params.data[i]));
      }

      return data;
    }
  }]);

  return ArrayTool;
}();

var DateTool = /*#__PURE__*/function () {
  function DateTool() {
    _classCallCheck(this, DateTool);
  }

  _createClass(DateTool, null, [{
    key: "getDateFormatDate",

    /*获取当前日期字符串
    @param {string} type 格式化样式 YYYY-MM-DD HH:mm:ss
    @returns {string} 结果*/
    value: function getDateFormatDate(type, isFinishShowTwelve) {
      return DateTool.getFormatDate(new Date(), type, isFinishShowTwelve);
    }
    /*获取当前时间的时间戳
    @returns {number} 结果*/

  }, {
    key: "getTimestamp",
    value: function getTimestamp() {
      return new Date().getTime();
    }
    /*时间戳转日期字符串格式
    @param {number} myDate 时间戳
    @param {string} type 格式化样式 YYYY-MM-DD HH:mm:ss
    @returns {string} 结果*/

  }, {
    key: "getTimestampFormatDate",
    value: function getTimestampFormatDate(myDate, type, isFinishShowTwelve) {
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

  }, {
    key: "getFormatDate",
    value: function getFormatDate(myDate, type, isFinishShowTwelve) {
      var dateObj = {
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

  }, {
    key: "getDateFormatTimestamp",
    value: function getDateFormatTimestamp(value) {
      return new Date(value).getTime();
    }
    /**获取今天为周几
     @param {number} value 日期参数
     @returns {string} 结果*/

  }, {
    key: "weekDay",
    value: function weekDay(value) {
      var weekList = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
      return weekList[new Date(DateTool.wantDate(value)).getDay()];
    }
    /**格式化为时间戳
     @param {any} value 时间参数
     @returns {number} 结果
     */

  }, {
    key: "wantDate",
    value: function wantDate(value) {
      if (!value) {
        ConsoleTool.error("\u53C2\u6570\u4E3A\u7A7A");
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

      if (_typeof(value) === 'object') {
        return value.getTime();
      }

      ConsoleTool.error("\u53C2\u6570\u683C\u5F0F\u4E0D\u6B63\u786E");
      return null;
    }
    /**
     * 具体时间转为时间戳再换算成天，时，分，秒显示
     * @param {number} value  追评时间
     * @return {string}   结果
     */

  }, {
    key: "aboutDay",
    value: function aboutDay(value) {
      var useDay = value / 1000; //对差值进行换算，得到相应的单位

      var day = Math.floor(useDay / 86400);
      var hour = Math.floor(useDay % 86400 / 3600);
      var minute = Math.floor(useDay % 86400 % 3600 / 60);
      var second = Math.floor(useDay % 86400 % 3600 % 60);

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

  }, {
    key: "getDateDay",
    value: function getDateDay(startDate, endDate) {
      return DateTool.aboutDay(DateTool.wantDate(endDate) - DateTool.wantDate(startDate));
    }
    /**获取某日期某天后的日期字符串
     @param {any} startDate 开始时间
     @param {number} day 多少天后
     @returns {string} 结果*/

  }, {
    key: "getDateDayDate",
    value: function getDateDayDate(startDate, day) {
      if (!day) {
        ConsoleTool.error('参数不完整');
      }

      var timestamp = +day * 24 * 60 * 60 * 1000;
      return DateTool.getTimestampFormatDate(DateTool.wantDate(startDate) + timestamp, 'YYYY-MM-DD HH:mm:ss');
    }
  }]);

  return DateTool;
}();

/*数字工具类*/

var NumberTool = /*#__PURE__*/function () {
  function NumberTool() {
    _classCallCheck(this, NumberTool);
  }

  _createClass(NumberTool, null, [{
    key: "fixDigits",

    /*小数保留位数
    @param {number} number 数字
    @param {number} length 保留位数
    @returns {string} 结果
    */
    value: function fixDigits(number, length) {
      return (+number).toFixed(length);
    }
    /*单位转换增加
    @param {number} number 数字
    @param {number} length 去除长度
    @returns {number} 结果
    */

  }, {
    key: "formatUnitIncrease",
    value: function formatUnitIncrease(number, length) {
      return +number * length;
    }
    /*单位转换删除
    @param {number} number 数字
    @param {number} length 增加长度
    @returns {number} 结果
    */

  }, {
    key: "formatUnitDelete",
    value: function formatUnitDelete(number, length) {
      return 1 / length * +number;
    }
    /*分转元，保留2位小数
    @param {number} number 数字
    @param {boolean} type 是否保留2位小数
    @returns {string number} 结果
    */

  }, {
    key: "formatPrice",
    value: function formatPrice(number, type) {
      if (type) {
        return NumberTool.fixDigits(NumberTool.formatUnitDelete(number, 100), 2);
      } else {
        return NumberTool.formatUnitDelete(number, 100);
      }
    }
  }]);

  return NumberTool;
}();

var ObjectTool = /*#__PURE__*/function () {
  function ObjectTool() {
    _classCallCheck(this, ObjectTool);
  }

  _createClass(ObjectTool, null, [{
    key: "objectStringify",

    /*json对象转成json字符串
    @param {object} string
    @returns {string} 结果
    */
    value: function objectStringify(obj) {
      try {
        return JSON.stringify(obj);
      } catch (e) {
        ConsoleTool.error("\u60A8\u4F7F\u7528\u7684\u53C2\u6570\u4E0D\u662F\u4E00\u4E2Ajson\u5BF9\u8C61\uFF0C\u60A8\u7684\u53C2\u6570\u4E3A\uFF1A".concat(obj));
        return '';
      }
    }
    /*删除对象参数为空的值 null undefined '' [] {}
    @param {object} obj 遍历的对象值
    @returns {object} 结果*/

  }, {
    key: "deleteEmptyProperty",
    value: function deleteEmptyProperty(obj) {
      var object = obj;

      for (var i in object) {
        var value = object[i];

        if (!value) {
          delete object[i];
        } else if ({}.toString.call(value) === '[object Array]') {
          if (value.length === 0) {
            delete object[i];
          }
        } else if ({}.toString.call(value) === '[object Object]') {
          if (Object.keys(value).length === 0) {
            delete object[i];
            continue;
          }

          this.deleteEmptyProperty(value);
        }
      }

      return object;
    }
    /*按对象参数按ascii码排序(升序)
    @param {object} obj 遍历的对象值
    @returns {object} 结果*/

  }, {
    key: "sortAscii",
    value: function sortAscii(obj) {
      var n = [];
      var arr = {};

      for (var k in obj) {
        n.push(k);
      }

      n.sort();

      for (var i = 0; i < n.length; i++) {
        var v = obj[n[i]];

        if (v) {
          if ({}.toString.call(v) === '[object Object]') {
            v = this.sortAscii(v);
          }
        }

        arr[n[i]] = v;
      }

      return arr;
    } // 对象转url参数
    // @param {object} obj 参数
    // @returns {string} 结果

  }, {
    key: "jsonUrl",
    value: function jsonUrl(o) {
      var n = [];
      var str = '';

      for (var k in o) {
        n.push(k);
      }

      n.sort();

      for (var i = 0; i < n.length; i++) {
        var v = o[n[i]];

        if (v) {
          if ({}.toString.call(v) === '[object Object]') {
            v = this.jsonUrl(v);
          } else if ({}.toString.call(v) === '[object Array]') {
            if (v.length === 0) {
              continue;
            }

            v = JSON.stringify(v).replace(/:/g, '=');
            console.log(v);
          }
        }

        if (v !== null && v !== '' && v !== undefined) {
          str += '&' + n[i] + '=' + v;
        }
      }

      return str.slice(1);
    }
  }]);

  return ObjectTool;
}();

/*字符串工具类*/

var StringTool = /*#__PURE__*/function () {
  function StringTool() {
    _classCallCheck(this, StringTool);
  }

  _createClass(StringTool, null, [{
    key: "isMobile",

    /*
    校验是否为手机号码
    @param {string} mobile 手机号码
    @returns {boolean} 结果
    */
    value: function isMobile(mobile) {
      return /^1[1234567890]\d{9}$/.test(mobile);
    }
    /*校验是否为电话码
    @param {string} phone 电话号码
    @returns {boolean} 结果
    */

  }, {
    key: "isPhone",
    value: function isPhone(phone) {
      return /(\(\d{3,4}\)|\d{3,4}-\d{7})|\d{7,14}/.test(phone);
    }
    /*校验是否为email
    @param {string} email 邮箱地址
    @returns {boolean} 结果*/

  }, {
    key: "isEmail",
    value: function isEmail(email) {
      return /^[0-9a-zA-Z_-]+@[0-9a-zA-Z_-]+(\.[0-9a-zA-Z_-]{2,3}){1,2}$/.test(email);
    }
    /*校验是否为空
    @param {ang} value 任何类型
    @returns {boolean} 结果*/

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return _typeof(value) === 'object' && value !== null ? !Object.keys(value).length : !value;
    }
    /*校验是否为验证码
    @param {string} verifyCode 验证码
    @returns {boolean} 结果*/

  }, {
    key: "isVerifyCode",
    value: function isVerifyCode(verifycode) {
      return /^[0-9]{4,8}$/.test(verifycode);
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

  }, {
    key: "isPassword",
    value: function isPassword(password, type) {
      switch (type) {
        case 1:
          return /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/.test(password);

        case 2:
          return /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/.test(password);

        case 3:
          return /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/.test(password);

        default:
          return /^[0-9A-Za-z_]{6,}$/.test(password);
      }
    }
    /*通过asc码得到0-9 A-Z a-z的数值
    @param {string} ascChar 字符串
    @returns {number} 结果 A=0 B=1*/

  }, {
    key: "numberFormASC",
    value: function numberFormASC(ascChar) {
      var asc = ascChar.charCodeAt(0);

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
    @param {string} string 字符串
    @returns {string} 结果
    */

  }, {
    key: "deleteSpace",
    value: function deleteSpace(string) {
      return string.replace(/\s+/g, '');
    }
    /*清除任意字符
    @param {string} content 字符串
    @param {string} deleteString 要删除的字符
    @returns {string} 结果
    */

  }, {
    key: "deleteString",
    value: function deleteString(content, _deleteString) {
      if (!_deleteString) {
        return content;
      }

      return content.replace(new RegExp("\\" + _deleteString + "+", "g"), '');
    }
    /*获取html标签中的内容
    @param {string} label html字符串
    @returns {string} 结果
    */

  }, {
    key: "getHtmlContent",
    value: function getHtmlContent(label) {
      return label.replace(/<[^>]+>/g, '');
    }
    /*获取img引入地址
    @param {string} string 字符串
    @return {array} 结果
    */

  }, {
    key: "getImgAddress",
    value: function getImgAddress(string) {
      var stringList = string.match(/<img.*?(?:>|\/>)/gi);
      var stringSrcList = [];

      if (!stringList) {
        return stringSrcList;
      }

      stringList.forEach(function (item) {
        var src = item.match(/src=[\'\"]?([^\'\"]*)[\'\"]?/i); //获取图片地址

        if (src[1]) {
          stringSrcList.push(src[1]);
        }
      });
      return stringSrcList;
    }
    /*获取双标签及内容
    @param {string} html 字符串
    @param {string} label 要获取的双标签名
    @return {array} 结果
    PS：只能获取一级目录相同标签包不行~
    */

  }, {
    key: "getDoubleHtmlLabel",
    value: function getDoubleHtmlLabel(html, label) {
      var htmlList = html.match(new RegExp("<".concat(label, ".*?(?:").concat(label, ">|").concat(label, "/>)"), 'gi'));
      return htmlList ? htmlList : [];
    }
    /*获取单标签及内容
    @param {string} html 字符串
    @param {string} label 要获取的单标签名
    @return {array} 结果
    */

  }, {
    key: "getSingleHtmlLabel",
    value: function getSingleHtmlLabel(html, label) {
      var htmlList = html.match(new RegExp("(<".concat(label, ".*?(?:>|/>)"), 'gi'));
      return htmlList ? htmlList : [];
    }
    /*json字符串转成json对象
    @param {string} string josn字符串
    @returns {object} 结果
    */

  }, {
    key: "stringParse",
    value: function stringParse(string) {
      try {
        return JSON.parse(string);
      } catch (e) {
        ConsoleTool.error("\u60A8\u4F7F\u7528\u7684\u53C2\u6570\u4E0D\u662F\u4E00\u4E2Ajson\u5B57\u7B26\uFF0C\u60A8\u7684\u53C2\u6570\u4E3A\uFF1A".concat(string));
        return [];
      }
    }
    /*字符串转数组
    @param {string} string 字符串
    @param {array} splitString
    */

  }, {
    key: "stringSplit",
    value: function stringSplit(string, splitString) {
      if (typeof string === 'string') {
        return string.split(splitString);
      } else {
        ConsoleTool.error("\u60A8\u4F7F\u7528\u7684\u53C2\u6570\u4E0D\u662F\u6709\u6548\u7684\u5B57\u7B26\u4E32\uFF0C\u60A8\u7684\u53C2\u6570\u4E3A\uFF1A".concat(string));
        return [];
      }
    }
  }]);

  return StringTool;
}();

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var urlPattern = createCommonjsModule(function (module, exports) {
  // Generated by CoffeeScript 1.10.0
  var slice = [].slice;

  (function (root, factory) {
    if ( exports !== null) {
      return module.exports = factory();
    } else {
      return root.UrlPattern = factory();
    }
  })(commonjsGlobal, function () {
    var P, UrlPattern, astNodeContainsSegmentsForProvidedParams, astNodeToNames, astNodeToRegexString, baseAstNodeToRegexString, concatMap, defaultOptions, escapeForRegex, getParam, keysAndValuesToObject, newParser, regexGroupCount, stringConcatMap, stringify;

    escapeForRegex = function (string) {
      return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    concatMap = function (array, f) {
      var i, length, results;
      results = [];
      i = -1;
      length = array.length;

      while (++i < length) {
        results = results.concat(f(array[i]));
      }

      return results;
    };

    stringConcatMap = function (array, f) {
      var i, length, result;
      result = '';
      i = -1;
      length = array.length;

      while (++i < length) {
        result += f(array[i]);
      }

      return result;
    };

    regexGroupCount = function (regex) {
      return new RegExp(regex.toString() + '|').exec('').length - 1;
    };

    keysAndValuesToObject = function (keys, values) {
      var i, key, length, object, value;
      object = {};
      i = -1;
      length = keys.length;

      while (++i < length) {
        key = keys[i];
        value = values[i];

        if (value == null) {
          continue;
        }

        if (object[key] != null) {
          if (!Array.isArray(object[key])) {
            object[key] = [object[key]];
          }

          object[key].push(value);
        } else {
          object[key] = value;
        }
      }

      return object;
    };

    P = {};

    P.Result = function (value, rest) {
      this.value = value;
      this.rest = rest;
    };

    P.Tagged = function (tag, value) {
      this.tag = tag;
      this.value = value;
    };

    P.tag = function (tag, parser) {
      return function (input) {
        var result, tagged;
        result = parser(input);

        if (result == null) {
          return;
        }

        tagged = new P.Tagged(tag, result.value);
        return new P.Result(tagged, result.rest);
      };
    };

    P.regex = function (regex) {
      return function (input) {
        var matches, result;
        matches = regex.exec(input);

        if (matches == null) {
          return;
        }

        result = matches[0];
        return new P.Result(result, input.slice(result.length));
      };
    };

    P.sequence = function () {
      var parsers;
      parsers = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return function (input) {
        var i, length, parser, rest, result, values;
        i = -1;
        length = parsers.length;
        values = [];
        rest = input;

        while (++i < length) {
          parser = parsers[i];
          result = parser(rest);

          if (result == null) {
            return;
          }

          values.push(result.value);
          rest = result.rest;
        }

        return new P.Result(values, rest);
      };
    };

    P.pick = function () {
      var indexes, parsers;
      indexes = arguments[0], parsers = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      return function (input) {
        var array, result;
        result = P.sequence.apply(P, parsers)(input);

        if (result == null) {
          return;
        }

        array = result.value;
        result.value = array[indexes];
        return result;
      };
    };

    P.string = function (string) {
      var length;
      length = string.length;
      return function (input) {
        if (input.slice(0, length) === string) {
          return new P.Result(string, input.slice(length));
        }
      };
    };

    P.lazy = function (fn) {
      var cached;
      cached = null;
      return function (input) {
        if (cached == null) {
          cached = fn();
        }

        return cached(input);
      };
    };

    P.baseMany = function (parser, end, stringResult, atLeastOneResultRequired, input) {
      var endResult, parserResult, rest, results;
      rest = input;
      results = stringResult ? '' : [];

      while (true) {
        if (end != null) {
          endResult = end(rest);

          if (endResult != null) {
            break;
          }
        }

        parserResult = parser(rest);

        if (parserResult == null) {
          break;
        }

        if (stringResult) {
          results += parserResult.value;
        } else {
          results.push(parserResult.value);
        }

        rest = parserResult.rest;
      }

      if (atLeastOneResultRequired && results.length === 0) {
        return;
      }

      return new P.Result(results, rest);
    };

    P.many1 = function (parser) {
      return function (input) {
        return P.baseMany(parser, null, false, true, input);
      };
    };

    P.concatMany1Till = function (parser, end) {
      return function (input) {
        return P.baseMany(parser, end, true, true, input);
      };
    };

    P.firstChoice = function () {
      var parsers;
      parsers = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return function (input) {
        var i, length, parser, result;
        i = -1;
        length = parsers.length;

        while (++i < length) {
          parser = parsers[i];
          result = parser(input);

          if (result != null) {
            return result;
          }
        }
      };
    };

    newParser = function (options) {
      var U;
      U = {};
      U.wildcard = P.tag('wildcard', P.string(options.wildcardChar));
      U.optional = P.tag('optional', P.pick(1, P.string(options.optionalSegmentStartChar), P.lazy(function () {
        return U.pattern;
      }), P.string(options.optionalSegmentEndChar)));
      U.name = P.regex(new RegExp("^[" + options.segmentNameCharset + "]+"));
      U.named = P.tag('named', P.pick(1, P.string(options.segmentNameStartChar), P.lazy(function () {
        return U.name;
      })));
      U.escapedChar = P.pick(1, P.string(options.escapeChar), P.regex(/^./));
      U["static"] = P.tag('static', P.concatMany1Till(P.firstChoice(P.lazy(function () {
        return U.escapedChar;
      }), P.regex(/^./)), P.firstChoice(P.string(options.segmentNameStartChar), P.string(options.optionalSegmentStartChar), P.string(options.optionalSegmentEndChar), U.wildcard)));
      U.token = P.lazy(function () {
        return P.firstChoice(U.wildcard, U.optional, U.named, U["static"]);
      });
      U.pattern = P.many1(P.lazy(function () {
        return U.token;
      }));
      return U;
    };

    defaultOptions = {
      escapeChar: '\\',
      segmentNameStartChar: ':',
      segmentValueCharset: 'a-zA-Z0-9-_~ %',
      segmentNameCharset: 'a-zA-Z0-9',
      optionalSegmentStartChar: '(',
      optionalSegmentEndChar: ')',
      wildcardChar: '*'
    };

    baseAstNodeToRegexString = function (astNode, segmentValueCharset) {
      if (Array.isArray(astNode)) {
        return stringConcatMap(astNode, function (node) {
          return baseAstNodeToRegexString(node, segmentValueCharset);
        });
      }

      switch (astNode.tag) {
        case 'wildcard':
          return '(.*?)';

        case 'named':
          return "([" + segmentValueCharset + "]+)";

        case 'static':
          return escapeForRegex(astNode.value);

        case 'optional':
          return '(?:' + baseAstNodeToRegexString(astNode.value, segmentValueCharset) + ')?';
      }
    };

    astNodeToRegexString = function (astNode, segmentValueCharset) {
      if (segmentValueCharset == null) {
        segmentValueCharset = defaultOptions.segmentValueCharset;
      }

      return '^' + baseAstNodeToRegexString(astNode, segmentValueCharset) + '$';
    };

    astNodeToNames = function (astNode) {
      if (Array.isArray(astNode)) {
        return concatMap(astNode, astNodeToNames);
      }

      switch (astNode.tag) {
        case 'wildcard':
          return ['_'];

        case 'named':
          return [astNode.value];

        case 'static':
          return [];

        case 'optional':
          return astNodeToNames(astNode.value);
      }
    };

    getParam = function (params, key, nextIndexes, sideEffects) {
      var index, maxIndex, result, value;

      if (sideEffects == null) {
        sideEffects = false;
      }

      value = params[key];

      if (value == null) {
        if (sideEffects) {
          throw new Error("no values provided for key `" + key + "`");
        } else {
          return;
        }
      }

      index = nextIndexes[key] || 0;
      maxIndex = Array.isArray(value) ? value.length - 1 : 0;

      if (index > maxIndex) {
        if (sideEffects) {
          throw new Error("too few values provided for key `" + key + "`");
        } else {
          return;
        }
      }

      result = Array.isArray(value) ? value[index] : value;

      if (sideEffects) {
        nextIndexes[key] = index + 1;
      }

      return result;
    };

    astNodeContainsSegmentsForProvidedParams = function (astNode, params, nextIndexes) {
      var i, length;

      if (Array.isArray(astNode)) {
        i = -1;
        length = astNode.length;

        while (++i < length) {
          if (astNodeContainsSegmentsForProvidedParams(astNode[i], params, nextIndexes)) {
            return true;
          }
        }

        return false;
      }

      switch (astNode.tag) {
        case 'wildcard':
          return getParam(params, '_', nextIndexes, false) != null;

        case 'named':
          return getParam(params, astNode.value, nextIndexes, false) != null;

        case 'static':
          return false;

        case 'optional':
          return astNodeContainsSegmentsForProvidedParams(astNode.value, params, nextIndexes);
      }
    };

    stringify = function (astNode, params, nextIndexes) {
      if (Array.isArray(astNode)) {
        return stringConcatMap(astNode, function (node) {
          return stringify(node, params, nextIndexes);
        });
      }

      switch (astNode.tag) {
        case 'wildcard':
          return getParam(params, '_', nextIndexes, true);

        case 'named':
          return getParam(params, astNode.value, nextIndexes, true);

        case 'static':
          return astNode.value;

        case 'optional':
          if (astNodeContainsSegmentsForProvidedParams(astNode.value, params, nextIndexes)) {
            return stringify(astNode.value, params, nextIndexes);
          } else {
            return '';
          }

      }
    };

    UrlPattern = function (arg1, arg2) {
      var groupCount, options, parsed, parser, withoutWhitespace;

      if (arg1 instanceof UrlPattern) {
        this.isRegex = arg1.isRegex;
        this.regex = arg1.regex;
        this.ast = arg1.ast;
        this.names = arg1.names;
        return;
      }

      this.isRegex = arg1 instanceof RegExp;

      if (!('string' === typeof arg1 || this.isRegex)) {
        throw new TypeError('argument must be a regex or a string');
      }

      if (this.isRegex) {
        this.regex = arg1;

        if (arg2 != null) {
          if (!Array.isArray(arg2)) {
            throw new Error('if first argument is a regex the second argument may be an array of group names but you provided something else');
          }

          groupCount = regexGroupCount(this.regex);

          if (arg2.length !== groupCount) {
            throw new Error("regex contains " + groupCount + " groups but array of group names contains " + arg2.length);
          }

          this.names = arg2;
        }

        return;
      }

      if (arg1 === '') {
        throw new Error('argument must not be the empty string');
      }

      withoutWhitespace = arg1.replace(/\s+/g, '');

      if (withoutWhitespace !== arg1) {
        throw new Error('argument must not contain whitespace');
      }

      options = {
        escapeChar: (arg2 != null ? arg2.escapeChar : void 0) || defaultOptions.escapeChar,
        segmentNameStartChar: (arg2 != null ? arg2.segmentNameStartChar : void 0) || defaultOptions.segmentNameStartChar,
        segmentNameCharset: (arg2 != null ? arg2.segmentNameCharset : void 0) || defaultOptions.segmentNameCharset,
        segmentValueCharset: (arg2 != null ? arg2.segmentValueCharset : void 0) || defaultOptions.segmentValueCharset,
        optionalSegmentStartChar: (arg2 != null ? arg2.optionalSegmentStartChar : void 0) || defaultOptions.optionalSegmentStartChar,
        optionalSegmentEndChar: (arg2 != null ? arg2.optionalSegmentEndChar : void 0) || defaultOptions.optionalSegmentEndChar,
        wildcardChar: (arg2 != null ? arg2.wildcardChar : void 0) || defaultOptions.wildcardChar
      };
      parser = newParser(options);
      parsed = parser.pattern(arg1);

      if (parsed == null) {
        throw new Error("couldn't parse pattern");
      }

      if (parsed.rest !== '') {
        throw new Error("could only partially parse pattern");
      }

      this.ast = parsed.value;
      this.regex = new RegExp(astNodeToRegexString(this.ast, options.segmentValueCharset));
      this.names = astNodeToNames(this.ast);
    };

    UrlPattern.prototype.match = function (url) {
      var groups, match;
      match = this.regex.exec(url);

      if (match == null) {
        return null;
      }

      groups = match.slice(1);

      if (this.names) {
        return keysAndValuesToObject(this.names, groups);
      } else {
        return groups;
      }
    };

    UrlPattern.prototype.stringify = function (params) {
      if (params == null) {
        params = {};
      }

      if (this.isRegex) {
        throw new Error("can't stringify patterns generated from a regex");
      }

      if (params !== Object(params)) {
        throw new Error("argument must be an object or undefined");
      }

      return stringify(this.ast, params, {});
    };

    UrlPattern.escapeForRegex = escapeForRegex;
    UrlPattern.concatMap = concatMap;
    UrlPattern.stringConcatMap = stringConcatMap;
    UrlPattern.regexGroupCount = regexGroupCount;
    UrlPattern.keysAndValuesToObject = keysAndValuesToObject;
    UrlPattern.P = P;
    UrlPattern.newParser = newParser;
    UrlPattern.defaultOptions = defaultOptions;
    UrlPattern.astNodeToRegexString = astNodeToRegexString;
    UrlPattern.astNodeToNames = astNodeToNames;
    UrlPattern.getParam = getParam;
    UrlPattern.astNodeContainsSegmentsForProvidedParams = astNodeContainsSegmentsForProvidedParams;
    UrlPattern.stringify = stringify;
    return UrlPattern;
  });
});

var UrlTool = /*#__PURE__*/function () {
  function UrlTool() {
    _classCallCheck(this, UrlTool);
  }

  _createClass(UrlTool, null, [{
    key: "urlFromPortion",

    /*合成完整url
    @param {object} value 内容
    1、{string} baseUrl 基本地址
    2、{string} subUrl  相对地址
    3、{object} parameters 参数*/
    value: function urlFromPortion(value) {
      if (!value.params) {
        value.params = {};
      }

      var parameters = [];
      value.subUrl = value.subUrl ? value.subUrl : '/';
      var url = value.baseUrl + value.subUrl;

      for (var key in value.params) {
        if (!value.params.hasOwnProperty(key)) {
          continue;
        }

        if (value.params[key] !== undefined) {
          parameters.push("".concat(key, "=").concat(value.params[key]));
        }
      }

      if (parameters.length > 0) {
        console.log(parameters);
        url += '?' + parameters.join('&');
      }

      return url;
    }
    /*分析url并解析成对象结构
    @param {string} url 地址
    @param {boolean} options 分析配置
    @return {object} 结果 无效返回null*/

  }, {
    key: "portionFromUrl",
    value: function portionFromUrl(url, options) {
      options = _objectSpread2({
        complete: false
      }, options);

      try {
        var urlObj = null;

        try {
          urlObj = new URL(url);
        } catch (e) {
          return null;
        }

        if (urlObj) {
          var _getKV = function _getKV(obj) {
            var queryMap = {};

            if (obj) {
              var _iterator = _createForOfIteratorHelper(obj.split('&')),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var key = _step.value;
                  var key_l = key.split('=');

                  if (key_l.length < 2) {
                    continue;
                  }

                  queryMap[key_l[0]] = key_l[1];
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            return queryMap;
          };

          var query = new urlPattern(/^\??(.*)$/, ['query']).match(urlObj.search).query;

          var queryMap = _getKV(query);

          var hashObj = new urlPattern(/^#?(([\w-]*(\/)?)+)?((\?)+(.*))?$/, ['hashpath', '', '', 'hashsearch', '', '_hashsearch']).match(urlObj.hash);

          var hashMap = _getKV(hashObj._hashsearch);

          var data = {
            host: urlObj.host,
            href: urlObj.href,
            pathname: urlObj.pathname,
            protocol: urlObj.protocol,
            query: queryMap,
            hashpath: hashObj.hashpath,
            hashquery: hashMap
          };

          if (options.complete) {
            data = _objectSpread2(_objectSpread2({}, data), {}, {
              origin: urlObj.origin,
              hostname: urlObj.hostname,
              port: urlObj.port,
              search: urlObj.search,
              username: urlObj.username,
              password: urlObj.password,
              hashsearch: urlObj.hashsearch,
              hash: urlObj.hash
            });
          }

          return data;
        }
      } catch (e) {
        throw e;
      }
    }
  }]);

  return UrlTool;
}();

/*
Created by small peng on 2020/07/13
*/
// 返回参数工具类
var DataTool = /*#__PURE__*/function () {
  function DataTool() {
    _classCallCheck(this, DataTool);
  }

  _createClass(DataTool, null, [{
    key: "formatData",

    /*返回参数
    @param {object} 返回参数
    @param errorCode 状态码
    @param data 数据
    @param message 提示
    @returns {object} 结果*/
    value: function formatData(params) {
      return _objectSpread2({
        errorCode: 0,
        data: params.data,
        message: params.message ? params.message : '请求成功'
      }, params);
    }
  }]);

  return DataTool;
}();

var CacheTool = /*#__PURE__*/function () {
  function CacheTool() {
    _classCallCheck(this, CacheTool);
  }

  _createClass(CacheTool, null, [{
    key: "setCache",

    /*设置缓存内容
    @param {string} key 储存的缓存名
    @param {any} value 储存的缓存内容
    @returns 结果*/
    value: function setCache(key, value) {
      if (key) {
        window.sessionStorage.setItem("".concat(key), JSON.stringify(value));
        return DataTool.formatData({
          message: '设置成功',
          data: {
            key: key,
            value: value
          }
        });
      }

      ConsoleTool.error('设置失败，请检测是否缺少设置参数');
      return null;
    }
    /*获取缓存内容
    @param {string} key 获取的参数名
    @return {any}*/

  }, {
    key: "getCache",
    value: function getCache(key) {
      if (window.sessionStorage.getItem("".concat(key))) {
        return JSON.parse(window.sessionStorage.getItem("".concat(key)));
      }

      ConsoleTool.error("\u83B7\u53D6\u5931\u8D25\uFF0C\u8BF7\u68C0\u6D4B\u662F\u5426\u7F3A\u5C11\u67E5\u627E\u5185\u5BB9\u53C2\u6570");
      return null;
    }
    /*删除缓存内容
    @param {string} key 删除的参数名
    @returns 结果*/

  }, {
    key: "delCache",
    value: function delCache(key) {
      if (key) {
        window.sessionStorage.removeItem("".concat(key));
        return DataTool.formatData({
          message: '删除成功',
          data: {
            key: key
          }
        });
      }

      ConsoleTool.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u68C0\u6D4B\u662F\u5426\u7F3A\u5C11\u5220\u9664\u5185\u5BB9\u53C2\u6570");
      return null;
    }
  }]);

  return CacheTool;
}();

exports.ArrayTool = ArrayTool;
exports.CacheTool = CacheTool;
exports.ConsoleTool = ConsoleTool;
exports.DataTool = DataTool;
exports.DateTool = DateTool;
exports.NumberTool = NumberTool;
exports.ObjectTool = ObjectTool;
exports.StringTool = StringTool;
exports.UrlTool = UrlTool;
