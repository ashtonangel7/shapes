import { applyAttributes } from "./attributes.mjs";
import { createSvgElement } from "./elementHelper.mjs";

export class Shape {
    get tag() {
        return this._tag;
    }
    set tag(value) {
        this._tag = value;
    }
    get fill() {
        return this._fill;
    }
    set fill(value) {
        this._fill = value;
    }
    get stroke() {
        return this._stroke
    };
    set stroke(value) {
        this._stroke = value;
    }
    get element() {
        return this._element;
    }
    set element(value) {
        this._element = value;
    }
    constructor(tag, fill, stroke) {
        this.stroke = stroke;
        this.fill = fill;
        this.tag = tag;
        this.element = createSvgElement(tag);
    }

    applyAttributes(element) {
        const attributeMap = new Map([["stroke", this.stroke], ["fill", this.fill]]);
        applyAttributes(element, attributeMap);
    }
}