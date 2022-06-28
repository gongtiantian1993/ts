interface Point1{
    x:number;
    y:number;
}

function printCord1(pt:Point1){}
printCord1({
    x:100,
    y:100
})

// 扩展接口

interface Animal{
    name:string;
}
interface Bear extends Animal{
    honey:boolean
}
const bear:Bear = {
    name:'大熊',
    honey:true
}