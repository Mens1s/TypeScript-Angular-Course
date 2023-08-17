import { Shape } from "./Shape";

export class Circle extends Shape {

    constructor(x:number, y:number, private _radius ){
        super(x,y);
    }

    public get radius():number {return this._radius};
    public set radius(value:number) {this._radius = value};

    getInfo(): String {
        return super.getInfo() + `, radius = ${this._radius}`
    }
    calculateArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }
}