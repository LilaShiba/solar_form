var particles = [];
var stars = [];
var big_boy;


function setup(){
  createCanvas(800,800);

  for( var i = 0; i < 120; i++){
    particles[i] = new Particle(5,createVector(0,0));
  }
//  big_boy = new Particle(20,createVector(0,0), createVector(width/2, height/2));
}


function draw(){
  background(0);
//  big_boy.update();
//  big_boy.show();

  for(x of particles){
    x.update();
    x.show();
    for(y of particles){
      if(y !== x){
        let force = y.attraction(x);
      //let bforce = big_boy.attraction(y);
        x.applyForce(force);
    //  }
      //y.applyForce(bforce);
    }
    }

  }

}
