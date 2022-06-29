// 类型断言： Type Assertions
const myCancase = document.getElementById('#main_canvas') as HTMLCanvasElement;
const myCancase2 = <HTMLCanvasElement>document.getElementById('#main_canvas');

let message:any;
message ="abc";
<string>message;
message as string;