import { Shape } from "./shape.mjs";
import { applyAttributes } from "./attributes.mjs";

export class Polygon extends Shape {

    get points() {
        return this._points;
    }
    set points(value) {
        this._points = value;
    }

    constructor(fill, stroke, points) {
        super("polygon", fill, stroke);
        this.points = points;
        this.applyAttributes(this.element);
    }
    applyAttributes(element) {
        super.applyAttributes(element);
        const attributeMap = new Map([["points", this.points]]);
        applyAttributes(element, attributeMap);
    }
}