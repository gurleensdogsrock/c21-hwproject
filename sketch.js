var ball;
var ground1;
var leftSide,rightSide;
var radius=40;



let engine;
let world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{

}

function setup() {
	createCanvas(400,400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_option={
restitution:0.3,
density:1.2,
friction:0
}
ball= Bodies.circle(200,100,20,ball_option);
	World.add(world,ball);
	ground1=new ground(200,600,400,20);
	leftSide
	rectMode(CENTER);
  //ellipseMode(RADIUS);
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);

}

function keyPresses(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
		
	}
}







