export default class Rect {
    constructor(first, second, color, width) {

        this.firstCoord = first || null;
        this.secondCoord = second || null;
        this.type = "Rect";
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

            ctx.strokeRect(this.firstCoord.x / 2, this.firstCoord.y / 2, this.secondCoord.x / 2, this.secondCoord.y / 2);
        }
    }


}