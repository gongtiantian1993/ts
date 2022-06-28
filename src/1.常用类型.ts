// 基础类型
let str: string = 'hello ts'
let num: number = 100
let bool: boolean = true
// 数组
let arr: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
// any
let obj: any = {
    x: 100,
}
// 函数
function greet(person: string, date: Date) {
    console.log(`Hellow ${person},today is ${date}`);
}
greet('Tian Tian Gong', new Date());

function getFavoriteNumber(): number {
    return 26;
}
// 对象类型
function printCoord(pt: { x: number, y: number }) {
    console.log(`坐标X的值为:${pt.x}`);
    console.log(`坐标y的值为:${pt.y}`);
}
printCoord({ x: 100, y: 200 });

function printName(name: { firstName: string, lastName?: string }) {
    console.log(`First Name:${name.firstName}`);
    console.log(`last Name:${name.lastName ? name.lastName : '---'}`);
}
printName({ firstName: 'Gong', lastName: 'tian tian' });
printName({ firstName: 'Gong' });

// 联合类型
function printId(id:number|string){}
printId(100);
printId('100');
// printId(boolean); //报错
 