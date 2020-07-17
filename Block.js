class Block {
    constructor(x,y,width,height) {
      var options={
        restitution:0.04,
        friction:0.0        
      }
           
      this.Visibility=255
      this.width = width
      this.height = height
      this.body=Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
     }
    
     display(){
       console.log(this.body.speed); 
       //World.add(world,this.body);
       if(this.body.speed<3){
       
       var pose=this.body.position;
       var angle=this.body.angle;
       push();
       translate(pose.x, pose.y);
       rotate(angle);
       rectMode(CENTER);
       strokeWeight(4);
       stroke("green");
       fill(255);
       rect(0, 0, this.width, this.height);
       pop();
      }

      else{
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-5;
      tint(255,this.Visibility);
      pop();
      }
    }

    score(){
      if(this.Visibility<0 && this.Visibility>-105){
        score++;
      }
    }
  };