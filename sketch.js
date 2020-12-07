const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var particle;
var turn = 0;
var gameState = "start";

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, height, 480, 20);

  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j, 75));
  }
  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j, 175));
  }
  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j, 275));
  }
  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-150, 50)

  ground.display();

  if(frameCount%120===0 && gameState = "start"){
    particles.push(new Particle(random(width/2-10, width/2+10,), 10, 10));
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
}