const SQUONUT = 0;
const TILES = 1;
const DONUT = 2;
const HOURGLASS = 3;
const BERRY = 4;
const DIAMOND = 5;

class Shapixel {
    constructor(shape, x, y, rad, h, col) {
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
        noStroke();

        if (this.col != "") {
            fill(this.col);
        } else {
            fill("#ff1c00");
        }

        push();
        translate(this.x, this.y);
        //fix, because the circles get out of the frame
        circle(-0.5 * this.rad, -0.5 * this.rad, (0.5 + this.h) * this.rad);
        circle(0.5 * this.rad, -0.5 * this.rad, (0.5 + this.h) * this.rad);
        circle(-0.5 * this.rad, 0.5 * this.rad, (0.5 + this.h) * this.rad);
        circle(0.5 * this.rad, 0.5 * this.rad, (0.5 + this.h) * this.rad);
        pop();
    }

    diamond() {
        noStroke();

        if (this.col != "") {
            fill(this.col);
        } else {
            fill("#0036c4");
        }

        push();
        translate(this.x, this.y);
        beginShape();
        vertex(0, -this.rad + (0.5 * this.rad * this.h));
        vertex(this.rad - (0.5 * this.rad * this.h), 0);
        vertex(0, this.rad - (0.5 * this.rad * this.h));
        vertex(-this.rad + (0.5 * this.rad * this.h), 0);
        endShape();
        pop();
    }

    donut() {
        noStroke();
        
        if (this.col != "") {
            fill(this.col);
        } else {
            fill("#008fff");
        }

        push();
        translate(this.x, this.y);
        beginShape();
        vertex(0, this.rad);

        bezierVertex(
            c * this.rad, this.rad,
            this.rad, c * this.rad,
            this.rad, 0
        );

        bezierVertex(
            this.rad, -c * this.rad,
            c * this.rad, -this.rad,
            0, -this.rad
        );

        bezierVertex(-c * this.rad, -this.rad, -this.rad, -c * this.rad, -this.rad, 0);

        bezierVertex(-this.rad, c * this.rad, -c * this.rad, this.rad,
            0, this.rad
        );


        beginContour();
        vertex(0, this.rad * this.h);

        bezierVertex(-c * this.rad * this.h, this.rad * this.h, -this.rad * this.h, c * this.rad * this.h, -this.rad * this.h, 0);

        bezierVertex(-this.rad * this.h, -c * this.rad * this.h, -c * this.rad * this.h, -this.rad * this.h,
            0, -this.rad * this.h
        );

        bezierVertex(
            c * this.rad * this.h, -this.rad * this.h,
            this.rad * this.h, -c * this.rad * this.h,
            this.rad * this.h, 0
        );

        bezierVertex(
            this.rad * this.h, c * this.rad * this.h,
            c * this.rad * this.h, this.rad * this.h,
            0, this.rad * this.h
        );

        endContour();

        endShape();

        pop();
    }

    hourglass() {
        noStroke();
        
        if (this.col != "") {
            fill(this.col);
        } else {
            fill("#ff009c");
        }

        push();
        translate(this.x, this.y);
        beginShape();
        vertex(-this.rad, -this.rad);
        vertex(this.rad, -this.rad);
        vertex(0, (this.h - 0.5) * this.rad);
        endShape();
        beginShape();
        vertex(0, (0.5 - this.h) * this.rad);
        vertex(this.rad, this.rad);
        vertex(-this.rad, this.rad);
        endShape();

        pop();
    }

    squonut() {
        noStroke();
        
        if (this.col != "") {
            fill(this.col);
        } else {
            fill("#ffeb00");
        }

        push();
        translate(this.x, this.y);
        beginShape();
        vertex(-this.rad, -this.rad);
        vertex(this.rad, -this.rad);
        vertex(this.rad, this.rad);
        vertex(-this.rad, this.rad);

        beginContour();
        vertex(-this.rad * this.h, -this.rad * this.h);
        vertex(-this.rad * this.h, this.rad * this.h);
        vertex(this.rad * this.h, this.rad * this.h);
        vertex(this.rad * this.h, -this.rad * this.h);
        endContour();

        endShape();

        pop();
    }

    tiles() {
        noStroke();
        
        if (this.col != "") {
            fill(this.col);
        } else {
            fill("#00d400");
        }

        push();
        translate(this.x, this.y);
        beginShape();
        vertex((0.5 - this.h) * this.rad, -this.rad);
        vertex(this.rad, -this.rad);
        vertex(this.rad, (this.h - 0.5) * this.rad);
        vertex((0.5 - this.h) * this.rad, (this.h - 0.5) * this.rad);
        endShape();
        beginShape();
        vertex((this.h - 0.5) * this.rad, (0.5 - this.h) * this.rad);
        vertex(-this.rad, (0.5 - this.h) * this.rad);
        vertex(-this.rad, this.rad);
        vertex((this.h - 0.5) * this.rad, this.rad);

        endShape();

        pop();
    }


}
