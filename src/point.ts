// interface IPoint {
//     drawPoint: () => void;
//     getDistances: (p: IPoint) => Number;
//     X: number;
//     getY: () => number;
//     setY: (value:number) => void;
// }
// export class Point implements IPoint {
//     constructor(private _x: number, private _y: number = 2) { }
//     drawPoint = () => {
//         console.log("x:" + this._x, "y:" + this._y);
//     };
//     getDistances = (p: IPoint) => {
//         return Math.pow(p.X - this._x, 2) + Math.pow(p.getY() - this._y * 2)
//     };
//     set X(value:number){
//         if(value<0){
//             throw new Error('value不能小于0');
//         }
//         this._x = value;
//     }
//     get X(){
//         return this._x;
//     }

//     setY= (value:number) =>{
//         if(value<0){
//             throw new Error('value不能小于0'); 
//         }
//         this._y = value;
//     };
//     getY = ()=>{
//         return this._y;
//     }
// }