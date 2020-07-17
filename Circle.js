class Circle {
    constructor(bodyA) {
       var options={
           bodyA:bodyA, 
           density:1,
           restitution:2,
           friction:1
       }
    
    //this.circle=loadImage("")
    this.body=bodies.Circle(x,y,radius,options);
    World.add(world,this.body);
  } 

  display(){
  var pos = this.body.position
  push();
  translate(pos.x,pos.y);
  stroke(48,22,8);
  ellipseMode(CENTER);
  strokeWeight(5);
  ellipse(pos.x,pos.y,40);
  pop();
  }
}