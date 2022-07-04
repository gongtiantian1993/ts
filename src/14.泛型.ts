// generics 泛型 - 数据的模板
// ts声明数组的两种方式
let list1: number[] = [1, 2, 3, 4]
let list2: Array<number> = [1, 2, 3, 4]

// 通过使用泛型，可以使用代码中类型的一致性，提高代码的安全性
let lastInArray = <T>(arr: Array<T>) => {
    return arr[arr.length - 1];
}
const l1 = lastInArray([1, 2, 3, 4]);
const l2 = lastInArray(['a', 'b', 'c']);
const l3 = lastInArray<string | number>(['a', 'b', 'c']);

// 多泛型表达方式
let makeTuple = <T, Y>(x: T, y: Y) => [x, y];
const v1 = makeTuple(1,'one');
const v2 = makeTuple(true,'one');