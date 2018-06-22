var particles = [];
var stars = [];
var earth;


function setup(){
  createCanvas(800,800);

  for( var i = 0; i < 120; i++){
    particles[i] = new Particle();
  }
  earth = new Particle(createVector(width/2, height/2), createVector(0,0));
}


function draw(){
  background(0);

  for(var x = 0; x < particles.length; x++){
    particles[x].update();
    particles[x].show();
    for(var y = 0; y < particles.length; y++){
      if(particles[x] !== particles[y]){
        let d = particles[y].pos.dist(particles[x].pos);
        let record = 100
        if (d < record ){
          record = d;
          let closest = particles[x];
          let force = particles[y].seek(closest);
          particles[y].applyForce(force);
        }
      }
    }
    earth.show();
    earth.update();
  let force = earth.attraction(particles[x]);
  particles[x].applyForce(force);
}



}
