const c = 0.55191502449;

class Donut{
    constructor(x, y, rad, h, col){
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.h = h;
        this.col = col;
        this.originalCol = "#008fff";
    }
    
    draw(){
        noStroke();
        fill(this.originalCol);
        push();
        translate(this.x, this.y);
        beginShape();
            vertex(0,this.rad);
        
            bezierVertex(
                c*this.rad,this.rad, 
                this.rad,c*this.rad, 
                this.rad,0
            );
        
            bezierVertex(
                this.rad,-c*this.rad, 
                c*this.rad,-this.rad, 
                0, -this.rad
            );
        
            bezierVertex(
                -c*this.rad,-this.rad, 
                -this.rad,-c*this.rad, 
                -this.rad,0
            );
        
            bezierVertex(
                -this.rad,c*this.rad, 
                -c*this.rad,this.rad, 
                0,this.rad
            );
        
        
            beginContour();
                vertex(0,this.rad*this.h);

                bezierVertex(
                    -c*this.rad*this.h , this.rad*this.h,
                    -this.rad*this.h , c*this.rad*this.h,                
                    -this.rad*this.h , 0
                );

                bezierVertex(
                    -this.rad*this.h , -c*this.rad*this.h, 
                    -c*this.rad*this.h , -this.rad*this.h,  
                    0 , -this.rad*this.h
                );

                bezierVertex(
                    c*this.rad*this.h , -this.rad*this.h, 
                    this.rad*this.h , -c*this.rad*this.h,
                    this.rad*this.h , 0
                );

                bezierVertex(
                    this.rad*this.h , c*this.rad*this.h,
                    c*this.rad*this.h , this.rad*this.h,
                    0 , this.rad*this.h
                );

            endContour();
        
        endShape();

        pop();
    }
    
}