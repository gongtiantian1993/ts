"use strict";
// generics 泛型 - 数据的模板
// ts声明数组的两种方式
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4];
// 通过使用泛型，可以使用代码中类型的一致性，提高代码的安全性
var lastInArray = function (arr) {
    return arr[arr.length - 1];
};
var l1 = lastInArray([1, 2, 3, 4]);
var l2 = lastInArray(['a', 'b', 'c']);
var l3 = lastInArray(['a', 'b', 'c']);
// 多泛型表达方式
var makeTuple = function (x, y) { return [x, y]; };
var v1 = makeTuple(1, 'one');
var v2 = makeTuple(true, 'one');
