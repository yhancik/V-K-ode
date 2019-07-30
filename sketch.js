var r = new Rune({
    container: "body",
    width: 888,
    height: 666,
    //debug: true
});

/*var svg = new Rune.Svg('svg/wshop.svg');
svg.load(function(err) {
  var group = svg.toGroup();
    group.scale(1);
    r.stage.add(group);
    r.draw();
});*/


/*console.log("new Rune.Svg");
var svg = new Rune.Svg('svg/wshop.svg');
console.log("new Rune.Svg = ok");

var coucou;

svg.load(function(err) {
    console.log("svg.toGroup()");
    var group = svg.toGroup();
    coucou = svg.toGroup();
    console.log("svg.toGroup() = " + group);
    group.scale(1);
    r.stage.add(group);
    r.draw();
});


console.log("après le svg.load");*/

var form = new Form("svg/wshop.svg","#058795", r);
form.draw();