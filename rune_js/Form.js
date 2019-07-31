class Form{
    /*var svg;
    var col;
    var rune;*/
    
    constructor(svgFile, col, rune){
        this.svg = new Rune.Svg(svgFile);
        this.col = col;
        this.rune = rune;
    }
    
    draw(){
        console.log(this);
        this.svg.load(function(err) {
            console.log(this);
            var group = this.svg.toGroup();
            //group.scale(1);
            this.rune.stage.add(group);
            this.rune.draw();
        });
    }
}