class Particle{

  constructor(pos = createVector(random(0,800), random(0,800)), vel = createVector(0,1), r = 1){
    this.pos = pos;
    this.r = r;
    this.vel = vel;
    this.acc = createVector();
    this.maxspeed = 7;
    this.maxforce = 2;
    this.G = 6.67408;
  }

  show(){
    stroke(255,5);
    strokeWeight(5);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }

  update(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  applyForce(force){
    let f = p5.Vector.div(force, this.r);
    this.acc.add(f);
  }



  hits(other){
    let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    if(d < this.r + other.r){
      return true;
    }
  }

  attraction(m){
    // direction of force
    let force = p5.Vector.sub(this.pos, m.pos);
    // distance between objects
    let distance = force.mag();
    // limit for atypical
    distance = constrain(distance, 5, 40);
    // normalize
    force.normalize();
    // get that gravitional force
    let strength = (this.G * this.r * m.r)/(distance * distance);
    // force vector = magnitude * direction
    force.mult(strength);
    return force;
  }

  seek(target) {

  var desired = p5.Vector.sub(target.pos, this.pos); // A vector pointing from the location to the target

  // Scale to maximum speed
  desired.setMag(this.maxspeed);

  // Steering = Desired minus velocity
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce); // Limit to maximum steering force

  return steer;
  //this.applyForce(steer);
  }

}
