
class Particle{
  constructor(
    pos = createVector(random(displayWidth), random(displayHeight)),
    vel = createVector(random(5,15),random(-5,5)),
    r = random(1,10)
  ){
    this.pos = pos;
    this.vel = vel;
    this.acc = createVector();
    this.r = r;
    this.maxspeed = random(5,10);
    this.maxforce = 7;
    this.G = 6.67408;
  }

  show(){


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

  gravity(other){
    // get direction of the force
    let force = p5.Vector.sub(this.pos, other.pos);

    // Now get the distance between objects
    // mag() is a shortcut for writing dist(0, 0, x, y)
    // Calculates the magnitude (or length) of a vector
    let distance = force.mag();
    // limit for atypical
    distance = constrain(distance, 5, 40);
    // normalize
    force.normalize();
    // get that gravitional force
    let strength = (this.G * this.r * other.r)/(distance * distance);
    // force vector = magnitude * direction
    force.mult(strength);
    return force;
  }
  gravity_little(other){
    // get direction of the force
    let force = p5.Vector.sub(this.pos, other.pos);

    // Now get the distance between objects
    // mag() is a shortcut for writing dist(0, 0, x, y)
    // Calculates the magnitude (or length) of a vector
    let distance = force.mag();
    // limit for atypical
    distance = constrain(distance, 5, 100);
    // normalize
    force.normalize();
    // get that gravitional force
    let strength = (this.r * other.r)/(distance * distance);
    // force vector = magnitude * direction
    force.mult(strength);
    return force;
  }
}
