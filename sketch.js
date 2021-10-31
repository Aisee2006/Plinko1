const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
//arrays
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(600,800);
  engine=Engine.create();
  world=World.create();
  ground = new Ground(width/2,height-10,1200,20);
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75,10));
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175,10));
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275,10));
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375,10));
  }
  }


function draw() {
  background("black"); 
  Engine.update(engine);
  ground.display();
  for(var i=0;i<divisions.length;i=i+1){
    divisions[i].display();
  }
  for(var i=0;i<plinkos.length;i=i+1){
    plinkos[i].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))}
  
  for(var j=0;j<particles.length;j++){
      particles[j].display();
    }
}

