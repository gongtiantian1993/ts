type Point = {
    x:number;
    y:number;
}
type ID = number|string

function printCord(pt:Point){}
printCord({x:100,y:100});

// 类型别名扩展

type Animal1 ={
    name:string;
}
type Bear1 = Animal1 &{
    honey:boolean
}
const bear1:Bear1 ={
    name:'大熊',
    honey:true
}
