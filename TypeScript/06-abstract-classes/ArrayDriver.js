"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectange_1 = require("./Rectange");
//let myShape = new Shape(10,15);
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRectangle = new Rectange_1.Rectangle(0, 0, 3, 7);
// declate an array of shaper ... initilally empty
var theShapes = [];
//theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var shape = theShapes_1[_i];
    console.log(shape.calculateArea());
}
