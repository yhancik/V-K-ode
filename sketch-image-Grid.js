class Grid {
    constructor(p, img, options={}){
        this.p = p;
        
        this.img = img;
        this.shape = 0;
        this.zoom = options.zoom || 1;
        this.sampling = options.sampling || 16;
        this.nx = Math.floor(img.width/this.sampling);
        this.ny = Math.floor(img.height/this.sampling);
        this.margin = options.margin || 4;
        this.negative = options.negative || false;
        this.blanks = options.blanks || false;
        
        
        console.log(this.nx, this.ny);
        
        this.rad = 0;
        
        this.tabShixels = [];
        
        this.p.resizeCanvas(this.img.width*this.zoom, this.img.height*this.zoom);
        
        this.img.loadPixels();
        this.statusBuilding = false;
        
        if(options.varisize !== undefined)
            this.varisize = options.varisize;
        
        if(options.variweight !== undefined)
            this.variweight = options.variweight;
        
        if(options.varishape !== undefined)
            this.varishape = options.varishape;
    }
    
    build(img, options={}){
        console.log();
        this.statusBuilding = true;
        this.img = img;
        
        if(options.shape !== undefined)
            this.shape = options.shape;
        
        if(options.zoom !== undefined)
            this.zoom = options.zoom;
        
        if(options.sampling !== undefined)
            this.sampling = options.sampling;
        
        if(options.margin !== undefined)
            this.margin = options.margin;
        
        if(options.varisize !== undefined)
            this.varisize = options.varisize;
        
        if(options.variweight !== undefined)
            this.variweight = options.variweight;
        
        if(options.varishape !== undefined)
            this.varishape = options.varishape;
        
        this.negative = options.negative/* || this.mixedup*/;
        this.blanks = options.blanks/* || this.blanks*/;
        
        this.p.resizeCanvas(this.img.width*this.zoom, this.img.height*this.zoom);
        
        this.nx = Math.floor(img.width/this.sampling);
        this.ny = Math.floor(img.height/this.sampling);
        
        this.rad = (this.sampling*this.zoom - this.margin)*0.5;
        
        this.tabShixels = [];
        
        this.img.loadPixels();
        
        var fillCol = "";
        
        if(bwMode){
           fillCol = this.p.color(2.55*this.p.abs(this.p.brightness(bgColour)-100));
        }
        
        if(this.negative){
                this.p.background("#000");
            }
        else{
            this.p.background("#FFF");
        }

        for(var j=0;j<this.ny; j++){
            for(var i=0;i<this.nx; i++){
                var lumi = 
                    1.0 - this.p.brightness(this.img.get(i*this.sampling , j*this.sampling))/100.0;
                if(this.negative)
                    lumi = 1.0-lumi;
                
                var shixel = new Shapixel(
                    this.p, //p5.js
                    this.shape, //shape
                    (i+1)*this.margin + (2*i+1)*this.rad, //x
                    (j+1)*this.margin + (2*j+1)*this.rad, //y
                    this.rad, //rad
                    0.5, //weight
                    fillCol //col
                );
                
                if(this.varisize){
                    shixel.rad = lumi * this.rad;
                }
                
                if(this.variweight){
                    shixel.h = 1-lumi;
                }
                
                if(this.varishape){
                    if(this.blanks){
                        lumi = 7.0/6.0 * lumi - 1/6.0;
                    }
                    
                    if(lumi<0){
                        shixel.shape = BLANK;
                    }
                    else if(lumi<=1/6.0){
                        shixel.shape = DIAMOND;
                    }
                    else if(lumi<=2/6.0){
                        shixel.shape = TILES;
                    }
                    else if(lumi<=3/6.0){
                        shixel.shape = HOURGLASS;
                    }
                    else if(lumi<=4/6.0){
                        shixel.shape = BERRY;
                    }
                    else if(lumi<=5/6.0){
                        shixel.shape = DONUT;
                    }
                    else{
                        shixel.shape = SQUONUT;
                    }
                }
                
                this.tabShixels.push(shixel);
            }
        }

        this.statusBuilding = false;

        if(!this.statusBuilding){
            for(var i=0;i<this.nx; i++){
                for(var j=0;j<this.ny; j++){
                    var shixel = this.get(i, j);
                    shixel.draw(this.p);
                }
            }
        }
    }
    
    draw(g){
        if(!this.statusBuilding){
            for(var i=0;i<this.nx; i++){
                for(var j=0;j<this.ny; j++){
                    var shixel = this.get(i, j);

                    shixel.draw(g);

                    //var lumi = g.brightness(img.get(i+3*g.frameCount%this.nx,j+this.ny*g.floor(3*g.frameCount/this.nx)));

                    //var lumi = g.brightness(this.img.get(i*this.img.width/this.nx , j*this.img.height/this.ny));

                    //var lumi = g.brightness(this.img.get(i*this.sampling , j*this.sampling))/255.0;

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
                    //shixel.rad = (1.0-lumi/255.0) * (this.p.width - ((this.nx-1) * this.margin)) / (this.nx*2);

                    /*if(lumi>50){
                        shixel.shape = BLANK;
                    }
                    else{
                        shixel.shape = BERRY;
                    }*/
                }
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