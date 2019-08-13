const SQUONUT = 0;
const TILES = 1;
const DONUT = 2;
const HOURGLASS = 3;
const BERRY = 4;
const DIAMOND = 5;

class Shapixel {
    constructor(p, shape, x, y, rad, h, col) {
        /*if(contextName == "svg"){
        }
        else{
            this.p = p5can;
        }*/
        //this.p = p5can;
        this.p = p;
        this.shape = shape;
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.h = h;
        this.col = col;
    }
    
    copy(context){
        return new Shapixel(
            context,
            this.shape,
            this.x,
            this.y,
            this.rad,
            this.h,
            this.col
        );
    }

    draw(g=this.p) {
        switch (this.shape) {
            case SQUONUT:
                this.squonut(g);
                break;
            case TILES:
                this.tiles(g);
                break;
            case DONUT:
                this.donut(g);
                break;
            case HOURGLASS:
                this.hourglass(g);
                break;
            case BERRY:
                this.berry(g);
                break;
            case DIAMOND:
                this.diamond(g);
                break;

        }
    }

    berry(g) {
        g.noStroke();

        if (this.col != "") {
            g.fill(this.col);
        } else {
            g.fill("#ff1c00");
        }

        g.push();
        g.translate(this.x, this.y);
        //fix, because the circles get out of the frame
        g.circle(-0.5 * this.rad, -0.5 * this.rad, (0.5 + this.h) * this.rad);
        g.circle(0.5 * this.rad, -0.5 * this.rad, (0.5 + this.h) * this.rad);
        g.circle(-0.5 * this.rad, 0.5 * this.rad, (0.5 + this.h) * this.rad);
        g.circle(0.5 * this.rad, 0.5 * this.rad, (0.5 + this.h) * this.rad);
        g.pop();
    }

    diamond(g) {
        g.noStroke();

        if (this.col != "") {
            g.fill(this.col);
        } else {
            g.fill("#0036c4");
        }

        g.push();
        g.translate(this.x, this.y);
        g.beginShape();
        g.vertex(0, -this.rad + (0.5 * this.rad * this.h));
        g.vertex(this.rad - (0.5 * this.rad * this.h), 0);
        g.vertex(0, this.rad - (0.5 * this.rad * this.h));
        g.vertex(-this.rad + (0.5 * this.rad * this.h), 0);
        g.endShape();
        g.pop();
    }

    donut(g) {
        //console.log(g);
        g.noStroke();
        
        if (this.col != "") {
            g.fill(this.col);
        } else {
            g.fill("#008fff");
        }

        const c = 0.55191502449;
        
        g.push();
        g.translate(this.x, this.y);
        g.beginShape();
        g.vertex(0, this.rad);
        

        g.bezierVertex(
            c * this.rad, this.rad,
            this.rad, c * this.rad,
            this.rad, 0
        );

        g.bezierVertex(
            this.rad, -c * this.rad,
            c * this.rad, -this.rad,
            0, -this.rad
        );

        g.bezierVertex(-c * this.rad, -this.rad, -this.rad, -c * this.rad, -this.rad, 0);

        g.bezierVertex(-this.rad, c * this.rad, -c * this.rad, this.rad,
            0, this.rad
        );


        g.beginContour();
        g.vertex(0, this.rad * this.h);

        g.bezierVertex(-c * this.rad * this.h, this.rad * this.h, -this.rad * this.h, c * this.rad * this.h, -this.rad * this.h, 0);

        g.bezierVertex(-this.rad * this.h, -c * this.rad * this.h, -c * this.rad * this.h, -this.rad * this.h,
            0, -this.rad * this.h
        );

        g.bezierVertex(
            c * this.rad * this.h, -this.rad * this.h,
            this.rad * this.h, -c * this.rad * this.h,
            this.rad * this.h, 0
        );

        g.bezierVertex(
            this.rad * this.h, c * this.rad * this.h,
            c * this.rad * this.h, this.rad * this.h,
            0, this.rad * this.h
        );

        g.endContour();

        g.endShape();

        g.pop();
    }

    hourglass(g) {
        g.noStroke();
        
        if (this.col != "") {
            g.fill(this.col);
        } else {
            g.fill("#ff009c");
        }

        g.push();
        g.translate(this.x, this.y);
        g.beginShape();
        g.vertex(-this.rad, -this.rad);
        g.vertex(this.rad, -this.rad);
        g.vertex(0, (this.h - 0.5) * this.rad);
        g.endShape();
        g.beginShape();
        g.vertex(0, (0.5 - this.h) * this.rad);
        g.vertex(this.rad, this.rad);
        g.vertex(-this.rad, this.rad);
        g.endShape();

        g.pop();
    }

    squonut(g) {
        g.noStroke();
        
        if (this.col != "") {
            g.fill(this.col);
        } else {
            g.fill("#ffeb00");
        }

        g.push();
        g.translate(this.x, this.y);
        g.beginShape();
        g.vertex(-this.rad, -this.rad);
        g.vertex(this.rad, -this.rad);
        g.vertex(this.rad, this.rad);
        g.vertex(-this.rad, this.rad);

        g.beginContour();
        g.vertex(-this.rad * this.h, -this.rad * this.h);
        g.vertex(-this.rad * this.h, this.rad * this.h);
        g.vertex(this.rad * this.h, this.rad * this.h);
        g.vertex(this.rad * this.h, -this.rad * this.h);
        g.endContour();

        g.endShape();

        g.pop();
    }

    tiles(g) {
        g.noStroke();
        
        if (this.col != "") {
            g.fill(this.col);
        } else {
            g.fill("#00d400");
        }

        g.push();
        g.translate(this.x, this.y);
        g.beginShape();
        g.vertex((0.5 - this.h) * this.rad, -this.rad);
        g.vertex(this.rad, -this.rad);
        g.vertex(this.rad, (this.h - 0.5) * this.rad);
        g.vertex((0.5 - this.h) * this.rad, (this.h - 0.5) * this.rad);
        g.endShape();
        g.beginShape();
        g.vertex((this.h - 0.5) * this.rad, (0.5 - this.h) * this.rad);
        g.vertex(-this.rad, (0.5 - this.h) * this.rad);
        g.vertex(-this.rad, this.rad);
        g.vertex((this.h - 0.5) * this.rad, this.rad);

        g.endShape();

        g.pop();
    }


}
