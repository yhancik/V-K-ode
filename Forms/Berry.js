class Berry{
    constructor(x, y, rad, h, col){
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.h = h;
        this.col = col;
        this.originalCol = "#ff1c00";
    }
    
    draw(){
        noStroke();
        fill(this.originalCol);
        push();
        translate(this.x, this.y);
        //fix, because the circles get out of the frame
        circle(-0.5*this.rad, -0.5*this.rad, (0.5+this.h)*this.rad);
        circle(0.5*this.rad, -0.5*this.rad, (0.5+this.h)*this.rad);
        circle(-0.5*this.rad, 0.5*this.rad, (0.5+this.h)*this.rad);
        circle(0.5*this.rad, 0.5*this.rad, (0.5+this.h)*this.rad);

        pop();
    }
    
}