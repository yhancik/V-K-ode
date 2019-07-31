var donuts = [];

var nx = 50;
var ny = 50;
var nrad = 12;

function setup() {
    createCanvas(1200, 1200);
    
    for(var i=0;i<nx; i++){
        for(var j=0;j<ny; j++){
            var don = new Donut(i*nrad*2,j*nrad*2,nrad);
            donuts.push(don);
        }
    }
}

function draw() {
    background(255);
    
    for(var i=0;i<nx; i++){
        for(var j=0;j<ny; j++){
            var don = donuts[i+nx*j];
            circle(don.x,don.y,nrad*0.5*(Math.sin(frameCount*0.3)+1));
        }
    }
}

class Donut{
    constructor(x, y, rad){
        this.x = x;
        this.y = y;
        this.rad = rad;
    }
}