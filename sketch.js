
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Ground(400,200,500,20)
	
	
	ball = new Bob(200,490)
	rope = new Rope(ball.body,roof.body,-200,10)
	

	ball2 = new Bob(300,485)
	rope2 = new Rope(ball2.body,roof.body,-150,10)

	ball3 = new Bob(400,475)
	rope3 = new Rope(ball3.body,roof.body,-100,10)

	ball4 = new Bob(500,450)
	rope4 = new Rope(ball4.body,roof.body,-50,10)
	ball5 = new Bob(600,420)
	rope5 = new Rope(ball5.body,roof.body,0,10)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

	roof.display()
	ball.display()
	rope.display()
	ball2.display()
	rope2.display()
	ball3.display()
	rope3.display()
	ball4.display()
	rope4.display()
	ball5.display()
	rope5.display()
  drawSprites();
 
}



