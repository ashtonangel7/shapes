import { Shape } from "./shape.mjs";
import { applyAttributes } from "./attributes.mjs";

export class Rectangle extends Shape {

    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    get rx() {
        return this._rx;
    }
    set rx(value) {
        this._rx = value;
    }
    get ry() {
        return this._ry;
    }
    set ry(value) {
        this._ry = value;
    }

    constructor(height, width, fill, stroke, x, y, rx = 0, ry = 0) {
        super("rect", fill, stroke);
        this.x = x;
        this.y = y;
        this.rx = rx;
        this.ry = ry;
        this.height = height;
        this.width = width;
        this.applyAttributes(this.element);
    }
    applyAttributes(element) {
        super.applyAttributes(element);
        const attributeMap = new Map([["x", this.x], ["y", this.y], ["height", this.height], ["width", this.width],
        ["rx", this.rx], ["ry", this.ry]]);
        applyAttributes(element, attributeMap);
    }
}