const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3;
var box4,box5,box6;
var box7,box8,box9;
var ground;
var ball;
var sling;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20);

    box1 = new Box(500,370);
    box2 = new Box(570,370);
    box3 = new Box(640,370);
    box4 = new Box(710,370);
    box5 = new Box(780,370);
    box6 = new Box(430,370);
    box7 = new Box(850,370);
    box8 = new Box(360,370);
    ball = new Ball(200,200,80);
    sling = new SlingShot(ball.body,{x:500, y:50});
}

function draw(){
    background(0);
    
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
   // box9.display();
    ball.display();
    sling.display();
    ground.display();    
}

function mouseDragged(){
     Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


