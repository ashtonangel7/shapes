import { Shape } from "./shape.mjs";
import { applyAttributes } from "./attributes.mjs";

export class Circle extends Shape {

    get cx() {
        return this._cx;
    }
    set cx(value) {
        this._cx = value;
    }
    get cy() {
        return this._cy;
    }
    set cy(value) {
        this._cy = value;
    }
    get r() {
        return this._r;
    }
    set r(value) {
        this._r = value;
    }

    constructor(fill, stroke, cx, cy, r) {
        super("circle", fill, stroke);
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.applyAttributes(this.element);
    }
    applyAttributes(element) {
        super.applyAttributes(element);
        const attributeMap = new Map([["cx", this.cx], ["cy", this.cy], ["r", this.r]]);
        applyAttributes(element, attributeMap);
    }
}