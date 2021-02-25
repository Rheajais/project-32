
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snowman,girl;



function setup() {
  createCanvas(800,800);

  

 snowman=new Snowman(400, 200);
}

function draw() {
  background("white");
  
  engine = Engine.create();
  world = engine.world;

  snowman.display();

  Engine.update(engine);
    
  drawSprites();
}