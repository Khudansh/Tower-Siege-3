const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var set1box1,set1box2,set1box3,set1box4,set1box5,set1box6,set1box7,set1box8,set1box9,set1box10,set1box11,set1box12,set1box13,set1box14,set1box15,set1box16,set1box17,set1box18,set1box19,set1box20;
var set2box1,set2box2,set2box3,set2box4,set2box5,set2box6,set2box7,set2box8,set2box9,set2box10,set2box11,set2box12,set2box13,set2box14,set2box15,set2box16,set2box17,set2box18,set2box19,set2box20;
var ground1,ground2,mainGround;
var polygon;
var polygonImg;
var slingshot;
var backgroundImg;
var score=0;

function preload(){
  polygonImg=loadImage("hexagon.png");
  setBackground();
}

function setup() {
  createCanvas(1400,600);
  
  engine = Engine.create();
  world = engine.world;

  //FIRST SET 
  //First layer
  ground1= new Ground(495,350,180,10);
  set1box1 = new Box1(420,330,30,30);
  set1box2 = new Box1(450,330,30,30);
  set1box3 = new Box1(480,330,30,30);
  set1box4 = new Box1(510,330,30,30);
  set1box5 = new Box1(540,330,30,30);
  set1box6 = new Box1(570,330,30,30);
  //Second layer 
  set1box7 = new Box1(495,300,30,30);
  set1box8 = new Box1(465,300,30,30);
  set1box9 = new Box1(525,300,30,30);
  set1box10 = new Box1(555,300,30,30);
  set1box11 = new Box1(435,300,30,30);
  //Third Layer 
  set1box12 = new Box1(480,270,30,30);
  set1box13 = new Box1(510,270,30,30);
  set1box14 = new Box1(450,270,30,30);
  set1box15 = new Box1(540,270,30,30);
  //Fourth Layer
  set1box16 = new Box1(495,240,30,30);
  set1box17 = new Box1(525,240,30,30);
  set1box18 = new Box1(465,240,30,30);
  //Fifth Layer 
  set1box19 = new Box1(510,210,30,30);
  set1box20 = new Box1(480,210,30,30);
  //Top
  set1box21 = new Box1(495,180,30,30);
  //FIRST SET END


  //SECOND SET
  //First layer
  ground2= new Ground(1000,250,180,10);
  set2box1 = new Box2(925,230,30,30);
  set2box2 = new Box2(955,230,30,30);
  set2box3 = new Box2(985,230,30,30);
  set2box4 = new Box2(1015,230,30,30);
  set2box5 = new Box2(1045,230,30,30);
  set2box6 = new Box2(1075,230,30,30);
  //Second layer 
  set2box7 = new Box2(1000,200,30,30);
  set2box8 = new Box2(970,200,30,30);
  set2box9 = new Box2(1030,200,30,30);
  set2box10 = new Box2(940,200,30,30);
  set2box11 = new Box2(1060,200,30,30);
  //Third Layer 
  set2box12 = new Box2(985,170,30,30);
  set2box13 = new Box2(1015,170,30,30);
  set2box14 = new Box2(955,170,30,30);
  set2box15 = new Box2(1045,170,30,30);
  //Fourth Layer
  set2box16 = new Box2(1000,140,30,30);
  set2box17 = new Box2(970,140,30,30);
  set2box18 = new Box2(1030,140,30,30);
  //Fifth Layer 
  set2box19 = new Box2(985,110,30,30);
  set2box20 = new Box2(1015,110,30,30);
  //Top
  set2box21 = new Box2(1000,80,30,30);



  mainGround=new Ground(700,595,1400,10);
  polygon = new Polygon(200,100,50,50);
  slingshot = new SlingShot(polygon.body,{x:200,y:200});
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
}
  Engine.update(engine); 
  textSize(30);
  text("Score:"+score,100,40)

  //FIRST SET 
  //First Layer
  ground1.display();
  set1box1.display();
  set1box1.score();
  set1box2.display();
  set1box2.score();
  set1box3.display();
  set1box3.score();
  set1box4.display();
  set1box4.score();
  set1box5.display();
  set1box5.score();
  set1box6.display();
  set1box6.score();
  //Second Layer
  set1box7.display();
  set1box7.score();
  set1box8.display();
  set1box8.score();
  set1box9.display();
  set1box9.score();
  set1box10.display();
  set1box10.score();
  set1box11.display();
  set1box11.score();
  //Third Layer
  set1box12.display();
  set1box12.score();
  set1box13.display();
  set1box13.score();
  set1box14.display();
  set1box14.score();
  set1box15.display();
  set1box15.score();
  //Fourth Layer
  set1box16.display();
  set1box16.score();
  set1box17.display();
  set1box17.score();
  set1box18.display();
  set1box17.score();
  //Fifth Layer
  set1box19.display();
  set1box19.score();
  set1box20.display();
  set1box20.score();
  //Top
  set1box21.display();
  set1box21.score();
  //FIRST SET END


  //SECOND SET 
  //First Layer
  ground2.display();
  set2box1.display();
  set2box1.score();
  set2box2.display();
  set2box2.score();
  set2box3.display();
  set2box3.score();
  set2box4.display();
  set2box4.score();
  set2box5.display();
  set2box5.score();
  set2box6.display();
  set2box6.score();
  //Second Layer
  set2box7.display();
  set2box7.score();
  set2box8.display();
  set2box8.score();
  set2box9.display();
  set2box9.score();
  set2box10.display();
  set2box10.score();
  set2box11.display();
  set2box11.score();
  //Third Layer
  set2box12.display();
  set2box12.score();
  set2box13.display();
  set2box13.score();
  set2box14.display();
  set2box14.score();
  set2box15.display();
  set2box15.score();
  //Fourth Layer
  set2box16.display();
  set2box16.score();
  set2box17.display();
  set2box17.score();
  set2box18.display();
  set2box18.score();
  //Fifth Layer
  set2box19.display();
  set2box19.score();
  set2box20.display();
  set2box20.score();
  //Top
  set2box21.display();
  set2box21.score();
  //SECOND SET END
  
  mainGround.display();
  polygon.display();
  slingshot.display();

 
}


function mouseDragged(){
  if(slingshot.sling.bodyA!=null){
      Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  }
  
}

function mouseReleased(){
  slingshot.fly();
  Matter.Body.applyForce(polygon.body,{x:polygon.body.position.x,y:polygon.body.position.y},{x:0.7,y:0});
}

function keyPressed(){
  if(keyCode==32){
    slingshot.attach(polygon.body);
  }
}

async function setBackground(){
  var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  console.log(response);

  var responseJSON =await response.json();
  console.log(responseJSON);

  var datetime=responseJSON.datetime;
  console.log(datetime);

  var hour=datetime.slice(11,13);
  console.log(hour);

  if(hour>=06 && hour<=19){
    backgroundImg=loadImage("day.png");
  }

else{
  backgroundImg=loadImage("night.png");
}
}
