var donuts = [];

var nx = 60;
var ny = 20;
var rad = 20;
var margin = 5;

function setup() {
    createCanvas(960, 540);
    
    rad = (width - ((nx-1) * margin)) / nx;
    console.log(rad);
    
    for(var i=0;i<nx; i++){
        for(var j=0;j<ny; j++){
            var don = new Donut(
                rad+i*rad*2 + i*margin,
                rad+j*rad*2 + j*margin,
                rad, 
                0.5);
            donuts.push(don);
        }
    }
    
    
}

function draw() {
    background(255);
    
    for(var i=0;i<nx; i++){
        for(var j=0;j<ny; j++){
            var don = donuts[i+nx*j];
            don.h = noise(i*0.5+frameCount*0.05,j*0.5+frameCount*0.05);
            don.draw();
        }
    }
}

