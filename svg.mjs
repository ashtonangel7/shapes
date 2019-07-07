export class Svg {

    get canvas() {
        return this._canvas;
    }

    set canvas(value) {
        this._canvas = value;
    }

    constructor(canvas) {
        this.canvas = canvas;
    }

    async draw() {
        const fragment = document.createDocumentFragment();
        const rectangleModule = await import("./rectangle.mjs");
        const rectangle = new rectangleModule.Rectangle(50, 100, "blue", "black", 5, 5);
        fragment.appendChild(rectangle.element);
        const circleModule = await import("./circle.mjs");
        const circle = new circleModule.Circle("blue", "black", 150, 32, 25);
        fragment.appendChild(circle.element);
        const lineModule = await import("./line.mjs");
        const line = new lineModule.Line("blue", "black", 5, 80, 100, 80);
        fragment.appendChild(line.element);
        const polyLineModule = await import("./polyline.mjs");
        const polyLine = new polyLineModule.PolyLine("none", "black", "130,80 170,80 130,100 170,100");
        fragment.appendChild(polyLine.element);
        const rectangleRound = new rectangleModule.Rectangle(50, 100, "blue", "black", 5, 110, 5, 5);
        fragment.appendChild(rectangleRound.element);
        const polygonModule = await import("./polygon.mjs");
        const star = new polygonModule.Polygon("blue", "black",
            "95,180 80,220 35,220 70,250 55,290 95,260 130,290 120,250 155,220 110,220");
        fragment.appendChild(star.element);
        this.canvas.appendChild(fragment);
    }
}