"use strict";
// 基础类型
var str = 'hello ts';
var num = 100;
var bool = true;
// 数组
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
// any
var obj = {
    x: 100,
};
// 函数
function greet(person, date) {
    console.log("Hellow " + person + ",today is " + date);
}
greet('Tian Tian Gong', new Date());
function getFavoriteNumber() {
    return 26;
}
// 对象类型
function printCoord(pt) {
    console.log("\u5750\u6807X\u7684\u503C\u4E3A:" + pt.x);
    console.log("\u5750\u6807y\u7684\u503C\u4E3A:" + pt.y);
}
printCoord({ x: 100, y: 200 });
function printName(name) {
    console.log("First Name:" + name.firstName);
    console.log("last Name:" + (name.lastName ? name.lastName : '---'));
}
printName({ firstName: 'Gong', lastName: 'tian tian' });
printName({ firstName: 'Gong' });
// 联合类型
function printId(id) { }
printId(100);
printId('100');
// printId(boolean); //报错
