var particles = [];
var stars = [];
var earth;


function setup(){
  createCanvas(800,800);

  for( var i = 0; i < 320; i++){
    particles[i] = new Particle();
  }
  earth = new Particle(createVector(width/2, height/2), createVector(0,0),20);
}


function draw(){
  background(0);
  earth.show();
  earth.update();

  for(var x = 0; x < particles.length; x++){
    particles[x].update();
    particles[x].show();
    for(var y = particles.length-1; y >=0; y--){
      if(particles[x] !== particles[y]){
        let d = particles[y].pos.dist(particles[x].pos);
        let record = 100
        if (d < record && d > particles[x].r + 2){
          record = d;
          let closest = particles[x];
          let force = particles[y].seek(closest);
          particles[y].applyForce(force);
          let g = particles[y].attraction(particles[x]);
          particles[y].applyForce(g);
        }
        if (particles[x].hits(particles[y])){
          particles.push(new Particle(particles[x].pos, particles[x].vel, 10))
          particles.splice(particles[x],1);
          particles.splice(particles[y],1);

        }

      }
    }
  let force = earth.attraction(particles[x]);
  particles[x].applyForce(force);
}



}
