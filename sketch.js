
var ground,ball,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,800);
	engine = Engine.create();
	world = engine.world;
	ball =new PaperBall(200,200,20);
	ground =new Ground(600,390,2*width,40);
	box2 = new Box(700,280,200,20);
	box1 = new Box(800,280,20,100);
	box3 = new Box (600,280,20,100);


}


function draw() {
  background("grey");
  Engine.update(engine);
  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
}



