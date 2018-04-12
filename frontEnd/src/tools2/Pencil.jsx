export default class Pencil {
    constructor(first, second, color, width) {

        this.firstCoord = first || null;
        this.secondCoord = second || [];
        this.type = "Pencil";
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
        this.secondCoord = [...this.secondCoord, val];
    }

    set Color(val) {
        this.color = val;
    }

    set Width (val) {
        this.width = val;
    };


    draw(ctx) {

        if (this.secondCoord.length !== 0 && this.firstCoord !== null) {

            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.width;

            ctx.beginPath();

            ctx.moveTo(this.firstCoord.x / 2, this.firstCoord.y / 2);
            this.secondCoord.forEach((item) => {
                ctx.lineTo(item.x / 2, item.y / 2);
            });

            ctx.stroke();
            ctx.closePath();
        }
    }


}