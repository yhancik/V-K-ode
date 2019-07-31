class Donut(){
    
    constructor(x, y, rad, w, col, rune){
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.w = w;
        this.col = col;
        this.rune = rune;
        
        this.c = 0.55191502449;
        
        this.shape = = rune.path(x, y)
            .moveTo(0,1)
            .curveTo(c, 1, 1, c, 1, 0)
            .curveTo(1, -c, c, -1, 0, -1)
            .curveTo(-c, -1, -1, -c, -1, 0)
            .curveTo(-1, c, -c, 1, 0, 1)
            .closePath()
            .moveTo(0*w,1*w)
            .curveTo(c*w, 1*w, 1*w, c*w, 1*w, 0*w)
            .curveTo(1*w, -c*w, c*w, -1*w, 0*w, -1*w)
            .curveTo(-c*w, -1*w, -1*w, -c*w, -1*w, 0*w)
            .curveTo(-1*w, c*w, -c*w, 1*w, 0*w, 1*w)
            .fillRule("evenodd").fill("#c0e300").scale(200).stroke(false);
        
    }
    
}