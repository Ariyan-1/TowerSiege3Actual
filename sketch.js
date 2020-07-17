const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var block9,block8,block10,block11,block12,block13,block14,block15,block16;
var block1,block2,block3,block4,block5,block6,block7,block17,block18;
var block19,block20,block21,block22,block23,block24,block25,block26,block27;
var ball,ground,ground2,ground3,ground4;
var score=0;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(400,600,805,30);
  ground2=new Ground(390,265,250,20);
  ground3=new Ground(600,500,250,20);
  ground4=new Ground(250,450,250,20);
  
  //level two
  block8=new Block(330,235,30,40);
  block9=new Block(360,235,30,40);
  block10=new Block(390,235,30,40);
  block11=new Block(420,235,30,40);
  block12=new Block(450,235,30,40);

  //level three
  block13=new Block(360,195,30,40);
  block14=new Block(390,195,30,40);
  block15=new Block(420,195,30,40);

  //top
  block16=new Block(390,155,30,40);
  
  //bottom
  block1=new Block(650,470,30,40);
  block2=new Block(620,470,30,40);
  block3=new Block(590,470,30,40);
  block4=new Block(560,470,30,40);
  block5=new Block(530,470,30,40);

  //2nd layer(middle layer)
  block6=new Block(560,430,30,40);
  block7=new Block(590,430,30,40);
  block17=new Block(620,430,30,40);

  //1st layer(top layer)
  block18=new Block(590,390,30,40);

  //bottom layer
  block19=new Block(180,420,30,40);
  block20=new Block(210,420,30,40);
  block21=new Block(240,420,30,40);
  block22=new Block(270,420,30,40);
  block23=new Block(300,420,30,40);

  //middle layer
  block24=new Block(210,380,30,40);
  block25=new Block(240,380,30,40);
  block26=new Block(270,380,30,40);

  //top layer
  block27=new Block(240,340,30,40);

  //circle=new Circle(sling.body,{x:400},{y:200});
  ball=Bodies.circle(100,290,30)
  World.add(world,ball)

  sling = new SlingShot(this.ball,{x:100,y:240})

}

function draw() {
  background(0);
  Engine.update(engine);
  textSize(20)
  text("Drag the Circle Stone and Release it, to launch it towards the blocks",100,50);
  text("SCORE : "+score,25,90);
  text("Press Space Key to get an extra chance",400,700); 
  strokeWeight(4);
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  sling.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  block26.score();
  block27.score();
  
  ellipse(ball.position.x,ball.position.y,40);
}

function mouseDragged() {
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
} 

function mouseReleased() {
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(this.ball);
  }
};