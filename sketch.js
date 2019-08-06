var shixies = [];

var nx = 60;
var ny = 20;
var rad = 20;
var margin = 5;

var seedH;
var seedS;

function setup() {
    createCanvas(960, 540);
    
    rad = (width - ((nx-1) * margin)) / nx;
    
    for(var i=0;i<nx; i++){
        for(var j=0;j<ny; j++){
            var shix = new Shapixel(
                TILES,
                rad+i*rad*2 + i*margin,
                rad+j*rad*2 + j*margin,
                rad,
                0.5,
                "");
            shixies.push(shix);
        }
    }
    
    seedH = random(7777777);
    seedS = random(7777777);
}

function draw() {
    background(255);
    
    for(var i=0;i<nx; i++){
        for(var j=0;j<ny; j++){
            var shix = shixies[i+nx*j];
            
            noiseSeed(seedH);
            shix.h = noise(i*0.5+frameCount*0.05,j*0.5+frameCount*0.05);
            
            noiseSeed(seedS);
            var shape = noise(i*0.5+frameCount*0.05,j*0.5+frameCount*0.05);
            if(shape<1/6){
                shix.shape = SQUONUT;
            }
            else if(shape<2/6){
                shix.shape = TILES;
            }
            else if(shape<3/6){
                shix.shape = DONUT;
            }
            else if(shape<4/6){
                shix.shape = HOURGLASS;
            }
            else if(shape<5/6){
                shix.shape = BERRY;
            }
            else if(shape<1){
                shix.shape = DIAMOND;
            }
            
            shix.draw();
        }
    }
}

