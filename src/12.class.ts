// // 类 class
// interface IPoint{
//     x:number;
//     y:number;
//     drawPoint:()=>void;
//     getDistances:(p:IPoint)=>Number;
// }

// class PointX implements IPoint{
//     x:number;
//     y:number;
//     constructor(x:number,y:number){
//         this.x=x;
//         this.y=y;
//     }
//     drawPoint=()=>{
//         console.log(this.x,this.y)
//     };
//     getDistances=(p:IPoint)=>{
//         return Math.pow(p.x-this.x,2) + Math.pow(p.y-this.y,2);
//     }
// }
// const point = new PointX(100,100);
// point.drawPoint();