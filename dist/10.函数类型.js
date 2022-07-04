"use strict";
// 函数类型， 需要给参数声明类型， 不确定有没有的参数用?标识，且需要放在最后一位参数的位置
var log = function (message) {
    console.log(message);
};
var log2 = function (message) {
    console.log(message);
};
log2('xxxx');
var log3 = function (message, code) {
    console.log(message, code);
};
log3('xxxx');
log3('xxxx', 100);
