// 对象类型
const person1 = {
    firstName: 'gong',
    lastName: 'tian tian',
    age: 29
}

// 可以这么声明， 没必要
const person2:{
    firstName: string,
    lastName: string,
    age: number
} = {
    firstName: 'gong',
    lastName: 'tian tian',
    age: 29
}

console.log(person1.age);