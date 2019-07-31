var r = new Rune({
    container: "body",
    width: 1200,
    height: 1200,
    debug: false
});

r.el.addEventListener('click', event => {
  r.play();
});

var donuts = [];

var nx = 50;
var ny = 50;
var nrad = 12;

for(var i=0;i<nx; i++){
    for(var j=0;j<ny; j++){
        var don = new Donut(i*nrad*2,j*nrad*2,nrad,0.5,"#c0e300",r);
        donuts.push(don);
    }
}

var frameCount = 0;

r.on('update', function(mouse) {
    for(var i=0;i<nx; i++){
        for(var j=0;j<ny; j++){
            donuts[i+nx*j].setHole(Math.sin(frameCount*0.5));
        }
    }
    
    frameCount++;
    r.pause();
});

r.play();


/*var donuts = [];

var nx = 30;
var ny = 30;
var nrad = 12;

for(var i=0;i<nx; i++){
    for(var j=0;j<ny; j++){
        var don = r.circle(i*nrad*2,j*nrad*2,nrad).stroke(false);
        donuts.push(don);
    }
}

var frameCount = 0;

r.on('update', function() {
    for(var i=0;i<nx; i++){
        for(var j=0;j<ny; j++){
            donuts[i+nx*j].radius(nrad*0.5*(Math.sin(frameCount*0.3)+1));
        }
    }
    
    frameCount++;
});

r.play();*/
