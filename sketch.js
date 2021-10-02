
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine;
var world;

var ball;

var groundObj, leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1365, 650);

	var ball_options = {
		isStatic:0,
		restitution:0.3,
		fricton:0,
		density:1.2
	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(400,200,20,ball_options);
	World.add(world, ball);
	
	groundObj = new Ground(width/2,640,width,20);
	leftSide = new Ground(1100, 570, 20, 120);
	rightSide = new Ground(1300, 570, 20, 120);

	Engine.run(engine);
	
}


function draw() {	
  background(255,0,0);
  Engine.update(engine);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  fill("white");
  ellipse(ball.position.x,ball.position.y,20,20);
  console.log(ball.x)
  rectMode(CENTER);
	if(keyCode == UP_ARROW){
		keyPressed();
	}
}

function keyPressed(){
	Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.5,y:0.0})
}

