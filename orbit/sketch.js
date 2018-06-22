var particles = [];
var stars = [];
var earth;


function setup(){
  createCanvas(800,800);

  for( var i = 0; i < 220; i++){
    particles[i] = new Particle();
  }
  for( var i = 0; i < 20; i++){
    stars[i] = new Particle();
  }
  earth = new Particle(createVector(width/2, height/2), createVector(0,0),20);
}


function draw(){
  background(0);
  earth.show();
  earth.update();

  //outter loop
  for(var x = particles.length-1; x>=0 ;x--){
    particles[x].update();
    particles[x].show();
    let force = earth.attraction(particles[x]);
    particles[x].applyForce(force);
    //inner loop
    for(var y = particles.length-1; y >=0; y--){
      // get dist & apply gravity
      if(particles[x] !== particles[y] && particles[x].r < 9){
        let d = particles[y].pos.dist(particles[x].pos);
        let record = 100
        let g = particles[y].attraction(particles[x]);
        particles[y].applyForce(g);
        // find & seek nearest
        if (d < record && d > particles[x].r + 1){
          record = d;
          let closest = particles[x];
          let force = particles[y].seek(closest);
          particles[y].applyForce(force);
        //  let f = earth.attraction(particles[x]);
        //  particles[x].applyForce(f);
        }
        // once particles hit
        if(particles[y].hits(particles[x]) && particles[x].r < 9 && particles[x] !== particles[y] ){
            particles[x].r = particles[x].r + 1;
          if(particles[y].r < 9 && particles.length > 1){
            particles.splice(particles[y], 1)
            break;
          }
        }
      }
    }
  }
}
