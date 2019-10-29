var tabShixels = [];

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
        img = p.loadImage('mwant_inline.jpg');
    }
    
    
    p.setup = function () {

        p.createCanvas(500, 500);
        
        grid = new Grid(
            p, img, {
                zoom: 3,
                sampling: 4,
                margin: 0,
                mixedup: false,
                blanks: false,
                varisize: true
            }
        )
        
        grid.build(img,img);
        
        // base shape
        // ----------------------------------
        inputShape = p.select("#shape-select");
        inputShape.value(grid.shape);
        inputShape.changed(function(){
            grid.build(img,{shape:parseInt(inputShape.value())});
        });
        
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
                
        // VARIATIONS
        // variation-size
        // ----------------------------------
        checkboxVarisize = p.select("#variation-size");
        checkboxVarisize.checked(grid.varisize);
        checkboxVarisize.changed(function(){
            grid.build(img,{varisize:checkboxVarisize.checked()});
        });
        
        // variation-weight
        // ----------------------------------
        checkboxVariweight = p.select("#variation-weight");
        checkboxVariweight.checked(grid.variweight);
        checkboxVariweight.changed(function(){
            grid.build(img,{variweight:checkboxVariweight.checked()});
        });
        
        // variation-shape
        // ----------------------------------
        checkboxVarishape = p.select("#variation-shape");
        checkboxVarishape.checked(grid.varishape);
        checkboxVarishape.changed(function(){
            grid.build(img,{varishape:checkboxVarishape.checked()});
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
        checkboxBW.checked(grid.bwMode);
        checkboxBW.changed(function(){
            grid.build(img,{bwMode:checkboxBW.checked()});
        });
        
        // negativeMode
        // ----------------------------------
        checkboxNegative = p.select("#negative");
        checkboxNegative.checked(grid.negative);
        checkboxNegative.changed(function(){
            grid.build(img,{negative:checkboxNegative.checked()});
        });
    }//end p.setup

    p.draw = function (g=p) {        
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