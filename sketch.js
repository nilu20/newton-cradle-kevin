

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
     ground = new Ground(400,100,300,10)
     bob1 = new Bob(300,300)
     bob2 = new Bob(350,300)
     bob3 = new Bob(400,300)
     bob4 = new Bob(450,300)
     bob5 = new Bob(500,300)

     rope1 = new Rope(bob1.body,ground.body,-100)
     rope2 = new Rope(bob2.body,ground.body,-50)
     rope3 = new Rope(bob3.body,ground.body,0)
     rope4 = new Rope(bob4.body,ground.body,50)
     rope5 = new Rope(bob5.body,ground.body,100)
  
     Engine.run(engine);
  

}


function draw() {
 
  background(0);
  

  ground.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

   keyPressed()
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === 32) 
	{ Matter.Body.applyForce(bob5.body,bob5.body.position,{x:100,y:-100}); } 
} 



