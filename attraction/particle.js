class Particle{

  constructor(r = 5, v = createVector(random(0,2), random(0,2)), pos = createVector(random(0,800), random(0,800))){
    this.pos = pos;
    this.r = r;
    this.vel = v;
    this.acc = createVector();
    this.maxspeed = 10;
    this.maxforce = 20;
    this.G = 6.67
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
    var f = p5.Vector.div(force, this.r);
    this.acc.add(f);
  }

  distance(other){
    //d_force = ((this.r * this.r) * (other.r * other.r));
    record = Infinity;
    var closest = -1;
    for (var i = 0; i < other.length; i++){
      var d = this.position.dist(other[i]);
      if (d < record ){
          record = d;
          closest = list[i];
        }
      if(record < this.r + other.r){
        other.splice(closest ,1);
    } else if (closest > -1) {
      return this.attraction(closest);
    }
  }
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
    let strength = (this.r * m.r)/(distance * distance);
    // force vector = magnitude * direction
    force.mult(strength);
    return force;
  }

}
