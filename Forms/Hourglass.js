class Hourglass{
    constructor(x, y, rad, h, col){
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.h = h;
        this.col = col;
        this.originalCol = "#ff009c";
    }
    
    draw(){
        noStroke();
        fill(this.originalCol);
        push();
        translate(this.x, this.y);
        beginShape();
            vertex(-this.rad,-this.rad);
            vertex(this.rad,-this.rad);
            vertex(0,(this.h-0.5)*this.rad);
        endShape();
        beginShape();
            vertex(0,(0.5-this.h)*this.rad);
            vertex(this.rad,this.rad);
            vertex(-this.rad,this.rad);
        endShape();

        pop();
    }
    
}