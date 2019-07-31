var r = new Rune({
    container: "body",
    width: 1200,
    height: 1200,
    debug: false
});

c = 0.55191502449;
p = 0.5;

var don = r.path(0, 666)
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

console.log(don);

r.on('update', function() {
  don.move(0.1, 0, true);
    
});

r.play()