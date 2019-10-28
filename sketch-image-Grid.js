class Grid {
    constructor(p, img, options={}){
        this.p = p;
        
        this.img = img;
        console.log(this.img.width);
        
        this.zoom = options.zoom || 1;
        this.sampling = options.sampling || 16;
        this.nx = options.horizontalElts || 16;
        this.ny = options.verticalElts || 12;
        this.margin = options.margin || 4;
        this.mixedup = options.mixedup || false;
        this.blanks = options.blanks || false;
        
        this.rad = 0;
        
        this.tabShixels = [];
        
        this.p.resizeCanvas(this.img.width*this.zoom, this.img.height*this.zoom);
        
        this.img.loadPixels();
    }
    
    build(img, options={}){
        this.img = img;
        console.log(this.img.width);
        
        this.zoom = options.zoom || this.zoom;
        this.sampling = options.sampling || this.sampling;
        this.nx = options.horizontalElts || this.nx;
        this.ny = options.verticalElts || this.ny;
        this.margin = options.margin || this.margin;
        this.mixedup = options.mixedup/* || this.mixedup*/;
        this.blanks = options.blanks/* || this.blanks*/;
        
        //this.rad = (this.p.width - ((this.nx-1) * this.margin)) / (this.nx*2);
        //this.rad = min(this.p.width/this.zoom, )
        this.p.resizeCanvas(this.img.width*this.zoom, this.img.height*this.zoom);
        
        this.rad = this.sampling*this.zoom;
        
        this.tabShixels = [];
        
        this.img.loadPixels();
        
        var fillCol = "";
        
        if(bwMode){
           fillCol = this.p.color(2.55*this.p.abs(this.p.brightness(bgColour)-100));
        }
        
        if(!this.mixedup){
            for(var j=0;j<this.ny; j++){
                for(var i=0;i<this.nx; i++){
                    var shixel = new Shapixel(
                        this.p,
                        TILES,
                        this.rad+i*this.rad*2 + i*this.margin,
                        this.rad+j*this.rad*2 + j*this.margin,
                        this.rad,
                        0.5,
                        fillCol);
                    this.tabShixels.push(shixel);
                }
            }
        }
        
        else{
            for(var i=0;i<this.nx; i++){
                for(var j=0;j<this.ny; j++){
                    var shixel = new Shapixel(
                        this.p,
                        TILES,
                        this.rad+i*this.rad*2 + i*this.margin,
                        this.rad+j*this.rad*2 + j*this.margin,
                        this.rad,
                        0.5,
                        fillCol);
                    this.tabShixels.push(shixel);
                }
            }
            
        }
    }
    
    draw(g){
        
        for(var i=0;i<this.nx; i++){
            for(var j=0;j<this.ny; j++){
                var shixel = this.get(i,j);
                
                //var lumi = g.brightness(img.get(i+3*g.frameCount%this.nx,j+this.ny*g.floor(3*g.frameCount/this.nx)));
                
                var lumi = 
                    g.brightness(this.img.get(i*this.img.width/this.nx , j*this.img.height/this.ny));
                
                // number of possible shapes
                // "blanks" are an additional shape
                /*if(this.blanks){
                    lumi = 7.0/6.0 * lumi;
                }

                if(lumi<=255*1/6.0){
                    shixel.shape = SQUONUT;
                }
                else if(lumi<=255*2/6.0){
                    shixel.shape = DONUT;
                }
                else if(lumi<=255*3/6.0){
                    shixel.shape = BERRY;
                }
                else if(lumi<=255*4/6.0){
                    shixel.shape = HOURGLASS;
                }
                else if(lumi<=255*5/6.0){
                    shixel.shape = TILES;
                }
                else if(lumi<=255*6/6.0){
                    shixel.shape = DIAMOND;
                }
                else{
                    shixel.shape = BLANK;
                }

                shixel.draw(g);*/
                
                
                //shixel.h = 1.0 - lumi/255.0;
                shixel.rad = (1.0-lumi/255.0) * (this.p.width - ((this.nx-1) * this.margin)) / (this.nx*2);
                
                /*if(lumi>50){
                    shixel.shape = BLANK;
                }
                else{
                    shixel.shape = BERRY;
                }*/
                shixel.draw(g);
            }
        }
    }
    
    get(x,y){
        return this.tabShixels[x+this.nx*y];
    }
    
    set(x,y,shixel){
        this.tabShixels[x+this.nx*y] = shixel;
    }
}