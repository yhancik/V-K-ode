const SQUONUT = 0;
const TILES = 1;
const DONUT = 2;
const HOURGLASS = 3;
const BERRY = 4;
const DIAMOND = 5;

class Shapixel {
    constructor(p, shape, x, y, rad, h, col) {
        this.p = p;
        this.shape = shape;
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.h = h;
        this.col = col;
    }

    draw() {
        switch (this.shape) {
            case SQUONUT:
                this.squonut();
                break;
            case TILES:
                this.tiles();
                break;
            case DONUT:
                this.donut();
                break;
            case HOURGLASS:
                this.hourglass();
                break;
            case BERRY:
                this.berry();
                break;
            case DIAMOND:
                this.diamond();
                break;

        }
    }

    berry() {
        this.p.noStroke();

        if (this.col != "") {
            this.p.fill(this.col);
        } else {
            this.p.fill("#ff1c00");
        }

        this.p.push();
        this.p.translate(this.x, this.y);
        //fix, because the circles get out of the frame
        this.p.circle(-0.5 * this.rad, -0.5 * this.rad, (0.5 + this.h) * this.rad);
        this.p.circle(0.5 * this.rad, -0.5 * this.rad, (0.5 + this.h) * this.rad);
        this.p.circle(-0.5 * this.rad, 0.5 * this.rad, (0.5 + this.h) * this.rad);
        this.p.circle(0.5 * this.rad, 0.5 * this.rad, (0.5 + this.h) * this.rad);
        this.p.pop();
    }

    diamond(p) {
        this.p.noStroke();

        if (this.col != "") {
            this.p.fill(this.col);
        } else {
            this.p.fill("#0036c4");
        }

        this.p.push();
        this.p.translate(this.x, this.y);
        this.p.beginShape();
        this.p.vertex(0, -this.rad + (0.5 * this.rad * this.h));
        this.p.vertex(this.rad - (0.5 * this.rad * this.h), 0);
        this.p.vertex(0, this.rad - (0.5 * this.rad * this.h));
        this.p.vertex(-this.rad + (0.5 * this.rad * this.h), 0);
        this.p.endShape();
        this.p.pop();
    }

    donut(p) {
        this.p.noStroke();
        
        if (this.col != "") {
            this.p.fill(this.col);
        } else {
            this.p.fill("#008fff");
        }

        const c = 0.55191502449;
        
        this.p.push();
        this.p.translate(this.x, this.y);
        this.p.beginShape();
        this.p.vertex(0, this.rad);
        

        this.p.bezierVertex(
            c * this.rad, this.rad,
            this.rad, c * this.rad,
            this.rad, 0
        );

        this.p.bezierVertex(
            this.rad, -c * this.rad,
            c * this.rad, -this.rad,
            0, -this.rad
        );

        this.p.bezierVertex(-c * this.rad, -this.rad, -this.rad, -c * this.rad, -this.rad, 0);

        this.p.bezierVertex(-this.rad, c * this.rad, -c * this.rad, this.rad,
            0, this.rad
        );


        this.p.beginContour();
        this.p.vertex(0, this.rad * this.h);

        this.p.bezierVertex(-c * this.rad * this.h, this.rad * this.h, -this.rad * this.h, c * this.rad * this.h, -this.rad * this.h, 0);

        this.p.bezierVertex(-this.rad * this.h, -c * this.rad * this.h, -c * this.rad * this.h, -this.rad * this.h,
            0, -this.rad * this.h
        );

        this.p.bezierVertex(
            c * this.rad * this.h, -this.rad * this.h,
            this.rad * this.h, -c * this.rad * this.h,
            this.rad * this.h, 0
        );

        this.p.bezierVertex(
            this.rad * this.h, c * this.rad * this.h,
            c * this.rad * this.h, this.rad * this.h,
            0, this.rad * this.h
        );

        this.p.endContour();

        this.p.endShape();

        this.p.pop();
    }

    hourglass(p) {
        this.p.noStroke();
        
        if (this.col != "") {
            this.p.fill(this.col);
        } else {
            this.p.fill("#ff009c");
        }

        this.p.push();
        this.p.translate(this.x, this.y);
        this.p.beginShape();
        this.p.vertex(-this.rad, -this.rad);
        this.p.vertex(this.rad, -this.rad);
        this.p.vertex(0, (this.h - 0.5) * this.rad);
        this.p.endShape();
        this.p.beginShape();
        this.p.vertex(0, (0.5 - this.h) * this.rad);
        this.p.vertex(this.rad, this.rad);
        this.p.vertex(-this.rad, this.rad);
        this.p.endShape();

        this.p.pop();
    }

    squonut(p) {
        this.p.noStroke();
        
        if (this.col != "") {
            this.p.fill(this.col);
        } else {
            this.p.fill("#ffeb00");
        }

        this.p.push();
        this.p.translate(this.x, this.y);
        this.p.beginShape();
        this.p.vertex(-this.rad, -this.rad);
        this.p.vertex(this.rad, -this.rad);
        this.p.vertex(this.rad, this.rad);
        this.p.vertex(-this.rad, this.rad);

        this.p.beginContour();
        this.p.vertex(-this.rad * this.h, -this.rad * this.h);
        this.p.vertex(-this.rad * this.h, this.rad * this.h);
        this.p.vertex(this.rad * this.h, this.rad * this.h);
        this.p.vertex(this.rad * this.h, -this.rad * this.h);
        this.p.endContour();

        this.p.endShape();

        this.p.pop();
    }

    tiles(p) {
        this.p.noStroke();
        
        if (this.col != "") {
            this.p.fill(this.col);
        } else {
            this.p.fill("#00d400");
        }

        this.p.push();
        this.p.translate(this.x, this.y);
        this.p.beginShape();
        this.p.vertex((0.5 - this.h) * this.rad, -this.rad);
        this.p.vertex(this.rad, -this.rad);
        this.p.vertex(this.rad, (this.h - 0.5) * this.rad);
        this.p.vertex((0.5 - this.h) * this.rad, (this.h - 0.5) * this.rad);
        this.p.endShape();
        this.p.beginShape();
        this.p.vertex((this.h - 0.5) * this.rad, (0.5 - this.h) * this.rad);
        this.p.vertex(-this.rad, (0.5 - this.h) * this.rad);
        this.p.vertex(-this.rad, this.rad);
        this.p.vertex((this.h - 0.5) * this.rad, this.rad);

        this.p.endShape();

        this.p.pop();
    }


}
