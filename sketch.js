
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var string1, string2, string3, string4, string5;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2, 50, width-100, 40);
	bob1 = new Bob(300, 350, 30);
	bob2 = new Bob(330, 350, 30);
	bob3 = new Bob(330, 350, 30);
	bob4 = new Bob(345, 350, 30);
	bob5 = new Bob(360, 350, 30);

	string1 = new String(bob1, roof, 100, 0);
	string2 = new String(bob2, roof, 115, 0);
	string3 = new String(bob3, roof, 130, 0);
	string4 = new String(bob4, roof, 145, 0);
	string5 = new String(bob5, roof, 160, 0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(128);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  string1.display();
}



