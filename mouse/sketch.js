var particles = [];
var sun;
var stars = [];
var value = 255;

function setup(){
  createCanvas(displayWidth,displayHeight);

  for(var x = 0; x <100; x++){
    particles[x] = new Particle();
  }
  sun = new Particle(createVector(width/2,height/2), createVector(0,0),40 )
}


function draw(){
  stroke(0);
  strokeWeight(4);
  col = map(particles[0].pos.x, 0, displayWidth, 0,255);
  background(col);
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
    for (s of stars){
      s.show();
      s.update();
      let sforce = s.gravity(p);
      p.applyForce(sforce);
    }
  }
}

function mousePressed() {
  stars.push(new Particle(createVector(mouseX,mouseY), createVector(0,0),30 ))
}

function keyPressed(){
  if (key == ' '){
    if (value === 255){
      value = 0;
    }else{
      value = 255;
    }
  }
}
