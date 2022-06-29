// void：返回值压根就不存在、 常用
// undefined：变量没赋值，没初始化 ，不常用
// never：一个函数永远执行不完，  抛出异常，不常用
function printResult(): void {
}

function throwError(message: string, errorCode: number): never {
    throw {
        message,
        errorCode
    }
}
throwError('not found', 404);