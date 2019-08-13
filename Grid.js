class Grid {
    constructor(p, options={}){
        this.p = p;
        this.nx = options.horizontalElts || 16;
        this.ny = options.verticalElts || 12;
        this.margin = options.margin || 4;
        this.mixedup = options.mixedup || false;
        this.blanks = options.blanks || false;
        
        this.rad = 0;
        
        this.tabShixels = [];
    }
    
    build(options={}){
        this.nx = options.horizontalElts || this.nx;
        this.ny = options.verticalElts || this.ny;
        this.margin = options.margin || this.margin;
        this.mixedup = options.mixedup/* || this.mixedup*/;
        this.blanks = options.blanks/* || this.blanks*/;
        
        this.rad = (this.p.width - ((this.nx-1) * this.margin)) / (this.nx*2);
        
        this.tabShixels = [];
        
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
                
                this.p.noiseDetail(hNoiseLOD, hNoiseFalloff);
                shixel.h = this.p.noise(
                    seedH+i*hNoiseSpaceScale+this.p.frameCount*hNoiseTimeScale,
                    seedH+j*hNoiseSpaceScale+this.p.frameCount*hNoiseTimeScale
                );
                
                this.p.noiseDetail(sNoiseLOD, sNoiseFalloff);
                var shape = this.p.noise(
                    seedS+i*sNoiseSpaceScale+this.p.frameCount*sNoiseTimeScale,
                    seedS+j*sNoiseSpaceScale+this.p.frameCount*sNoiseTimeScale
                );
                
                // number of possible shapes
                // "blanks" are an additional shape
                if(this.blanks){
                    shape = 7.0/6.0 * shape;
                }

                if(shape<=1/6.0){
                    shixel.shape = SQUONUT;
                }
                else if(shape<=2/6.0){
                    shixel.shape = TILES;
                }
                else if(shape<=3/6.0){
                    shixel.shape = DONUT;
                }
                else if(shape<=4/6.0){
                    shixel.shape = HOURGLASS;
                }
                else if(shape<=5/6.0){
                    shixel.shape = BERRY;
                }
                else if(shape<=6/6.0){
                    shixel.shape = DIAMOND;
                }
                else{
                    shixel.shape = BLANK;
                }

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