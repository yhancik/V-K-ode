var tabShixels = [];

var nx = 60;
var ny = 20;
var rad = 20;
var margin = 2;

var hNoiseSpaceScale = 0.001;
var hNoiseTimeScale = 0.001;

var sNoiseSpaceScale = 0.001;
var sNoiseTimeScale = 0.001;

var seedH;
var seedS;

var sliderNx;
var inputNx;

var sliderNy;
var inputNy;

var sliderMargin;
var inputMargin;

function setup() {
    createCanvas(960, 960, SVG);
    
    // nx
    // ----------------------------------
    sliderNx = select("#nx");
    sliderNx.value(nx);
    sliderNx.changed(function(){
        nx = sliderNx.value();
        inputNx.value(sliderNx.value());
        buildGrid();
    });
    
    inputNx = select("#nxtxt");
    inputNx.value(nx);
    inputNx.changed(function(){
        nx = inputNx.value();
        sliderNx.value(inputNx.value());
        buildGrid();
    });
    
    // ny
    // ----------------------------------
    sliderNy = select("#ny");
    sliderNy.value(ny);
    sliderNy.changed(function(){
        ny = sliderNy.value();
        inputNy.value(sliderNy.value());
        buildGrid();
    });
    
    inputNy = select("#nytxt");
    inputNy.value(ny);
    inputNy.changed(function(){
        ny = inputNy.value();
        sliderNy.value(inputNy.value());
        buildGrid();
    });
    
    // margin
    // ----------------------------------
    sliderMargin = select("#margin");
    sliderMargin.value(margin);
    sliderMargin.changed(function(){
        margin = sliderMargin.value();
        inputMargin.value(sliderMargin.value());
        buildGrid();
    });
    
    inputMargin = select("#margintxt");
    inputMargin.value(margin);
    inputMargin.changed(function(){
        margin = inputMargin.value();
        sliderMargin.value(inputMargin.value());
        buildGrid();
    });
    
    // H Noise Space
    // ----------------------------------
    sliderHNoiseSpace = select("#hNoiseSpace");
    sliderHNoiseSpace.value(hNoiseSpaceScale);
    sliderHNoiseSpace.changed(function(){
        hNoiseSpaceScale = sliderHNoiseSpace.value();
        inputHNoiseSpace.value(hNoiseSpaceScale);
    });
    
    inputHNoiseSpace = select("#hNoiseSpacetxt");
    inputHNoiseSpace.value(hNoiseSpaceScale);
    inputHNoiseSpace.changed(function(){
        hNoiseSpaceScale = inputHNoiseSpace.value();
        sliderHNoiseSpace.value(hNoiseSpaceScale);
    });
    
    // H Noise Time
    // ----------------------------------
    sliderHNoiseTime = select("#hNoiseTime");
    sliderHNoiseTime.value(hNoiseTimeScale);
    sliderHNoiseTime.changed(function(){
        hNoiseTimeScale = sliderHNoiseTime.value();
        inputHNoiseTime.value(hNoiseTimeScale);
    });
    
    inputHNoiseTime = select("#hNoiseTimetxt");
    inputHNoiseTime.value(hNoiseTimeScale);
    inputHNoiseTime.changed(function(){
        hNoiseTimeScale = inputHNoiseTime.value();
        sliderHNoiseTime.value(hNoiseTimeScale);
    });
    
    // S Noise Space
    // ----------------------------------
    sliderSNoiseSpace = select("#sNoiseSpace");
    sliderSNoiseSpace.value(sNoiseSpaceScale);
    sliderSNoiseSpace.changed(function(){
        sNoiseSpaceScale = sliderSNoiseSpace.value();
        inputSNoiseSpace.value(sNoiseSpaceScale);
    });
    
    inputSNoiseSpace = select("#sNoiseSpacetxt");
    inputSNoiseSpace.value(sNoiseSpaceScale);
    inputSNoiseSpace.changed(function(){
        sNoiseSpaceScale = inputSNoiseSpace.value();
        sliderSNoiseSpace.value(sNoiseSpaceScale);
    });
    
    // S Noise Time
    // ----------------------------------
    sliderSNoiseTime = select("#sNoiseTime");
    sliderSNoiseTime.value(sNoiseTimeScale);
    sliderSNoiseTime.changed(function(){
        sNoiseTimeScale = sliderSNoiseTime.value();
        inputSNoiseTime.value(sNoiseTimeScale);
    });
    
    inputSNoiseTime = select("#sNoiseTimetxt");
    inputSNoiseTime.value(sNoiseTimeScale);
    inputSNoiseTime.changed(function(){
        sNoiseTimeScale = inputSNoiseTime.value();
        sliderSNoiseTime.value(sNoiseTimeScale);
    });
    
    rad = (width - ((nx-1) * margin)) / nx;
    
    for(var i=0;i<nx; i++){
        for(var j=0;j<ny; j++){
            var shixel = new Shapixel(
                TILES,
                rad+i*rad*2 + i*margin,
                rad+j*rad*2 + j*margin,
                rad,
                0.5,
                "");
            tabShixels.push(shixel);
        }
    }
    
    seedH = random(7777777);
    seedS = random(7777777);
}

function draw() {
    
    hNoiseSpaceScale = sliderHNoiseSpace.value();
    hNoiseTimeScale = sliderHNoiseTime.value();

    sNoiseSpaceScale = sliderSNoiseSpace.value();
    sNoiseTimeScale = sliderSNoiseTime.value();
    
    
    background(255);
    
    for(var i=0;i<nx; i++){
        for(var j=0;j<ny; j++){
            var shixel = tabShixels[i+nx*j];
                        
            shixel.h = noise(
                        seedH+i*hNoiseSpaceScale+frameCount*hNoiseTimeScale,
                        seedH+j*hNoiseSpaceScale+frameCount*hNoiseTimeScale
            );
            
            var shape = noise(
                        seedS+i*sNoiseSpaceScale+frameCount*sNoiseTimeScale,
                        seedS+j*sNoiseSpaceScale+frameCount*sNoiseTimeScale
            );
            
            
            if(shape<1/6.0){
                shixel.shape = SQUONUT;
            }
            else if(shape<2/6.0){
                shixel.shape = TILES;
            }
            else if(shape<3/6.0){
                shixel.shape = DONUT;
            }
            else if(shape<4/6.0){
                shixel.shape = HOURGLASS;
            }
            else if(shape<5/6.0){
                shixel.shape = BERRY;
            }
            else{
                shixel.shape = DIAMOND;
            }
                        
            shixel.draw();
        }
    }
}

function buildGrid(){
    rad = (width - ((nx-1) * margin)) / nx;
    
    tabShixels = [];
    
    for(var i=0;i<nx; i++){
        for(var j=0;j<ny; j++){
            var shixel = new Shapixel(
                TILES,
                rad+i*rad*2 + i*margin,
                rad+j*rad*2 + j*margin,
                rad,
                0.5,
                "");
            tabShixels.push(shixel);
        }
    }
}

function mouseClicked(){
    //save();
}

function saveSVG(){
    save();
}