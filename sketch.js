var tabShixels = [];

var nx = 48;
var ny = 24;
var rad = 20;
var margin = 4;
var mixedup = false;
var blanks = false;
var bwMode = false;
var negativeMode = false;
var bgColour = "#FFF";

var hNoiseSpaceScale = 0.001;
var hNoiseTimeScale = 0.001;
var hNoiseLOD = 4.0;
var hNoiseFalloff = 0.5;

var sNoiseSpaceScale = 0.018;
var sNoiseTimeScale = 0.001;
var sNoiseLOD = 4.0;
var sNoiseFalloff = 0.5;

var seedH;
var seedS;

var sliderNx;
var inputNx;

var sliderNy;
var inputNy;

var sliderMargin;
var inputMargin;

let sketch = function (p) {
    p.setup = function () {

        p.createCanvas(960, 600);
    
        p.buildGrid();

        seedH = p.random(7777777);
        seedS = p.random(7777777);


        // nx
        // ----------------------------------
        sliderNx = p.select("#nx");
        sliderNx.value(nx);
        sliderNx.changed(function(){
            nx = sliderNx.value();
            inputNx.value(sliderNx.value());
            p.buildGrid();
        });

        inputNx = p.select("#nxtxt");
        inputNx.value(nx);
        inputNx.changed(function(){
            nx = inputNx.value();
            sliderNx.value(inputNx.value());
            p.buildGrid();
        });

        // ny
        // ----------------------------------
        sliderNy = p.select("#ny");
        sliderNy.value(ny);
        sliderNy.changed(function(){
            ny = sliderNy.value();
            inputNy.value(sliderNy.value());
            p.buildGrid();
        });

        inputNy = p.select("#nytxt");
        inputNy.value(ny);
        inputNy.changed(function(){
            ny = inputNy.value();
            sliderNy.value(inputNy.value());
            p.buildGrid();
        });

        // margin
        // ----------------------------------
        sliderMargin = p.select("#margin");
        sliderMargin.value(margin);
        sliderMargin.changed(function(){
            margin = sliderMargin.value();
            inputMargin.value(sliderMargin.value());
            p.buildGrid();
        });

        inputMargin = p.select("#margintxt");
        inputMargin.value(margin);
        inputMargin.changed(function(){
            margin = inputMargin.value();
            sliderMargin.value(inputMargin.value());
            p.buildGrid();
        });
        
        // mixedup
        // ----------------------------------
        checkboxMixedup = p.select("#mixedup");
        checkboxMixedup.checked(mixedup);
        checkboxMixedup.changed(function(){
            mixedup = checkboxMixedup.checked();
            p.buildGrid();
        });
        
        // blanks
        // ----------------------------------
        checkboxBlanks = p.select("#blanks");
        checkboxBlanks.checked(blanks);
        checkboxBlanks.changed(function(){
            blanks = checkboxBlanks.checked();
            p.buildGrid();
        });
        
        // bwMode
        // ----------------------------------
        checkboxBW = p.select("#bwMode");
        checkboxBW.checked(bwMode);
        checkboxBW.changed(function(){
            bwMode = checkboxBW.checked();
            p.buildGrid();
        });
        
        // bwMode
        // ----------------------------------
        checkboxNegative = p.select("#negative");
        checkboxNegative.checked(negativeMode);
        checkboxNegative.changed(function(){
            negativeMode = checkboxNegative.checked();
            if(negativeMode){
                bgColour = "#000";
            }
            else{
                bgColour = "#FFF";
            }
            p.buildGrid();
            //p.buildGrid();
        });

        // H Noise Space
        // ----------------------------------
        sliderHNoiseSpace = p.select("#hNoiseSpace");
        sliderHNoiseSpace.value(hNoiseSpaceScale);
        sliderHNoiseSpace.changed(function(){
            hNoiseSpaceScale = sliderHNoiseSpace.value();
            inputHNoiseSpace.value(hNoiseSpaceScale);
        });

        inputHNoiseSpace = p.select("#hNoiseSpacetxt");
        inputHNoiseSpace.value(hNoiseSpaceScale);
        inputHNoiseSpace.changed(function(){
            hNoiseSpaceScale = inputHNoiseSpace.value();
            sliderHNoiseSpace.value(hNoiseSpaceScale);
        });

        // H Noise Time
        // ----------------------------------
        sliderHNoiseTime = p.select("#hNoiseTime");
        sliderHNoiseTime.value(hNoiseTimeScale);
        sliderHNoiseTime.changed(function(){
            hNoiseTimeScale = sliderHNoiseTime.value();
            inputHNoiseTime.value(hNoiseTimeScale);
        });

        inputHNoiseTime = p.select("#hNoiseTimetxt");
        inputHNoiseTime.value(hNoiseTimeScale);
        inputHNoiseTime.changed(function(){
            hNoiseTimeScale = inputHNoiseTime.value();
            sliderHNoiseTime.value(hNoiseTimeScale);
        });
        
        // H Noise Detail
        // ----------------------------------
        sliderHNoiseLOD = p.select("#hNoiseLOD");
        sliderHNoiseLOD.value(hNoiseLOD);
        sliderHNoiseLOD.changed(function(){
            hNoiseLOD = sliderHNoiseLOD.value();
            inputHNoiseLOD.value(hNoiseLOD);
        });
        
        inputHNoiseLOD = p.select("#hNoiseLODtxt");
        inputHNoiseLOD.value(hNoiseLOD);
        inputHNoiseLOD.changed(function(){
            hNoiseLOD = inputHNoiseLOD.value();
            sliderHNoiseLOD.value(hNoiseTimeLOD);
        });
        
        sliderHNoiseFalloff = p.select("#hNoiseFalloff");
        sliderHNoiseFalloff.value(hNoiseFalloff);
        sliderHNoiseFalloff.changed(function(){
            hNoiseFalloff = sliderHNoiseFalloff.value();
            inputHNoiseFalloff.value(hNoiseFalloff);
        });

        inputHNoiseFalloff = p.select("#hNoiseFallofftxt");
        inputHNoiseFalloff.value(hNoiseFalloff);
        inputHNoiseFalloff.changed(function(){
            hNoiseFalloff = inputHNoiseFalloff.value();
            sliderHNoiseFalloff.value(hNoiseTimeFalloff);
        });

        // S Noise Space
        // ----------------------------------
        sliderSNoiseSpace = p.select("#sNoiseSpace");
        sliderSNoiseSpace.value(sNoiseSpaceScale);
        sliderSNoiseSpace.changed(function(){
            sNoiseSpaceScale = sliderSNoiseSpace.value();
            inputSNoiseSpace.value(sNoiseSpaceScale);
        });

        inputSNoiseSpace = p.select("#sNoiseSpacetxt");
        inputSNoiseSpace.value(sNoiseSpaceScale);
        inputSNoiseSpace.changed(function(){
            sNoiseSpaceScale = inputSNoiseSpace.value();
            sliderSNoiseSpace.value(sNoiseSpaceScale);
        });

        // S Noise Time
        // ----------------------------------
        sliderSNoiseTime = p.select("#sNoiseTime");
        sliderSNoiseTime.value(sNoiseTimeScale);
        sliderSNoiseTime.changed(function(){
            sNoiseTimeScale = sliderSNoiseTime.value();
            inputSNoiseTime.value(sNoiseTimeScale);
        });

        inputSNoiseTime = p.select("#sNoiseTimetxt");
        inputSNoiseTime.value(sNoiseTimeScale);
        inputSNoiseTime.changed(function(){
            sNoiseTimeScale = inputSNoiseTime.value();
            sliderSNoiseTime.value(sNoiseTimeScale);
        });
        
        // S Noise Detail
        // ----------------------------------
        sliderSNoiseLOD = p.select("#sNoiseLOD");
        sliderSNoiseLOD.value(sNoiseLOD);
        sliderSNoiseLOD.changed(function(){
            sNoiseLOD = sliderSNoiseLOD.value();
            inputSNoiseLOD.value(sNoiseLOD);
        });
        
        inputSNoiseLOD = p.select("#sNoiseLODtxt");
        inputSNoiseLOD.value(sNoiseLOD);
        inputSNoiseLOD.changed(function(){
            sNoiseLOD = inputSNoiseLOD.value();
            sliderSNoiseLOD.value(sNoiseLOD);
        });
        
        sliderSNoiseFalloff = p.select("#sNoiseFalloff");
        sliderSNoiseFalloff.value(sNoiseFalloff);
        sliderSNoiseFalloff.changed(function(){
            sNoiseFalloff = sliderSNoiseFalloff.value();
            inputSNoiseFalloff.value(sNoiseFalloff);
        });

        inputSNoiseFalloff = p.select("#sNoiseFallofftxt");
        inputSNoiseFalloff.value(sNoiseFalloff);
        inputSNoiseFalloff.changed(function(){
            sNoiseFalloff = inputSNoiseFalloff.value();
            sliderSNoiseFalloff.value(sNoiseFalloff);
        });
    }//end p.setup

    p.draw = function (g=p) {        
        hNoiseSpaceScale = sliderHNoiseSpace.value();
        hNoiseTimeScale = sliderHNoiseTime.value();
        hNoiseLOD = sliderHNoiseLOD.value();
        hNoiseFalloff = sliderHNoiseFalloff.value();

        sNoiseSpaceScale = sliderSNoiseSpace.value();
        sNoiseTimeScale = sliderSNoiseTime.value();
        sNoiseLOD = sliderSNoiseLOD.value();
        sNoiseFalloff = sliderSNoiseFalloff.value();

        g.background(bgColour);
             
        for(var i=0;i<nx; i++){
            for(var j=0;j<ny; j++){
                var shixel = tabShixels[i+nx*j];
                
                p.noiseDetail(hNoiseLOD, hNoiseFalloff);
                shixel.h = p.noise(
                    seedH+i*hNoiseSpaceScale+p.frameCount*hNoiseTimeScale,
                    seedH+j*hNoiseSpaceScale+p.frameCount*hNoiseTimeScale
                );
                
                p.noiseDetail(sNoiseLOD, sNoiseFalloff);
                var shape = p.noise(
                    seedS+i*sNoiseSpaceScale+p.frameCount*sNoiseTimeScale,
                    seedS+j*sNoiseSpaceScale+p.frameCount*sNoiseTimeScale
                );
                
                // number of possible shapes
                // "blanks" are an additional shape
                if(blanks){
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

    }//end p.draw

    p.buildGrid = function (){
        rad = (p.width - ((nx-1) * margin)) / (nx*2);
        console.log(rad);
        console.log(nx*rad*2 + (nx-1)*margin);
        
        tabShixels = [];
        
        if(!mixedup){
            for(var j=0;j<ny; j++){
                for(var i=0;i<nx; i++){
                    var fillCol = "";
                    if(bwMode){
                       fillCol = p.color(2.55*p.abs(p.brightness(bgColour)-100));
                    }
                    
                    var shixel = new Shapixel(
                        p,
                        TILES,
                        rad+i*rad*2 + i*margin,
                        rad+j*rad*2 + j*margin,
                        rad,
                        0.5,
                        fillCol);
                    tabShixels.push(shixel);
                }
            }
        }
        
        else{
            for(var i=0;i<nx; i++){
                for(var j=0;j<ny; j++){
                    var shixel = new Shapixel(
                        p,
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
        
    }//end p.buildGrid
    
};// end let sketch = function (p)

// setting up the two contexts
var p5can = new p5(sketch, "p5can");

function saveToPNG(){
    //p5can.draw();
    p5can.save("iMAL_"+Date.now()+".png");
}

function saveToSVG(){
    console.log("SVG EXPORT");
    var p5svg = p5can.createGraphics(960,600,p5can.SVG);

    console.log("Drawing the SVG!");
    p5can.draw(p5svg);
    
    svgCode = document.querySelector("svg");
    
    console.log("Saving file...");
    p5can.save([svgCode.outerHTML], "iMAL_"+Date.now(), "svg");

    console.log("Saved!");
    
    console.log("Removing svg in HTML");
    p5svg.remove();
    
    console.log(document.querySelector("svg"));
}