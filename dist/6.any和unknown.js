"use strict";
// 保留js的灵活性
var randomValue = 666;
randomValue = true;
randomValue = 'xxxx';
randomValue = {};
randomValue();
randomValue.toUpperCase();
// unknown需要确定了对象类型之后才能正常使用
var randomValue1 = 666;
randomValue1 = true;
randomValue1 = 'xxxx';
randomValue1 = {};
if (typeof randomValue1 === 'function') {
    randomValue1();
}
if (typeof randomValue1 === 'string') {
    randomValue1.toUpperCase();
}
