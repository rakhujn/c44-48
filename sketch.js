var bg;
var animal1img;
var animal2img;
var animal3img;
var animal4img;
var animal5img;
var animal1;
var animal2;
var animal3;
var animal4;
var animal5;
var animal6;
var animal7;
var animal8;
var score=0;

function preload(){
  bg = loadImage("images/bg.png")
  animal1img = loadImage("images/rat1.png");
  animal2img = loadImage("images/rat3.png");
  animal3img = loadImage("images/rat5.png");
  animal4img = loadImage("images/rat6.png");
  animal5img = loadImage("images/rat7.png");
  animal6img = loadImage("images/rat8.png");
  animal7img = loadImage("images/rat9.png");
  animal8img = loadImage("images/rat10.png");
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bg); 
  
  spawnAnimals1(); 
  
  if(mousePressedOver(animal1)){
    animal1.destroy();
    score=score+1;
  }
  if(mousePressedOver(animal2)){
    animal2.destroy();
    score=score+1;
  }
  if(mousePressedOver(animal3)){
    animal3.destroy();
    score=score+1;
  }
  if(mousePressedOver(animal4)){
    animal4.destroy();
    score=score+1;
  }
  if(mousePressedOver(animal5)){
    animal5.destroy();
    score=score+1;
  }
  if(mousePressedOver(animal6)){
    animal6.destroy();
    score=score+1;
  }
  if(mousePressedOver(animal7)){
    animal7.destroy();
    score=score+1;
  }
  if(mousePressedOver(animal8)){
    animal8.destroy();
    score=score+1;
  }
  drawSprites();
  textSize(50)
  text("score"+score,50,380);
}

function spawnAnimals1(){

  //function for animal 1
  if(frameCount%25 === 0){
    animal1=createSprite(220,320,10,10);
    animal1.x=Math.round(random(270,270));
    //animal1.y=Math.round(random(20,600));
    
    animal1.addImage("f",animal1img)
    animal1.lifetime=20;
    animal1.scale=0.2;
  }
  
  //function for animal 2
  if(frameCount%62 === 0){
    animal2=createSprite(200,200,10,10);
    animal2.x=Math.round(random(630,630));
    //animal1.y=Math.round(random(20,600));
    
    animal2.addImage("u",animal2img)
    animal2.lifetime=30;
    animal2.scale=0.05;
  }
  
  //function for animal 3
  if(frameCount%35 === 0){
    animal3=createSprite(200,100,10,10);
    animal3.x=Math.round(random(300,300));
    //animal1.y=Math.round(random(20,600));
    
    animal3.addImage("j",animal3img)
    animal3.lifetime=35;
    animal3.scale=0.6;
  }
  
  //function for animal 4
  if(frameCount%86 === 0){
    animal4=createSprite(200,150,10,10);
    animal4.x=Math.round(random(1050,1050));
    //animal1.y=Math.round(random(20,600));
    
    animal4.addImage("h",animal4img)
    animal4.lifetime=40;
    animal4.scale=0.1;
  }

  //function for animal 5
  if(frameCount%58 === 0){
    animal5=createSprite(200,360,10,10);
    animal5.x=Math.round(random(700,700));
    //animal1.y=Math.round(random(20,600));
    
    animal5.addImage("i",animal5img)
    animal5.lifetime=15;
    animal5.scale=0.5;
  }

  //function for animal 6
  if(frameCount%73 === 0){
    animal6=createSprite(200,280,10,10);
    animal6.x=Math.round(random(1150,1150));
    //animal1.y=Math.round(random(20,600));
    
    animal6.addImage("n",animal6img)
    animal6.lifetime=10;
    animal6.scale=0.5;
  }

  //function for animal 7
  if(frameCount%28 === 0){
    animal7=createSprite(200,480,10,10);
    animal7.x=Math.round(random(1100,1100));
    //animal1.y=Math.round(random(20,600));
    
    animal7.addImage("m",animal7img)
    animal7.lifetime=32;
    animal7.scale=0.18;
  }

    //function for animal 8
  if(frameCount%99 === 0){
    animal8=createSprite(200,550,10,10);
    animal8.x=Math.round(random(480,480));
    //animal1.y=Math.round(random(20,600));
      
    animal8.addImage("m",animal8img)
    animal8.lifetime=17;
    animal8.scale=0.18;
  }
}
