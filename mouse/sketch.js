var particles = [];
var sun;

function setup(){
  createCanvas(800,800);

  for(var x = 0; x <100; x++){
    particles[x] = new Particle();
  }
  sun = new Particle(createVector(400,400), createVector(0,0),40 )
}


function draw(){
  stroke(0);
  strokeWeight(4);
  background(255);
  sun.show()

  for (p of particles){
    p.show()
    p.update()
    let force = sun.gravity(p);
    p.applyForce(force);
    for (pp of particles){
      let ppforce = p.gravity_little(pp);
      pp.applyForce(ppforce)
    }

  }
}
