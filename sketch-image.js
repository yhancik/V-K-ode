var tabShixels = [];

var bwMode = false;
var negativeMode = false;
var bgColour = "#FFF";

var seedH;
var seedS;

var sliderNx;
var inputNx;

var sliderNy;
var inputNy;

var sliderMargin;
var inputMargin;

var grid;

let sketch = function (p) {
    
    p.preload = function () {
        img = p.loadImage('srctest.jpg');
    }
    
    
    p.setup = function () {

        p.createCanvas(500, 500);
        
        //img.loadPixels();
        
        grid = new Grid(
            p, img, {
                zoom: 3,
                sampling: 4,
                margin: 0,
                mixedup: false,
                blanks: false
            }
        )
        
        grid.build(img,img);
        
        // zoom
        // ----------------------------------
        sliderZoom = p.select("#zoom");
        sliderZoom.value(grid.zoom);
        sliderZoom.changed(function(){
            inputZoom.value(sliderZoom.value());
            grid.build(img,{zoom:sliderZoom.value()});
        });
        
        inputZoom = p.select("#zoomtxt");
        inputZoom.value(grid.zoom);
        inputZoom.changed(function(){
            sliderZoom.value(inputZoom.value());
            grid.build(img,{zoom:inputZoom.value()});
        });
        
        // sampling
        // ----------------------------------
        sliderSampling = p.select("#sampling");
        sliderSampling.value(grid.sampling);
        sliderSampling.changed(function(){
            inputSampling.value(sliderSampling.value());
            grid.build(img,{sampling:sliderSampling.value()});
        });
        
        inputSampling = p.select("#samplingtxt");
        inputSampling.value(grid.sampling);
        inputSampling.changed(function(){
            sliderSampling.value(inputSampling.value());
            grid.build(img,{sampling:inputSampling.value()});
        });

        // margin
        // ----------------------------------
        sliderMargin = p.select("#margin");
        sliderMargin.value(grid.margin);
        sliderMargin.changed(function(){
            inputMargin.value(sliderMargin.value());
            grid.build(img,{margin:sliderMargin.value()});
        });

        inputMargin = p.select("#margintxt");
        inputMargin.value(grid.margin);
        inputMargin.changed(function(){
            sliderMargin.value(inputMargin.value());
            grid.build(img,{margin:inputMargin.value()});
        });
        
        // mixedup
        // ----------------------------------
        checkboxMixedup = p.select("#mixedup");
        checkboxMixedup.checked(grid.mixedup);
        checkboxMixedup.changed(function(){
            grid.build(img,{mixedup:checkboxMixedup.checked()});
        });
        
        // blanks
        // ----------------------------------
        checkboxBlanks = p.select("#blanks");
        checkboxBlanks.checked(grid.blanks);
        checkboxBlanks.changed(function(){
            grid.build(img,{blanks:checkboxBlanks.checked()});
        });
        
        // bwMode
        // ----------------------------------
        checkboxBW = p.select("#bwMode");
        checkboxBW.checked(bwMode);
        checkboxBW.changed(function(){
            bwMode = checkboxBW.checked();
            grid.build(img);
        });
        
        // negativeMode
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
            grid.build(img);
        });
    }//end p.setup

    p.draw = function (g=p) {        
        //g.background(bgColour);
        //grid.draw(g);

    }//end p.draw
    
};// end let sketch = function (p)

// setting up the two contexts
var p5can = new p5(sketch, "p5can");

function saveToPNG(){
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