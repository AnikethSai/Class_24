const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var Ground1;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var pig1,pig2,pig3,pig4,pig5;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
   
    Ground1 = new ground(200,370,400,10)
    box1 = new box(200,360,50,50)
    box2 = new box(200,320,50,50)
    box3 = new box(280,360,50,50)
    box4 = new box(290,360,50,50)
    box5 = new box(310,360,50,50)
    log1 = new logs(100,300,100,PI/2);
    log2 = new logs(200,320,60,20);
    log3 = new logs(200,320,60,20);
    log4 = new logs(200,320,60,20);
    log5 = new logs(200,320,60,20);
    pig1 = new pigs(380,360,10,10);
    pig2 = new pigs(380,360,10,10);
    pig3 = new pigs(380,360,10,10);
    pig4 = new pigs(380,360,10,10);
    pig5 = new pigs(380,360,10,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
  Ground1.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  log1.display()
  log2.display()
  log3.display()
  log4.display()
  log5.display()
  pig1.display()
  pig2.display()
  pig3.display()
  pig4.display()
  pig5.display()
}