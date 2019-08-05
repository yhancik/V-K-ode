class Diamond{
    constructor(x, y, rad, h, col){
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.h = h;
        this.col = col;
        this.originalCol = "#0036c4";
    }
    
    draw(){
        noStroke();
        fill(this.originalCol);
        push();
        translate(this.x, this.y);
        beginShape();
            vertex(0,-this.rad+(0.5*this.rad*this.h));
            vertex(this.rad-(0.5*this.rad*this.h),0);
            vertex(0,this.rad-(0.5*this.rad*this.h));
            vertex(-this.rad+(0.5*this.rad*this.h),0);
        endShape();

        pop();
    }
    
}