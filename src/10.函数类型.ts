// 函数类型， 需要给参数声明类型， 不确定有没有的参数用?标识，且需要放在最后一位参数的位置
let log = function (message: string) {
    console.log(message);
}
let log2 = (message: string) => {
    console.log(message)
}
log2('xxxx');
let log3 = (message?: string, code?:number) => {
    console.log(message,code);
}
log3('xxxx');
log3('xxxx',100);