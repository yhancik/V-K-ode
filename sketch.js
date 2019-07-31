var r = new Rune({
    container: "body",
    width: 1200,
    height: 1200,
    debug: false
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

//var form = new Form("svg/wshop.svg","#058795", r);
//form.draw();

/*r.path(0, 0)
    .curveTo(100, 0, 0, 0, 50, 0)
    .curveTo(100, 100, 100, 0, 100, 50)
    .curveTo(0, 100, 100, 100, 50, 100)
    .curveTo(0, 0, 0, 100, 0, 50)
  .closePath().scale(5)*/
  /*.moveTo(50, 50)
  .lineTo(140, 50)
  .lineTo(140, 140)
  .lineTo(50, 140)
  .closePath()
  .fillRule("evenodd");*/;



r.path(222, 222)
    .moveTo(0,-200)
    .lineTo(200, 0)
    .lineTo(0, 200)
    .lineTo(-200, 0)
    .lineTo(0, -200)
  .fill("#efdddd").strokeWidth(5)
;

c = 0.55191502449;
p = 0.5;

r.path(666, 666)
    .moveTo(0,1)
    .curveTo(c, 1, 1, c, 1, 0)
    .curveTo(1, -c, c, -1, 0, -1)
    .curveTo(-c, -1, -1, -c, -1, 0)
    .curveTo(-1, c, -c, 1, 0, 1)
    .closePath()
    .moveTo(0*p,1*p)
    .curveTo(c*p, 1*p, 1*p, c*p, 1*p, 0*p)
    .curveTo(1*p, -c*p, c*p, -1*p, 0*p, -1*p)
    .curveTo(-c*p, -1*p, -1*p, -c*p, -1*p, 0*p)
    .curveTo(-1*p, c*p, -c*p, 1*p, 0*p, 1*p)
  .fillRule("evenodd").fill("#c0e300").scale(200).stroke(false);

r.circle(400,400,12).fill("#ebff00").stroke(false);


r.draw();