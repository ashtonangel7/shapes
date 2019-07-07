import { Shape } from "./shape.mjs";
import { applyAttributes } from "./attributes.mjs";

export class Line extends Shape {

    get x1() {
        return this._x1;
    }
    set x1(value) {
        this._x1 = value;
    }
    get y1() {
        return this._y1;
    }
    set y1(value) {
        this._y1 = value;
    }
    get x2() {
        return this._x2;
    }
    set x2(value) {
        this._x2 = value;
    }
    get y2() {
        return this._y2;
    }
    set y2(value) {
        this._y2 = value;
    }

    constructor(fill, stroke, x1, y1, x2, y2) {
        super("line", fill, stroke);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.applyAttributes(this.element);
    }
    applyAttributes(element) {
        super.applyAttributes(element);
        const attributeMap = new Map([["x1", this.x1], ["y1", this.y1], ["x2", this.x2], ["y2", this.y2]]);
        applyAttributes(element, attributeMap);
    }
}