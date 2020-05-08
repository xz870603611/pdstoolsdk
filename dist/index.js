(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    setTimeout(() => {
        console.log('aaa');
    }, 1000);

})));
