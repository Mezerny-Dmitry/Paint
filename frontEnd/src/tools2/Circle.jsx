export default class Circle {
    constructor(first, second, color, width) {

        this.firstCoord = first || null;
        this.secondCoord = second || null;
        this.type = "Circle";
        this.date = Date.now();
        this.color = color || "";
        this.width = width || "";
    }

    set fCoord(val) {
        this.firstCoord = val;
    }

    get fCoord() {
        return this.firstCoord
    }

    set sCoord(val) {
        this.secondCoord = val;
    }

    set Color(val) {
        this.color = val;
    }

    set Width (val) {
        this.width = val;
    };

    draw(ctx) {

        if (this.secondCoord !== null && this.firstCoord !== null) {
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.width;


            let xCenter = (this.firstCoord.x + this.secondCoord.x) / 4;
            let yCenter = (this.firstCoord.y + this.secondCoord.y) / 4;
            let radius = Math.sqrt(Math.pow(((this.firstCoord.x - this.secondCoord.x) / 2), 2) + Math.pow(((this.firstCoord.y - this.secondCoord.y) / 2), 2)) / 2;

            ctx.beginPath();
            ctx.arc(xCenter, yCenter, radius, 0, 2 * Math.PI, true);
            ctx.stroke();
            ctx.closePath();
        }
    }


}