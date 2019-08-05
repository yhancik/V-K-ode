class Tile{
    constructor(x, y, rad, h, col){
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.h = h;
        this.col = col;
        this.originalCol = "#00d400";
    }
    
    draw(){
        noStroke();
        fill(this.originalCol);
        push();
        translate(this.x, this.y);
        beginShape();
            vertex((0.5-this.h)*this.rad,-this.rad);
            vertex(this.rad,-this.rad);
            vertex(this.rad,(this.h-0.5)*this.rad);
            vertex((0.5-this.h)*this.rad,(this.h-0.5)*this.rad);
        endShape();
        beginShape();
            vertex((this.h-0.5)*this.rad,(0.5-this.h)*this.rad);
            vertex(-this.rad,(0.5-this.h)*this.rad);
            vertex(-this.rad,this.rad); 
            vertex((this.h-0.5)*this.rad,this.rad);
                
        endShape();

        pop();
    }
    
}