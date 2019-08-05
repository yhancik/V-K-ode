class Squonut{
    constructor(x, y, rad, h, col){
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.h = h;
        this.col = col;
        this.originalCol = "#ffeb00";
    }
    
    draw(){
        noStroke();
        fill(this.originalCol);
        push();
        translate(this.x, this.y);
        beginShape();
            vertex(-this.rad,-this.rad);
            vertex(this.rad,-this.rad);
            vertex(this.rad,this.rad);
            vertex(-this.rad,this.rad);
        
            beginContour();
                vertex(-this.rad*this.h,-this.rad*this.h);
                vertex(-this.rad*this.h,this.rad*this.h);
                vertex(this.rad*this.h,this.rad*this.h);
                vertex(this.rad*this.h,-this.rad*this.h);
            endContour();
        
        endShape();

        pop();
    }
    
}