var tabShixels = [];

var nx = 6;
var ny = 2;
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

let sketch = function (p) {
    p.setup = function () {

        if (p._userNode.className == "svg") {
            console.log("p.createCanvas(960, 960, p.SVG)");
            p.createCanvas(960, 600, p.SVG);
            p.noLoop();
        }
        
        else {
            p.createCanvas(960, 600);
                
            rad = (p.width - ((nx-1) * margin)) / nx;

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

        }
    }//end p.setup

    p.draw = function (tab = tabShixels) {
        if (p._userNode.className == "svg") {
            console.log("- Drawing SVG");
        }
        
        hNoiseSpaceScale = sliderHNoiseSpace.value();
        hNoiseTimeScale = sliderHNoiseTime.value();

        sNoiseSpaceScale = sliderSNoiseSpace.value();
        sNoiseTimeScale = sliderSNoiseTime.value();


        p.background(255);
        
        /*if(p.frameCount%133 == 0){
            console.log(p._userNode.className + " says: ");
            console.log(tabShixels[0]);
        }*/
        
        for(var i=0;i<nx; i++){
            for(var j=0;j<ny; j++){
                var shixel = tab[i+nx*j];
                
                shixel.h = p.noise(
                            seedH+i*hNoiseSpaceScale+p.frameCount*hNoiseTimeScale,
                            seedH+j*hNoiseSpaceScale+p.frameCount*hNoiseTimeScale
                );

                var shape = p.noise(
                            seedS+i*sNoiseSpaceScale+p.frameCount*sNoiseTimeScale,
                            seedS+j*sNoiseSpaceScale+p.frameCount*sNoiseTimeScale
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
        
        p.fill(0);
        p.circle(p.width*0.5,p.height*0.5,p.height*0.3);
        
        if (p._userNode.className == "svg") {
            console.log("- Drawing SVG: DONE! Now saving first");
            p.save();
        }
    }//end p.draw

    p.buildGrid = function (){
        console.log(p);
        rad = (p.width - ((nx-1) * margin)) / nx;

        tabShixels = [];

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
    }//end p.buildGrid
    
};// end let sketch = function (p)

// setting up the two contexts
var p5can = new p5(sketch, "p5can");
//var p5svg = new p5(sketch, "p5svg");

function saveDefault(){
    p5can.draw();
    p5can.save();
}

function saveToSVG(){
    
    /*var p5svg = p.createGraphics(960,600);
    
    p5svg.fill(0);
    p5svg.circle(p.width*0.5,p.height*0.5,p.height*0.3);
    
    p5svg.save();*/
    
    console.log("Creation new svg canvas ("+Date.now()+")");
    var p5svg = new p5(sketch, "p5svg");
    
    console.log("Copying shixels ("+Date.now()+")");
    var tabShixelsSVG = transferShixels(tabShixels,p5svg);
    
    console.log("Redraw ("+Date.now()+")");
    p5svg.draw(tabShixelsSVG);
    
    console.log("Saving svg... ("+Date.now()+")");
    p5svg.saveSVG(p5svg.elt);
    //p5can.save_canvas();
    console.log("Saved! ("+Date.now()+")");
    
    console.log("Removing SVG canvas!");
    p5svg.remove();
}

function transferShixels(tab, context){
    var nuTab = [];
        
    tab.forEach(function(shixel) {
        nuTab.push(shixel.copy(context));
    });
    
    console.log(nuTab);
    
    return nuTab;
    
}