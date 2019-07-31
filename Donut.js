const c = 0.55191502449;

class Donut{
    
    constructor(x, y, rad, h, col, rune){
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.h = h;
        this.col = col;
        this.rune = rune;
        
        this.shape = rune.path(x, y)
            .moveTo(0,1)
            .curveTo(c, 1, 1, c, 1, 0)
            .curveTo(1, -c, c, -1, 0, -1)
            .curveTo(-c, -1, -1, -c, -1, 0)
            .curveTo(-1, c, -c, 1, 0, 1)
            .closePath()
            .moveTo(0*h,1*h)
            .curveTo(c*h, 1*h, 1*h, c*h, 1*h, 0*h)
            .curveTo(1*h, -c*h, c*h, -1*h, 0*h, -1*h)
            .curveTo(-c*h, -1*h, -1*h, -c*h, -1*h, 0*h)
            .curveTo(-1*h, c*h, -c*h, 1*h, 0*h, 1*h)
            .fillRule("evenodd").fill(col).scale(rad).stroke(false);
        
        console.log(this.shape);
    }
    
    setHole(h){
        this.shape.scale(1/this.rad);
        
        this.shape.state.anchors[6] = new Rune.Anchor()
            .setMove(0*h,1*h);
        
        this.shape.state.anchors[7] = new Rune.Anchor()
            .setCurve(c*h, 1*h, 1*h, c*h, 1*h, 0*h);
        
        this.shape.state.anchors[8] = new Rune.Anchor()
            .setCurve(1*h, -c*h, c*h, -1*h, 0*h, -1*h);
        
        this.shape.state.anchors[9] = new Rune.Anchor()
            .setCurve(-c*h, -1*h, -1*h, -c*h, -1*h, 0*h);
        
        this.shape.state.anchors[10] = new Rune.Anchor()
            .setCurve(-1*h, c*h, -c*h, 1*h, 0*h, 1*h);

        this.shape.scale(this.rad);
    }
    
}